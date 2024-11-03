package se.alex.lexicon.marketplace.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(length = 1000)
    private String description;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Advertisement> advertisements = new HashSet<>();

    /**
     * Adds an advertisement to this category.
     *
     * @param advertisement The advertisement to add.
     */
    public void addAdvertisement(Advertisement advertisement) {
        advertisements.add(advertisement);
        advertisement.setCategory(this);
    }

    /**
     * Removes an advertisement from this category.
     *
     * @param advertisement The advertisement to remove.
     */
    public void removeAdvertisement(Advertisement advertisement) {
        advertisements.remove(advertisement);
        advertisement.setCategory(null);
    }
}
