package se.alex.lexicon.marketplace.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.alex.lexicon.marketplace.entity.Advertisement;
import se.alex.lexicon.marketplace.repository.AdvertisementRepository;
import se.alex.lexicon.marketplace.service.AdvertisementService;

import java.util.List;
import java.util.Optional;

@Service
public class AdvertisementServiceImpl implements AdvertisementService {

    private final AdvertisementRepository advertisementRepository;

    @Autowired
    public AdvertisementServiceImpl(AdvertisementRepository advertisementRepository) {
        this.advertisementRepository = advertisementRepository;
    }

    @Override
    public Advertisement createAdvertisement(Advertisement advertisement) {
        return advertisementRepository.save(advertisement);
    }

    @Override
    public Advertisement updateAdvertisement(Advertisement advertisement) {
        Optional<Advertisement> existingAd = advertisementRepository.findById(advertisement.getId());
        if (existingAd.isPresent()) {
            return advertisementRepository.save(advertisement);
        } else {
            throw new IllegalArgumentException("Advertisement does not exist.");
        }
    }

    @Override
    public void deleteAdvertisement(Long advertisementId) {
        advertisementRepository.deleteById(advertisementId);
    }

    @Override
    public List<Advertisement> findAdvertisementsByUserId(Long userId) {
        return advertisementRepository.findByUserId(userId);
    }

    @Override
    public List<Advertisement> findAll() {
        return advertisementRepository.findAll();
    }
}
