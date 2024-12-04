package se.alex.lexicon.marketplace.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import se.alex.lexicon.marketplace.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    boolean existsByName(String name);
}
