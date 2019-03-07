package adlister.main.controllers;

import adlister.main.models.Ad;
import adlister.main.models.AdCategory;
import adlister.main.models.User;
import adlister.main.repositories.AdCategoryRepository;
import adlister.main.repositories.AdRepository;
import adlister.main.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
//
@RestController
public class AdsController {
    private final AdRepository adDao;
    private final AdCategoryRepository adCategoryDao;
    private final UserRepository userDao;

    public AdsController(AdRepository adDao, AdCategoryRepository adCategoryDao, UserRepository userDao) {
        this.adCategoryDao = adCategoryDao;
        this.adDao = adDao;
        this.userDao = userDao;
    }

    // all ads of every user - newest first
    @RequestMapping("/api/ads")
    public List<Ad> all(){
       return adDao.getAllAds();
    }

    // all ads from a certain user
    @RequestMapping("/api/user-ads")
    public List<Ad> userAds(@RequestParam("id") long id) { return adDao.getAdsById(id); }

    // delete and ad
    @RequestMapping("/api/delete-ad")
    public void deleteAd(@RequestParam("ad_id") long id) {
        adDao.deleteById(id);
    }

    // display one single ad
    @RequestMapping("/api/one-ad")
    public Optional<Ad> findOneAd(@RequestParam("ad_id") long id) {
        return adDao.findById(id);
    }

//    // insert an ad JSON formatted
    @PostMapping("/api/create-ad")
    public String insertAd(@RequestBody Ad ad){
        List<AdCategory> adCategories = new ArrayList<>();
        for(AdCategory category: ad.getCategories()){
//          System.out.println(category.getId());
            adCategories.add(adCategoryDao.findById(category.getId()));
        }
        ad.setCategories(adCategories);
        ad.setUser(userDao.getUserById(ad.getUser().getId()));
        adDao.save(ad);
        return "ok";
    }
}
