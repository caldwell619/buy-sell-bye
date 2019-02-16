package adlister.main;

import adlister.main.service.AdsService;
import adlister.models.Ad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AdsController {

    @Autowired
    AdsService adsService;

    // all ads of every user
    @RequestMapping("/api/listings")
    public List<Ad> all(){
        return adsService.all();
    }

    // all ads from a certain user
    @RequestMapping("/api/ads/{id}")
    public List<Ad> userAds(@PathVariable("id") long id) {
        return adsService.usersAds(id);
    }

    // one single ad from one user
    @RequestMapping("/api/ads/{userId}/{adId}")
    public Ad findOneAd(@PathVariable("userId") long id) {
        return adsService.findOneAd(id);
    }

    // insert an ad
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/api/listings/ad")
    public void insertAd(
            @RequestParam("user_id") String user_id,
            @RequestParam("title") String title,
            @RequestParam("description") String description
            ) {
        adsService.insertAd(1, title, description);
    }
}
