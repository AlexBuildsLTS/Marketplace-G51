package se.alex.lexicon.marketplace.service;

import se.alex.lexicon.marketplace.dto.UserDTO;
import se.alex.lexicon.marketplace.dto.LoginRequest;
import se.alex.lexicon.marketplace.entity.User;

public interface UserService {
    User registerUser(UserDTO userDTO);
    String authenticateUser(LoginRequest loginRequest);
    User findByUsername(String username);
}
