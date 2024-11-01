package se.alex.lexicon.marketplace.service;

import se.alex.lexicon.marketplace.dto.UserDTO;
import se.alex.lexicon.marketplace.entity.User;

public interface UserService {
    void registerUser(UserDTO userDTO);
    User findByUsername(String username);
}
