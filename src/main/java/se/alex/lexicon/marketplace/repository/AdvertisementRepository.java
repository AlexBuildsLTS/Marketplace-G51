package se.alex.lexicon.marketplace.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import se.alex.lexicon.marketplace.entity.Advertisement;

import java.util.List;

public interface AdvertisementRepository extends JpaRepository<Advertisement, Long> {
    List<Advertisement> findByUserId(Long userId);

    @Query("SELECT a FROM Advertisement a WHERE a.expiresAt > CURRENT_TIMESTAMP")
    List<Advertisement> findAllValidAdvertisements();
}
