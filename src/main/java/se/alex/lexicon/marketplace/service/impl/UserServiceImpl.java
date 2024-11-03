package se.alex.lexicon.marketplace.service.impl;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import se.alex.lexicon.marketplace.dto.UserDTO;
import se.alex.lexicon.marketplace.dto.LoginRequest;
import se.alex.lexicon.marketplace.entity.User;
import se.alex.lexicon.marketplace.repository.UserRepository;
import se.alex.lexicon.marketplace.service.UserService;
import se.alex.lexicon.marketplace.util.JwtUtils;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final ModelMapper modelMapper;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;
    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder,
                           ModelMapper modelMapper, AuthenticationManager authenticationManager, JwtUtils jwtUtils) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.modelMapper = modelMapper;
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    /**
     * Registers a new user with the provided details.
     *
     * @param userDTO The user data transfer object containing registration details.
     */
    @Override
    public void registerUser(UserDTO userDTO) {
        logger.info("Registering new user with email: {}", userDTO.getEmail());
        if (userRepository.existsByEmail(userDTO.getEmail())) {
            logger.warn("Registration failed: Email {} already exists", userDTO.getEmail());
            throw new IllegalArgumentException("Email already exists.");
        }

        // Convert UserDTO to User entity
        User user = modelMapper.map(userDTO, User.class);
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));

        // Assign Role (Default to BUYER if not specified)
        if (userDTO.getRole() != null && !userDTO.getRole().isEmpty()) {
            try {
                user.assignRole(User.Role.valueOf(userDTO.getRole().toUpperCase()));
            } catch (IllegalArgumentException e) {
                logger.warn("Invalid role specified: {}", userDTO.getRole());
                throw new IllegalArgumentException("Invalid role specified");
            }
        } else {
            user.assignRole(User.Role.BUYER);
            logger.info("Assigned default role BUYER to user {}", userDTO.getUsername());
        }

        userRepository.save(user);
        logger.info("User {} registered successfully", userDTO.getUsername());
    }

    /**
     * Authenticates a user with the provided login credentials.
     *
     * @param loginRequest The login request containing username and password.
     * @return JWT token if authentication is successful.
     */
    @Override
    public String authenticateUser(LoginRequest loginRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
            );
            String jwt = jwtUtils.generateToken(authentication.getName());
            logger.info("User {} authenticated successfully", loginRequest.getUsername());
            return jwt;
        } catch (AuthenticationException e) {
            logger.warn("Authentication failed for user {}: {}", loginRequest.getUsername(), e.getMessage());
            throw new IllegalArgumentException("Invalid username or password.");
        }
    }

    /**
     * Finds a user by their username.
     *
     * @param username The username to search for.
     * @return The User entity.
     */
    @Override
    public User findByUsername(String username) {
        logger.info("Fetching user with username: {}", username);
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
    }
}
