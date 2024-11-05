package se.alex.lexicon.marketplace.controller;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.alex.lexicon.marketplace.dto.UserDTO;
import se.alex.lexicon.marketplace.dto.LoginRequest;
import se.alex.lexicon.marketplace.dto.JwtResponse;
import se.alex.lexicon.marketplace.service.UserService;
import se.alex.lexicon.marketplace.util.JwtUtils;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    @Getter
    private final JwtUtils jwtUtils;

    @Autowired
    public UserController(UserService userService, JwtUtils jwtUtils) {
        this.userService = userService;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@Valid @RequestBody UserDTO userDTO) {
        try {
            userService.registerUser(userDTO);
            return ResponseEntity.ok("User registered successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<JwtResponse> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        String jwt = userService.authenticateUser(loginRequest);
        return ResponseEntity.ok(new JwtResponse(jwt));
    }

}
