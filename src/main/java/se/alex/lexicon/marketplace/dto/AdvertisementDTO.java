package se.alex.lexicon.marketplace.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AdvertisementDTO {
    @Setter
    @Getter
    private String title;
    private String description;
    private double price;
    private Long categoryId;
    private Long userId;

}
