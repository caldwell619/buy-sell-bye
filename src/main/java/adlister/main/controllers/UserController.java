package adlister.main.controllers;

import adlister.main.service.UserService;
import adlister.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
// maps the url "/persons" to here
//@RequestMapping("/persons")
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping("/api/persons")
    public List<User> all(){
        return userService.all();
    }
    @RequestMapping("{id}")
    public User findOne(@PathVariable("id") long id) {
        return userService.findOneUser(id);
    }
}
