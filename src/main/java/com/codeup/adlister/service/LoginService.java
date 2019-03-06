package com.codeup.adlister.service;
import com.codeup.adlister.models.User;
import com.codeup.adlister.util.Config;
import org.springframework.stereotype.Service;
import java.sql.*;
import java.util.List;
import java.util.ArrayList;

import com.mysql.cj.jdbc.Driver;

@Service
public class LoginService {
    Config config;
    Connection connection;

    public User findByUsername(String username) {
        try {
            config = new Config();
            DriverManager.registerDriver(new Driver());
            connection = DriverManager.getConnection(
                    config.getUrl(),
                    config.getUsername(),
                    config.getPassword()
            );
            String query = "SELECT * FROM users WHERE username = ? LIMIT 1";
            try {
                PreparedStatement stmt = connection.prepareStatement(query);
                stmt.setString(1, username);
                return extractUser(stmt.executeQuery());
            } catch (SQLException e) {
                throw new RuntimeException("Error finding a user by username", e);
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error connecting to the database!", e);
        }

    }
    private User extractUser(ResultSet rs) throws SQLException {
        if (! rs.next()) {
            return null;
        }
        return new User(
                rs.getLong("id"),
                rs.getString("username"),
                rs.getString("email"),
                rs.getString("password"),
                rs.getString("first_name"),
                rs.getString("last_name")
        );
    }
    public static List<User> generateUsers() {
        List<User> users = new ArrayList<>();
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
                        result.getString("password"),
                        result.getString("first_name"),
                        result.getString("last_name")
                ));
            }
        } catch (SQLException error){
            System.out.print(error);
        }
        return users;
    }
}