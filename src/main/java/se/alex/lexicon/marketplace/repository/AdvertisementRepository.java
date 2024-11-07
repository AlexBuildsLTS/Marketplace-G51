package se.alex.lexicon.marketplace.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import se.alex.lexicon.marketplace.entity.Advertisement;

import java.time.LocalDateTime;
import java.util.List;

public interface AdvertisementRepository extends JpaRepository<Advertisement, Long> {

    @Query("SELECT a FROM Advertisement a WHERE a.createdAt >= :validSince")
    List<Advertisement> findAllValidAdvertisements(LocalDateTime validSince);
}
