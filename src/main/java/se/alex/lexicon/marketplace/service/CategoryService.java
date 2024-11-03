package se.alex.lexicon.marketplace.service;

import se.alex.lexicon.marketplace.entity.Category;

import java.util.List;

public interface CategoryService {
    Category createCategory(Category category);
    List<Category> findAll();
}
