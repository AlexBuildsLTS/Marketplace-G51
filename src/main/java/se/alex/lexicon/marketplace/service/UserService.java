package se.alex.lexicon.marketplace.service;

import se.alex.lexicon.marketplace.entity.User;

public interface UserService {
    void registerUser(User user);
    User findByUsername(String username);
}