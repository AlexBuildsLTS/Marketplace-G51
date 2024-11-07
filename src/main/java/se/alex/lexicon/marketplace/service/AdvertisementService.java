package se.alex.lexicon.marketplace.service;

import se.alex.lexicon.marketplace.dto.AdvertisementDTO;

import java.util.List;

public interface AdvertisementService {
    AdvertisementDTO createAdvertisement(AdvertisementDTO advertisementDTO, String username);
    List<AdvertisementDTO> findAllValidAdvertisements();
}
