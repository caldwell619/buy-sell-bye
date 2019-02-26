package adlister.main;

import adlister.main.service.RegisterService;
import adlister.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegisterController {

    @Autowired
    RegisterService registerService;

    @CrossOrigin(value = "http://localhost:3000")
    @RequestMapping("/api/register")
    public String createUser(@RequestParam("username") String username, @RequestParam("password") String password, @RequestParam("email") String email){
        registerService.createUser(username, password, email);
        return "done";
    }
}
