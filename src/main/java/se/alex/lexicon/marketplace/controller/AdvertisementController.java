package se.alex.lexicon.marketplace.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import se.alex.lexicon.marketplace.dto.AdvertisementDTO;
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

    @PostMapping
    @PreAuthorize("hasAnyRole('ADMIN', 'SELLER')")
    public ResponseEntity<AdvertisementDTO> createAdvertisement(
            @Valid @RequestBody AdvertisementDTO advertisementDTO,
            Authentication authentication) {
        AdvertisementDTO createdAd = advertisementService.createAdvertisement(advertisementDTO, authentication);
        return ResponseEntity.ok(createdAd);
    }

    @GetMapping("/valid")
    public ResponseEntity<List<AdvertisementDTO>> getAllValidAdvertisements() {
        return ResponseEntity.ok(advertisementService.findAllValidAdvertisements());
    }
}
