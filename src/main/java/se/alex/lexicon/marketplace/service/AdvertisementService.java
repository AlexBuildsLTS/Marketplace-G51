package se.alex.lexicon.marketplace.service;

import se.alex.lexicon.marketplace.entity.Advertisement;

import java.util.List;

public interface AdvertisementService {
    Advertisement createAdvertisement(Advertisement advertisement);
    List<Advertisement> getAdvertisementsByUserId(Long userId);
}
