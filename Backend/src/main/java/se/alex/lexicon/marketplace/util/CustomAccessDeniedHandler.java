package se.alex.lexicon.marketplace.util;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class CustomAccessDeniedHandler implements AccessDeniedHandler {

    /**
     * Handles Access Denied exceptions by sending a 403 Forbidden response with a custom message.
     *
     * @param request  The HTTP request.
     * @param response The HTTP response.
     * @param accessDeniedException The exception that was thrown.
     * @throws IOException If an input or output error occurs.
     */
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response,
                       AccessDeniedException accessDeniedException) throws IOException {
        response.setStatus(HttpServletResponse.SC_FORBIDDEN);
        response.setContentType("application/json");
        response.getWriter().write("{\"error\": \"Access Denied\"}");
    }
}
