package se.alex.lexicon.marketplace.service;

import se.alex.lexicon.marketplace.entity.Advertisement;
import java.util.List;

public interface AdvertisementService {

    Advertisement createAdvertisement(Advertisement advertisement);
    Advertisement updateAdvertisement(Advertisement advertisement);
    void deleteAdvertisement(Long advertisementId);
    List<Advertisement> findAdvertisementsByUserId(Long userId);

    List<Advertisement> findAll( );
}
