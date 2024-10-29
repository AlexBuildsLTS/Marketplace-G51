package se.alex.lexicon.marketplace.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.alex.lexicon.marketplace.entity.Category;
import se.alex.lexicon.marketplace.repository.CategoryRepository;
import se.alex.lexicon.marketplace.service.CategoryService;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Category createCategory(Category category) {

        return categoryRepository.save(category);
    }

    @Override
    public List<Category> findAll() {

        return categoryRepository.findAll();
    }
}
