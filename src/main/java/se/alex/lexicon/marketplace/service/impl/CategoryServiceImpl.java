package se.alex.lexicon.marketplace.service.impl;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.alex.lexicon.marketplace.entity.Category;
import se.alex.lexicon.marketplace.repository.CategoryRepository;
import se.alex.lexicon.marketplace.service.CategoryService;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;
    private static final Logger logger = LoggerFactory.getLogger(CategoryServiceImpl.class);

    @Autowired
    public CategoryServiceImpl(CategoryRepository categoryRepository, ModelMapper modelMapper) {
        this.categoryRepository = categoryRepository;
    }

    /**
     * Creates a new category.
     *
     * @param category The category entity.
     * @return The created category.
     */
    @Override
    public Category createCategory(Category category) {
        Category savedCategory = categoryRepository.save(category);
        logger.info("Category '{}' created successfully with ID {}", savedCategory.getName(), savedCategory.getId());
        return savedCategory;
    }

    /**
     * Retrieves all categories.
     *
     * @return List of categories.
     */
    @Override
    public List<Category> findAll() {
        List<Category> categories = categoryRepository.findAll();
        logger.info("Fetched {} categories", categories.size());
        return categories;
    }
}
