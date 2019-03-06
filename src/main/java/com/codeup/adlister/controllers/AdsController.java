package com.codeup.adlister.controllers;
import com.codeup.adlister.entities.AdEntity;
import com.codeup.adlister.repositories.AdRepository;
import com.codeup.adlister.service.AdsService;
import com.codeup.adlister.models.Ad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.*;

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
    public List<AdEntity> all(@RequestParam("page") long page ){
        page = (page - 1) * 20;
        System.out.println(page);
       return adDao.getAllAds(page);
    }

    @RequestMapping("/api/count")
    public long countAds(@RequestParam("type") String type){
        if (type.equals("all")){
            return adsService.countAllAds();
        } else {
            return 0;
        }
    }

    // all ads from a certain user
    @RequestMapping("/api/user-ads")
    public List<AdEntity> userAds(@RequestParam("id") long id) { return adDao.getAdsById(id); }

    // delete and ad
    @RequestMapping("/api/delete-ad")
    public void deleteAd(@RequestParam("ad_id") long id) {
        adDao.delete(id);
    }

    // display one single ad
    @RequestMapping("/api/one-ad")
    public AdEntity findOneAd(@RequestParam("ad_id") long id) {
        return adDao.findOne(id);
    }

    // insert an ad JSON formatted
    @PostMapping("/api/create-ad")
    public void insertAd(@RequestBody Ad ad){
        adsService.insertAd(ad);
    }
}
