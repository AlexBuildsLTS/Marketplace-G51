package se.alex.lexicon.marketplace.service;

import se.alex.lexicon.marketplace.dto.AdvertisementDTO;

import org.springframework.security.core.Authentication;

import java.util.List;

public interface AdvertisementService {
    List<AdvertisementDTO> findAllValidAdvertisements();
    AdvertisementDTO createAdvertisement(AdvertisementDTO advertisementDTO, Authentication authentication);
}
