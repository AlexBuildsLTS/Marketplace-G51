package se.alex.lexicon.marketplace;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import se.alex.lexicon.marketplace.entity.Advertisement;
import se.alex.lexicon.marketplace.entity.User;
import se.alex.lexicon.marketplace.repository.AdvertisementRepository;
import se.alex.lexicon.marketplace.repository.UserRepository;

import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class AdvertisementRepositoryTests {

    @Autowired
    private AdvertisementRepository advertisementRepository;

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testFindByUserId() {
        User user = new User();
        user.setEmail("testuser@example.com");
        user.setUsername("testUser2");
        user.setPassword("password123");
        User savedUser = userRepository.save(user);

        Advertisement ad = new Advertisement();
        ad.setTitle("Test Ad");
        ad.setDescription("This is a test advertisement.");
        ad.setPrice(99.99);
        ad.setStatus("Active");
        ad.setCreatedAt(LocalDateTime.now());
        ad.setExpiresAt(LocalDateTime.now().plusDays(7));
        ad.setUser(savedUser);
        advertisementRepository.save(ad);

        List<Advertisement> ads = advertisementRepository.findByUser_UserId(savedUser.getUserId());
        assertEquals(1, ads.size());
        assertNotNull(ads.get(0));
    }
}
