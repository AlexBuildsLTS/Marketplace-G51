package se.alex.lexicon.marketplace.service;

import se.alex.lexicon.marketplace.entity.User;

public interface UserService {
    User registerUser(User user);
    User findByEmail(String email);
}