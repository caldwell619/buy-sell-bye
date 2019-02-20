package adlister.main;

import adlister.main.service.LoginService;
import adlister.models.User;
import adlister.util.Password;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


@RestController
@SessionAttributes("authUser")
public class LoginController {

    @Autowired
    LoginService loginService;

    @CrossOrigin(value = "http://localhost:3000")
    @RequestMapping("/api/login")
    public User loggedInUser(@RequestParam("username") String username,
                             @RequestParam("password") String password,
                             HttpServletRequest request
                             ) {
        User user = loginService.findByUsername(username);
        if (Password.check(password, user.getPassword())){
            HttpSession session = request.getSession();
            session.setAttribute("authUser", user);
            return user;
        }
        return null;
    }
    @CrossOrigin(value = "http://localhost:3000")
    @RequestMapping("/api/check-login")
    public User loggedInUser(HttpServletRequest request) {
        HttpSession session = request.getSession();
        return (User) session.getAttribute("authUser");
    }
}
