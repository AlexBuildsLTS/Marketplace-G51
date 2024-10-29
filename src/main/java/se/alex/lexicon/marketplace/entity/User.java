package se.alex.lexicon.marketplace.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @NotBlank(message = "Username is required")
    @Column(nullable = false, unique = true)
    private String username;

    @Email(message = "Email should be valid")
    @NotBlank(message = "Email is required")
    @Column(nullable = false, unique = true)
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters long")
    @Column(nullable = false)
    private String password;

    private String role;



    /**
     * Assigns a role to the user.
     * @param role The role to assign.
     */
    public void assignRole(String role) {
        this.role = role;
    }

    /**
     * Masks the user's password when it is displayed.
     * @return A masked password (for example, "****").
     */
    public String getMaskedPassword() {
        return "****";
    }

    /**
     * Checks if the user has a specific role.
     * @param role The role to check.
     * @return true if the user has the role, false otherwise.
     */
    public boolean hasRole(String role) {
        return this.role != null && this.role.equalsIgnoreCase(role);
    }

}
