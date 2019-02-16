package adlister.main.service;
import adlister.models.User;
import adlister.util.Config;
import adlister.util.Password;
import adlister.util.UserUtil;
import org.springframework.stereotype.Service;

import java.awt.*;
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

        for (User searchedUser : users) {
            if (searchedUser.getUsername().equals(username)) {
                targetedUser = searchedUser;
                // evaluating improperly
                if (Password.check(password, targetedUser.getPassword())){
                    return targetedUser;
                }
            }
        }
        return null;
    }


    public List<User> generateUsers() {
        return UserUtil.generateUsers();
    }
}


