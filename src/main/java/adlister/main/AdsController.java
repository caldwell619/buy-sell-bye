package adlister.main;

import adlister.main.service.AdsService;
import adlister.models.Ad;
import adlister.models.Commercial;
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

    // insert an ad JSON formatted
    @PostMapping("/api/create-ad")
    public void insertAd(@RequestBody Ad ad){
        System.out.println(ad.getPrice());
    }
}
