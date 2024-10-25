package se.alex.lexicon.marketplace.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import se.alex.lexicon.marketplace.entity.User;
import se.alex.lexicon.marketplace.exception.UserAlreadyExistsException;
import se.alex.lexicon.marketplace.service.UserService;
import se.alex.lexicon.marketplace.util.JwtUtils;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    @Autowired
    public UserController(UserService userService, AuthenticationManager authenticationManager, JwtUtils jwtUtils) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            User registeredUser = userService.registerUser(user);
            registeredUser.setPassword(null); // Hide password before returning
            System.out.println("User registered successfully: " + user.getUsername());
            return ResponseEntity.ok(registeredUser);
        } catch (UserAlreadyExistsException ex) {
            System.err.println("Registration failed - user already exists: " + user.getEmail());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(ex.getMessage());
        } catch (Exception ex) {
            System.err.println("An unexpected error occurred during registration: " + ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An unexpected error occurred.");
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticateUser(@RequestBody User user) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
            );

            String username = authentication.getName();
            System.out.println("User authenticated: " + username); // Debug log
            String token = jwtUtils.generateToken(username);

            return ResponseEntity.ok(Collections.singletonMap("token", token));

        } catch (AuthenticationException e) {
            System.err.println("Authentication failed for user: " + user.getUsername()); // Debug log
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        try {
            List<User> users = userService.findAll();
            users.forEach(user -> user.setPassword(null));
            return ResponseEntity.ok(users);
        } catch (Exception ex) {
            System.err.println("An error occurred while retrieving users: " + ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
