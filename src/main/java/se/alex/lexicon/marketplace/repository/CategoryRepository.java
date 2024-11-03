package se.alex.lexicon.marketplace.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import se.alex.lexicon.marketplace.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    // Additional custom queries can be defined here if needed
}
