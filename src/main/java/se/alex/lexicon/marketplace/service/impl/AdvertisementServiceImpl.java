package se.alex.lexicon.marketplace.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.alex.lexicon.marketplace.entity.Advertisement;
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
        return advertisementRepository.save(advertisement);
    }

    @Override
    public List<Advertisement> getAdvertisementsByUserId(Long userId) {
        return advertisementRepository.findByUser_UserId(userId);
    }
}
