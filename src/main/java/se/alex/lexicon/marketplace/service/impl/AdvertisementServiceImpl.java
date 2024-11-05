package se.alex.lexicon.marketplace.service.impl;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import se.alex.lexicon.marketplace.dto.AdvertisementDTO;
import se.alex.lexicon.marketplace.entity.Advertisement;
import se.alex.lexicon.marketplace.entity.Category;
import se.alex.lexicon.marketplace.entity.User;
import se.alex.lexicon.marketplace.exception.UserNotAuthenticatedException;
import se.alex.lexicon.marketplace.repository.AdvertisementRepository;
import se.alex.lexicon.marketplace.repository.CategoryRepository;
import se.alex.lexicon.marketplace.service.AdvertisementService;
import se.alex.lexicon.marketplace.service.UserService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AdvertisementServiceImpl implements AdvertisementService {

    private final AdvertisementRepository advertisementRepository;
    private final CategoryRepository categoryRepository;
    private final ModelMapper modelMapper;
    private final UserService userService;
    private static final Logger logger = LoggerFactory.getLogger(AdvertisementServiceImpl.class);

    @Autowired
    public AdvertisementServiceImpl(AdvertisementRepository advertisementRepository, CategoryRepository categoryRepository, ModelMapper modelMapper, UserService userService) {
        this.advertisementRepository = advertisementRepository;
        this.categoryRepository = categoryRepository;
        this.modelMapper = modelMapper;
        this.userService = userService;
    }

    @Override
    public AdvertisementDTO createAdvertisement(AdvertisementDTO advertisementDTO, Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()
                || (authentication instanceof AnonymousAuthenticationToken)) {
            logger.warn("Attempt to create advertisement without authentication");
            throw new UserNotAuthenticatedException("User must be authenticated to create advertisements.");
        }

        String username = authentication.getName();
        User user = userService.findByUsername(username);
        logger.info("Authenticated user {} is creating an advertisement", username);

        Advertisement advertisement = modelMapper.map(advertisementDTO, Advertisement.class);

        // Fetch Category by ID
        Optional<Category> categoryOpt = categoryRepository.findById(advertisementDTO.getCategoryId());
        if (categoryOpt.isEmpty()) {
            logger.warn("Category not found with id {}", advertisementDTO.getCategoryId());
            throw new IllegalArgumentException("Category not found with id " + advertisementDTO.getCategoryId());
        }
        advertisement.setCategory(categoryOpt.get());

        advertisement.setUser(user);
        Advertisement savedAd = advertisementRepository.save(advertisement);
        logger.info("Advertisement '{}' created successfully with ID {}", advertisement.getTitle(), savedAd.getId());

        // Map back to DTO, setting categoryId
        AdvertisementDTO savedAdDTO = modelMapper.map(savedAd, AdvertisementDTO.class);
        savedAdDTO.setCategoryId(savedAd.getCategory().getId());

        return savedAdDTO;
    }

    @Override
    public List<AdvertisementDTO> findAllValidAdvertisements() {
        List<Advertisement> validAds = advertisementRepository.findAllValidAdvertisements();
        logger.info("Fetched {} valid advertisements", validAds.size());
        return validAds.stream()
                .map(ad -> {
                    AdvertisementDTO dto = modelMapper.map(ad, AdvertisementDTO.class);
                    dto.setCategoryId(ad.getCategory().getId());
                    return dto;
                })
                .collect(Collectors.toList());
    }
}
