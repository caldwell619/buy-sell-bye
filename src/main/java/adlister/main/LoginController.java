package adlister.main;

import adlister.main.service.UserService;
import adlister.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
public class LoginController {

    @RequestMapping("/api/login")
    public User login(){

    }


    @RequestMapping("/api/users/{id}")
    public User findOne(@PathVariable("id") long id) {
        return userService.findOneUser(id);
    }
}
