package adlister.main.service;
import adlister.main.util.Config;
import org.springframework.stereotype.Service;
import java.sql.*;
import java.util.List;
import com.mysql.cj.jdbc.Driver;
import adlister.main.models.User;

@Service
public class RegisterService {
    List<User> users;

    public void createUser(String username, String password, String email, String firstName, String lastName) {
        User newUser = new User(username, email, password, firstName, lastName);
        Boolean errorPresent = false;
        if (newUser.getUsername().isEmpty() ||
            newUser.getPassword().isEmpty() ||
            newUser.getEmail().isEmpty()){
                errorPresent = true;
        }
        users = LoginService.generateUsers();
        boolean unique = false;
        for (User user : users) {
            if (!user.getUsername().equals(newUser.getUsername())) {
                unique = true;
            } else {
                throw new RuntimeException("User already exits");
            }
        }
        if (unique && !errorPresent) {
            try {
                DriverManager.registerDriver(new Driver());
                Config config = new Config();
                Connection connection = DriverManager.getConnection(
                        config.getUrl(),
                        config.getUsername(),
                        config.getPassword()
                );

                // Preparing the statement
                String sql = "INSERT INTO users(username, email, password, last_name, first_name) VALUES (?, ?, ?, ?, ?)";
                PreparedStatement stmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

                // setting the prepared statement values to the ones accepted by the insert()
                stmt.setString(1, newUser.getUsername());
                stmt.setString(2, newUser.getEmail());
                stmt.setString(3, newUser.getPassword());
                stmt.setString(4, newUser.getLastName());
                stmt.setString(5, newUser.getFirstName());

                stmt.executeUpdate();
            } catch (SQLException error) {
                throw new RuntimeException("error connecting to db", error);
            }
        } else {
            throw new RuntimeException("Username already exists");
        }
    }

}


