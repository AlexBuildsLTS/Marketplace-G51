package se.alex.lexicon.marketplace.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import se.alex.lexicon.marketplace.entity.Advertisement;

import java.util.List;

public interface AdvertisementRepository extends JpaRepository<Advertisement, Long> {
    List<Advertisement> findByUser_UserId(Long userId);
}
