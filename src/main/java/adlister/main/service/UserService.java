package adlister.main.service;


import adlister.models.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
        // will eventually be a sql query
        for (User user : users){
            if (user.getId() == id){
                targetedUser = user;
            }
        }
        return targetedUser;
    }


    public List<User> generateUsers() {
        users = new ArrayList<>();

        users.add(new User(1,"billy", "billy@gmail.com", "password"));

        return users;
    }
}


