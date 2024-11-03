package se.alex.lexicon.marketplace.service;

import se.alex.lexicon.marketplace.dto.UserDTO;
import se.alex.lexicon.marketplace.dto.LoginRequest;

public interface UserService {
    void registerUser(UserDTO userDTO);
    String authenticateUser(LoginRequest loginRequest);
    se.alex.lexicon.marketplace.entity.User findByUsername(String username);
}
