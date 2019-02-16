package adlister.main.service;
import adlister.util.Config;
import adlister.util.Password;
import org.springframework.stereotype.Service;
import java.sql.*;
import com.mysql.cj.jdbc.Driver;

import javax.swing.plaf.nimbus.State;

@Service
public class RegisterService {

    public void createUser(String username, String password, String email) {
        try {
            DriverManager.registerDriver(new Driver());
            Config config = new Config();
            Connection connection = DriverManager.getConnection(
                    config.getUrl(),
                    config.getUsername(),
                    config.getPassword()
            );
            // Preparing the statement
            String sql = "INSERT INTO users(username, email, password) VALUES (?, ?, ?)";
            PreparedStatement stmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

            // setting the prepared statement values to the ones accepted by the insert()
            stmt.setString(1, username);
            stmt.setString(2, email);
            stmt.setString(3, Password.encrypt(password));

            stmt.executeUpdate();
        } catch (SQLException error){
            System.out.print(error);
        }
    }
}


