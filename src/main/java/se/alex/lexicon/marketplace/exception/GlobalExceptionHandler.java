package se.alex.lexicon.marketplace.exception;

import org.springframework.http.*;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;
import org.springframework.lang.NonNull;
import org.slf4j.*;

@ControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<String> handleUserNotFound(@NonNull UsernameNotFoundException ex) {
        logger.error("User not found", ex);
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found: " + ex.getMessage());
    }

    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<String> handleAuthenticationException(@NonNull AuthenticationException ex) {
        logger.error("Authentication failed", ex);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed: " + ex.getMessage());
    }
}
