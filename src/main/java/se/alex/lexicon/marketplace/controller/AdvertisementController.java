package se.alex.lexicon.marketplace.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import se.alex.lexicon.marketplace.dto.AdvertisementDTO;
import se.alex.lexicon.marketplace.dto.UserDTO;
import se.alex.lexicon.marketplace.service.AdvertisementService;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/advertisements")
public class AdvertisementController {

    private final AdvertisementService advertisementService;

    @Autowired
    public AdvertisementController(AdvertisementService advertisementService) {
        this.advertisementService = advertisementService;
    }

    /**
     * Creates a new advertisement.
     * If the user is authenticated, associates the ad with the user.
     * If not, expects user details to register a new user before creating the ad.
     *
     * @param advertisementDTO The advertisement data.
     * @param userDTO          The user data (required if not authenticated).
     * @param authentication   The authentication object.
     * @return The created advertisement.
     */
    @PostMapping("/create")
    public ResponseEntity<AdvertisementDTO> createAdvertisement(
            @Valid @RequestBody AdvertisementDTO advertisementDTO,
            @RequestBody(required = false) UserDTO userDTO,
            Authentication authentication) {
        AdvertisementDTO createdAd = advertisementService.createAdvertisement(advertisementDTO, userDTO, authentication);
        return ResponseEntity.ok(createdAd);
    }

    /**
     * Retrieves all valid (non-expired) advertisements.
     *
     * @return List of valid advertisements.
     */
    @GetMapping("/valid")
    public ResponseEntity<List<AdvertisementDTO>> getAllValidAdvertisements() {
        return ResponseEntity.ok(advertisementService.findAllValidAdvertisements());
    }
}
