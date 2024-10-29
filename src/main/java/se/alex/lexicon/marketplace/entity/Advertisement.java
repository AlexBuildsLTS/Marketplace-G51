package se.alex.lexicon.marketplace.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Advertisement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private BigDecimal price;

    private LocalDateTime createdAt;
    private LocalDateTime expiresAt;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;



    /**
     * Updates the price of the advertisement.
     * @param newPrice The new price to set.
     */
    public void updatePrice(BigDecimal newPrice) {
        this.price = newPrice;
    }

    /**
     * Checks if the advertisement has expired.
     * @return true if the advertisement is expired, false otherwise.
     */
    public boolean isExpired() {
        return expiresAt != null && LocalDateTime.now().isAfter(expiresAt);
    }

    /**
     * Sets the createdAt timestamp when the advertisement is created.
     */
    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
    }
}
