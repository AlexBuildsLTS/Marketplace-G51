package se.alex.lexicon.marketplace.service;

import se.alex.lexicon.marketplace.entity.User;
import se.alex.lexicon.marketplace.dto.UserDTO;
import se.alex.lexicon.marketplace.dto.LoginRequest;

public interface UserService {
    User findByUsername(String username);
    User registerUser(UserDTO userDTO);
    String authenticateUser(LoginRequest loginRequest); // Added method
}
