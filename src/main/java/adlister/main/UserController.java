package adlister.main.controllers;

import adlister.main.service.UserService;
import adlister.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping("/api/users")
    public List<User> all(){
        return userService.all();
    }

    @RequestMapping("/api/users/{id}")
    public User findOne(@PathVariable("id") long id) {
        return userService.findOneUser(id);
    }
}
