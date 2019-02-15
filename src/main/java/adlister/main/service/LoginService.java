package adlister.main.service;
import adlister.models.User;
import adlister.util.Config;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.sql.*;
import com.mysql.cj.jdbc.Driver;

import javax.swing.plaf.nimbus.State;

@Service
public class LoginService {
    List<User> users;

    public List<User> all(){
        if (users == null){
            users = generateUsers();
        }
        return users;
    }

    public User findLoggedInUser(String username, String password){
        if (users == null){
            users = generateUsers();
        }
        User targetedUser = null;

        for (User searchedUser : users){
            if (searchedUser.getUsername().equals(username) && searchedUser.getPassword().equals(password)){
                targetedUser = searchedUser;
            }
        }
        return targetedUser;
    }


    public List<User> generateUsers() {
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


