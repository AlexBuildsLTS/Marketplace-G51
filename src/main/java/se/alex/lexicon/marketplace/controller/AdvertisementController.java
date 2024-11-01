package se.alex.lexicon.marketplace.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.alex.lexicon.marketplace.entity.Advertisement;
import se.alex.lexicon.marketplace.service.AdvertisementService;

import java.util.List;

@RestController
@RequestMapping("/api/advertisements")
public class AdvertisementController {

    private final AdvertisementService advertisementService;

    @Autowired
    public AdvertisementController(AdvertisementService advertisementService) {
        this.advertisementService = advertisementService;
    }

    @PostMapping("/create")
    public ResponseEntity<Advertisement> createAdvertisement(@RequestBody Advertisement advertisement) {
        return ResponseEntity.ok(advertisementService.createAdvertisement(advertisement));
    }

    @GetMapping("/valid")
    public ResponseEntity<List<Advertisement>> getAllValidAdvertisements() {
        return ResponseEntity.ok(advertisementService.findAllValidAdvertisements());
    }
}
