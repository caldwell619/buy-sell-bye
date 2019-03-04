package adlister.main.controllers;

import adlister.main.entities.AdEntity;
import adlister.main.repositories.AdRepository;
import adlister.main.service.AdsService;
import adlister.main.models.Ad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
public class AdsController {
    private final AdRepository adDao;

    public AdsController(AdRepository adDao) {
        this.adDao = adDao;
    }

    @Autowired
    AdsService adsService;

    // all ads of every user - newest first
    @RequestMapping("/api/ads")
    public List<AdEntity> all(){
       return adDao.getAllAds();
    }

    // all ads from a certain user
    @RequestMapping("/api/user-ads")
    public List<AdEntity> userAds(@RequestParam("id") long id) { return adDao.getAdsById(id); }

    // delete and ad
    @RequestMapping("/api/delete-ad")
    public void deleteAd(@RequestParam("ad_id") long id) {
        adDao.deleteById(id);
    }

    // display one single ad
    @RequestMapping("/api/one-ad")
    public Optional<AdEntity> findOneAd(@RequestParam("ad_id") long id) {
        return adDao.findById(id);
    }

    // insert an ad JSON formatted
    @PostMapping("/api/create-ad")
    public void insertAd(@RequestBody Ad ad){
        adsService.insertAd(ad);
    }
}
