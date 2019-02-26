package adlister.main;
import adlister.main.service.LoginService;
import adlister.models.User;
import adlister.util.Password;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


@RestController
@SessionAttributes("user")
@CrossOrigin("http://localhost:3000")
public class LoginController {

    @Autowired
    LoginService loginService;

    @RequestMapping("/api/login-user")
    public void checkoutUser(@RequestParam("username") String username,
                             @RequestParam("password") String password,
                             HttpServletRequest request){
        HttpSession session = request.getSession();
        User comparingUser = loginService.findByUsername(username);
        if (Password.check(password, comparingUser.getPassword())) {
            session.setAttribute("authUser", comparingUser);
        } else {
            throw new RuntimeException("invalid entry");
        }
    }
    @RequestMapping("/api/logout")
    public void checkoutUser(HttpServletRequest request){
        HttpSession session = request.getSession();
        session.invalidate();
    }
}
