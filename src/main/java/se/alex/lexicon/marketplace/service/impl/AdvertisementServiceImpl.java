package se.alex.lexicon.marketplace.service.impl;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.stereotype.Service;
import se.alex.lexicon.marketplace.dto.AdvertisementDTO;
import se.alex.lexicon.marketplace.dto.UserDTO;
import se.alex.lexicon.marketplace.entity.Advertisement;
import se.alex.lexicon.marketplace.entity.User;
import se.alex.lexicon.marketplace.exception.UserNotAuthenticatedException;
import se.alex.lexicon.marketplace.repository.AdvertisementRepository;
import se.alex.lexicon.marketplace.service.AdvertisementService;
import se.alex.lexicon.marketplace.service.UserService;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdvertisementServiceImpl implements AdvertisementService {

    private final AdvertisementRepository advertisementRepository;
    private final ModelMapper modelMapper;
    private final UserService userService;
    private static final Logger logger = LoggerFactory.getLogger(AdvertisementServiceImpl.class);

    @Autowired
    public AdvertisementServiceImpl(AdvertisementRepository advertisementRepository, ModelMapper modelMapper, UserService userService) {
        this.advertisementRepository = advertisementRepository;
        this.modelMapper = modelMapper;
        this.userService = userService;
    }

    /**
     * Creates a new advertisement.
     * If the user is authenticated, associates the ad with the user.
     * If not, registers a new user with the provided UserDTO and associates the ad.
     *
     * @param advertisementDTO The advertisement data.
     * @param userDTO          The user data (required if not authenticated).
     * @param authentication   The authentication object.
     * @return The created advertisement DTO.
     */
    @Override
    public AdvertisementDTO createAdvertisement(AdvertisementDTO advertisementDTO, UserDTO userDTO, Authentication authentication) {
        User user;

        if (authentication != null && authentication.isAuthenticated()
                && !(authentication instanceof AnonymousAuthenticationToken)) {
            String username = authentication.getName();
            user = userService.findByUsername(username);
            logger.info("Authenticated user {} is creating an advertisement", username);
        } else {
            if (userDTO == null) {
                logger.warn("Unauthenticated advertisement creation attempted without user details");
                throw new IllegalArgumentException("User details must be provided for unauthenticated advertisement creation.");
            }
            userService.registerUser(userDTO);
            user = userService.findByUsername(userDTO.getUsername());
            logger.info("Unauthenticated user {} registered and is creating an advertisement", userDTO.getUsername());
        }

        Advertisement advertisement = modelMapper.map(advertisementDTO, Advertisement.class);
        advertisement.setUser(user);
        Advertisement savedAd = advertisementRepository.save(advertisement);
        logger.info("Advertisement '{}' created successfully with ID {}", advertisement.getTitle(), savedAd.getId());
        return modelMapper.map(savedAd, AdvertisementDTO.class);
    }

    /**
     * Retrieves all valid (non-expired) advertisements.
     *
     * @return List of valid advertisement DTOs.
     */
    @Override
    public List<AdvertisementDTO> findAllValidAdvertisements() {
        List<Advertisement> validAds = advertisementRepository.findAllValidAdvertisements();
        logger.info("Fetched {} valid advertisements", validAds.size());
        return validAds.stream()
                .map(ad -> modelMapper.map(ad, AdvertisementDTO.class))
                .collect(Collectors.toList());
    }
}
