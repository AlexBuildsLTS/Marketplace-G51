package se.alex.lexicon.marketplace.service.impl;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import se.alex.lexicon.marketplace.dto.UserDTO;
import se.alex.lexicon.marketplace.dto.LoginRequest;
import se.alex.lexicon.marketplace.entity.User;
import se.alex.lexicon.marketplace.exception.UserNotAuthenticatedException;
import se.alex.lexicon.marketplace.repository.UserRepository;
import se.alex.lexicon.marketplace.service.UserService;
import se.alex.lexicon.marketplace.util.JwtUtils;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final JwtUtils jwtUtils;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    public UserServiceImpl(UserRepository userRepository, ModelMapper modelMapper, JwtUtils jwtUtils, AuthenticationManager authenticationManager, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
        this.jwtUtils = jwtUtils;
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User findByUsername(String username) {
        Optional<User> userOpt = userRepository.findByUsername(username);
        if (userOpt.isEmpty()) {
            logger.warn("User not found with username: {}", username);
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return userOpt.get();
    }

    @Override
    public User registerUser(UserDTO userDTO) {
        if (userRepository.existsByUsername(userDTO.getUsername())) {
            logger.warn("Username {} is already taken", userDTO.getUsername());
            throw new IllegalArgumentException("Username is already taken.");
        }
        if (userRepository.existsByEmail(userDTO.getEmail())) {
            logger.warn("Email {} is already registered", userDTO.getEmail());
            throw new IllegalArgumentException("Email is already registered.");
        }

        User user = modelMapper.map(userDTO, User.class);

        // Set default role if not provided, else map string to enum
        if (userDTO.getRole() != null && !userDTO.getRole().isEmpty()) {
            try {
                user.setRole(User.Role.valueOf(userDTO.getRole().toUpperCase()));
            } catch (IllegalArgumentException e) {
                logger.warn("Invalid role {} provided, defaulting to BUYER", userDTO.getRole());
                user.setRole(User.Role.BUYER);
            }
        } else {
            user.setRole(User.Role.BUYER);
        }

        // Encode password before saving
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        User savedUser = userRepository.save(user);
        logger.info("User {} registered successfully with ID {}", savedUser.getUsername(), savedUser.getId());
        return savedUser;
    }

    @Override
    public String authenticateUser(LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
            );

            // If authentication is successful, generate JWT token
            String jwt = jwtUtils.generateToken(loginRequest.getUsername());
            logger.info("User {} authenticated successfully", loginRequest.getUsername());
            return jwt;
        } catch (BadCredentialsException e) {
            logger.warn("Invalid credentials for user {}", loginRequest.getUsername());
            throw new UserNotAuthenticatedException("Invalid username or password.");
        } catch (AuthenticationException e) {
            logger.error("Authentication exception for user {}: {}", loginRequest.getUsername(), e.getMessage());
            throw new UserNotAuthenticatedException("Authentication failed.");
        }
    }
}
