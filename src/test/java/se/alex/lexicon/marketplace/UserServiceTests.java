package se.alex.lexicon.marketplace;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import se.alex.lexicon.marketplace.entity.User;
import se.alex.lexicon.marketplace.service.UserService;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class UserServiceTests {

    @Autowired
    private UserService userService;

    @Test
    public void testRegisterUser() {
        User user = new User();
        user.setEmail("test@example.com");
        user.setUsername("testUser");
        user.setPassword("password123");
        User savedUser = userService.registerUser(user);
        assertNotNull(savedUser.getUserId());
    }
}