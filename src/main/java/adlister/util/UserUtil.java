package adlister.util;

import adlister.models.User;
import com.mysql.cj.jdbc.Driver;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class UserUtil {

    // essentially a helper function
    public static List<User> generateUsers() {
        List<User> users;
        users = new ArrayList<>();
        try {
            DriverManager.registerDriver(new Driver());
            Config config = new Config();
            Connection connection = DriverManager.getConnection(
                    config.getUrl(),
                    config.getUsername(),
                    config.getPassword()
            );
            Statement statement = connection.createStatement();
            ResultSet result = statement.executeQuery("select * from users");
            while (result.next()) {
                users.add(new User(
                        result.getLong("id"),
                        result.getString("username"),
                        result.getString("email"),
                        result.getString("password")
                ));
            }
        } catch (SQLException error){
            System.out.print(error);
        }
        return users;
    }
}
