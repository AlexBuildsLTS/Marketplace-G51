package se.alex.lexicon.marketplace.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import se.alex.lexicon.marketplace.dto.AdvertisementDTO;
import se.alex.lexicon.marketplace.service.AdvertisementService;

import jakarta.validation.Valid;

import java.security.Principal;
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
    public ResponseEntity<AdvertisementDTO> createAdvertisement(
            @Valid @RequestBody AdvertisementDTO advertisementDTO,
            Authentication authentication) {
        String username = authentication.getName();
        AdvertisementDTO createdAd = advertisementService.createAdvertisement(advertisementDTO, username);
        return ResponseEntity.ok(createdAd);
    }

    @GetMapping("/valid")
    public ResponseEntity<List<AdvertisementDTO>> getAllValidAdvertisements() {
        return ResponseEntity.ok(advertisementService.findAllValidAdvertisements());
    }
    @PreAuthorize("hasRole('SELLER')")
    @PostMapping
    public ResponseEntity<AdvertisementDTO> createAdvertisement(@RequestBody AdvertisementDTO advertisementDTO, Principal principal) {
        String username = principal.getName();
        AdvertisementDTO createdAd = advertisementService.createAdvertisement(advertisementDTO, username);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAd);
    }
}
