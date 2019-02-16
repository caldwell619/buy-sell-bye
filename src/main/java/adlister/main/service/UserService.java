package adlister.main.service;
import adlister.models.User;
import adlister.util.Config;
import adlister.util.UserUtil;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.sql.*;
import com.mysql.cj.jdbc.Driver;

import javax.swing.plaf.nimbus.State;

@Service
public class UserService {
    List<User> users;

    public List<User> all(){
        if (users == null){
            users = generateUsers();
        }
        return users;
    }

    public User findOneUser(long id){
        if (users == null){
            users = generateUsers();
        }
        User targetedUser = null;
        for (User user : users){
            if (user.getId() == id){
                targetedUser = user;
            }
        }
        return targetedUser;
    }


    public List<User> generateUsers() {
        return UserUtil.generateUsers();
    }
}


