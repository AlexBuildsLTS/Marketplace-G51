package se.alex.lexicon.marketplace.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import se.alex.lexicon.marketplace.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
