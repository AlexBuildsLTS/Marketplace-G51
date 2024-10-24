package se.alex.lexicon.marketplace.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.alex.lexicon.marketplace.entity.Advertisement;
import se.alex.lexicon.marketplace.entity.User;
import se.alex.lexicon.marketplace.service.AdvertisementService;
import se.alex.lexicon.marketplace.service.UserService;
import org.springframework.security.core.Authentication;

import java.util.List;

@RestController
@RequestMapping("/api/ads")
public class AdvertisementController {

    private final AdvertisementService advertisementService;
    private final UserService userService;

    @Autowired
    public AdvertisementController(AdvertisementService advertisementService, UserService userService) {
        this.advertisementService = advertisementService;
        this.userService = userService;
    }

    @PostMapping("/create")
    public ResponseEntity<Advertisement> createAdvertisement(@RequestBody Advertisement advertisement, Authentication authentication) {
        // Get the current authenticated user
        String username = authentication.getName();
        User user = userService.findByUsername(username);


        advertisement.setUser(user);

        Advertisement createdAd = advertisementService.createAdvertisement(advertisement);
        return ResponseEntity.ok(createdAd);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Advertisement>> getAdvertisementsByUserId(@PathVariable Long userId) {
        List<Advertisement> advertisements = advertisementService.getAdvertisementsByUserId(userId);
        return ResponseEntity.ok(advertisements);
    }
}
