package adlister.main;

import adlister.main.service.LoginService;
import adlister.main.service.UserService;
import adlister.models.User;
import adlister.util.Password;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
public class LoginController {

    @Autowired
    LoginService loginService;

    @CrossOrigin(value = "http://localhost:3000")
    @RequestMapping("/api/login")
    public User loggedInUser(@RequestParam("username") String username, @RequestParam("password") String password){
        // set session varriable
        System.out.println(loginService.findLoggedInUser(username,password));
        return loginService.findLoggedInUser(username, password);


    }
}
