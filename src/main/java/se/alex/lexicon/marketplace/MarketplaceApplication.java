package se.alex.lexicon.marketplace;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MarketplaceApplication {
    public static void main(String[] args) {
        SpringApplication.run(MarketplaceApplication.class, args);
    }

    /**
     * Defines the ModelMapper bean for DTO mapping.
     *
     * @return The ModelMapper instance.
     */
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
