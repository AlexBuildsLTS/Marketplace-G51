package se.alex.lexicon.marketplace.service;

import se.alex.lexicon.marketplace.entity.Advertisement;

import java.util.List;

public interface AdvertisementService {
    List<Advertisement> findAllValidAdvertisements();
    Advertisement createAdvertisement(Advertisement advertisement);
}
