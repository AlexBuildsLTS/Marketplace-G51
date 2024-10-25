package se.alex.lexicon.marketplace.service;

import se.alex.lexicon.marketplace.entity.User;

import java.util.List;

public interface UserService {
    User registerUser(User user);
    User findByUsername(String username);
    List<User> findAll();
}
