package se.alex.lexicon.marketplace.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import se.alex.lexicon.marketplace.entity.Advertisement;
import se.alex.lexicon.marketplace.exception.UserNotAuthenticatedException;
import se.alex.lexicon.marketplace.repository.AdvertisementRepository;
import se.alex.lexicon.marketplace.service.AdvertisementService;

import java.util.List;

@Service
public class AdvertisementServiceImpl implements AdvertisementService {

    private final AdvertisementRepository advertisementRepository;

    @Autowired
    public AdvertisementServiceImpl(AdvertisementRepository advertisementRepository) {
        this.advertisementRepository = advertisementRepository;
    }

    @Override
    public Advertisement createAdvertisement(Advertisement advertisement) {
        if (SecurityContextHolder.getContext().getAuthentication() == null ||
                !SecurityContextHolder.getContext().getAuthentication().isAuthenticated()) {
            throw new UserNotAuthenticatedException("User is not authenticated");
        }
        return advertisementRepository.save(advertisement);
    }

    @Override
    public List<Advertisement> findAllValidAdvertisements() {
        return advertisementRepository.findAll().stream()
                .filter(ad -> !ad.isExpired())
                .toList();  // Using Java 16's toList() for better readability.
    }
}
