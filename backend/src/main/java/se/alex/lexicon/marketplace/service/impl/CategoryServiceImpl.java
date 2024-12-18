package se.alex.lexicon.marketplace.service.impl;

import lombok.Getter;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import se.alex.lexicon.marketplace.entity.Category;
import se.alex.lexicon.marketplace.repository.CategoryRepository;
import se.alex.lexicon.marketplace.service.CategoryService;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;
    @Getter
    private final ModelMapper modelMapper;
    private static final Logger logger = LoggerFactory.getLogger(CategoryServiceImpl.class);

    public CategoryServiceImpl(CategoryRepository categoryRepository, ModelMapper modelMapper) {
        this.categoryRepository = categoryRepository;
        this.modelMapper = modelMapper;
    }

    /**
     * Creates a new category and evicts the "categories" cache to ensure it is up-to-date.
     *
     * @param category The category to create.
     * @return The created category.
     */
    @Override
    @CacheEvict(value = "categories", allEntries = true) // Clear cache when a new category is created
    public Category createCategory(Category category) {
        if (categoryRepository.existsByName(category.getName())) {
            logger.warn("Category name {} already exists", category.getName());
            throw new IllegalArgumentException("Category name must be unique.");
        }
        Category savedCategory = categoryRepository.save(category);
        logger.info("Category {} created successfully with ID {}", savedCategory.getName(), savedCategory.getId());
        return savedCategory;
    }

    /**
     * Retrieves all categories with caching enabled.
     * If the "categories" cache exists, data will be retrieved from the cache.
     *
     * @return A list of all categories.
     */
    @Override
    @Cacheable("categories") // Cache results under "categories"
    public List<Category> findAll() {
        List<Category> categories = categoryRepository.findAll();
        logger.info("Fetched {} categories", categories.size());
        return categories;
    }
}
