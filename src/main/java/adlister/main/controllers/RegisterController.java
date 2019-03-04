package adlister.main.controllers;

import adlister.main.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegisterController {

    @Autowired
    RegisterService registerService;

    // request param must be url encoded
    @CrossOrigin(value = "http://localhost:3000")
    @RequestMapping("/api/register")
    public String createUser(@RequestParam("username") String username,
                             @RequestParam("password") String password,
                             @RequestParam("email") String email,
                             @RequestParam("first-name") String firstName,
                             @RequestParam("last-name") String lastName){
        registerService.createUser(username, password, email, firstName, lastName);
        return "done";
    }
}
