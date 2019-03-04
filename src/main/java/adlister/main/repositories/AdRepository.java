package adlister.main.repositories;

import adlister.main.entities.AdEntity;
import adlister.main.models.Ad;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AdRepository extends CrudRepository <AdEntity, Long> {
    @Query(value = "SELECT * FROM ads WHERE user_id = ?1 order by id desc", nativeQuery = true)
    List<AdEntity> getAdsById(long id);

    // newest ads 1st
    @Query(value = "select * from ads order by id desc;", nativeQuery = true)
    List<AdEntity> getAllAds();
}
