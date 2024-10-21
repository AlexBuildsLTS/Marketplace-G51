package se.alex.lexicon.marketplace.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.alex.lexicon.marketplace.entity.Advertisement;
import se.alex.lexicon.marketplace.service.AdvertisementService;

import java.util.List;

@RestController
@RequestMapping("/api/ads")
public class AdvertisementController {

    private final AdvertisementService advertisementService;

    @Autowired
    public AdvertisementController(AdvertisementService advertisementService) {
        this.advertisementService = advertisementService;
    }

    @PostMapping("/create")
    public ResponseEntity<Advertisement> createAdvertisement(@RequestBody Advertisement advertisement) {
        Advertisement createdAd = advertisementService.createAdvertisement(advertisement);
        return ResponseEntity.ok(createdAd);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Advertisement>> getAdvertisementsByUserId(@PathVariable Long userId) {
        List<Advertisement> advertisements = advertisementService.getAdvertisementsByUserId(userId);
        return ResponseEntity.ok(advertisements);
    }
}
