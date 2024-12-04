package se.alex.lexicon.marketplace.util;

import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.util.Base64;
import java.security.Key;

public class JwtSecretGenerator {

    private static final Logger logger = LoggerFactory.getLogger(JwtSecretGenerator.class);

    public static void main(String[] args) {
        // Generates the key
        Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
        String encodedKey = Base64.getEncoder().encodeToString(key.getEncoded());

        // Log the encoded key so will not be printed
        logger.info("Base64 Encoded Secret Key: {}", encodedKey);
    }
}
