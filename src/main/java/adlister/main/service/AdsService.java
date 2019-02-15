package adlister.main.service;
import adlister.models.Ad;
import adlister.util.Config;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.sql.*;
import com.mysql.cj.jdbc.Driver;

import javax.swing.plaf.nimbus.State;

@Service
public class AdsService {
    List<Ad> ads;

    public List<Ad> all(){
        if (ads == null){
            ads = generateAds();
        }
        return ads;
    }

    public Ad findOneAd(long id){
        if (ads == null){
            ads = generateAds();
        }
        Ad targetedAd = null;
        // will eventually be a sql query
        for (Ad user : ads){
            if (user.getId() == id){
                targetedAd = user;
            }
        }
        return targetedAd;
    }
    // accepts user id, returns all ads associated with that user
    public List<Ad> usersAds (long id) {
        if (ads == null){
            ads = generateAds();
        }
        for (Ad ad : ads){
            if (ad.getUserId() == id){
                ads.add(ad);
            }
        }
        return ads;
    }

    public void insertAd( long user_id, String title, String description){
        try {
            DriverManager.registerDriver(new Driver());
            Config config = new Config();
            Connection connection = DriverManager.getConnection(
                    config.getUrl(),
                    config.getUsername(),
                    config.getPassword()
            );
            // Preparing the statement
            String sql = "INSERT INTO ads(user_id, title, description) VALUES (?, ?, ?)";
            PreparedStatement stmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

            // setting the prepared statement values to the ones accepted by the insert()
            stmt.setLong(1, user_id);
            stmt.setString(2, title);
            stmt.setString(3, description);

            stmt.executeUpdate();
//            ResultSet result = stmt.getGeneratedKeys();
        } catch (SQLException error){
            System.out.print(error);
        }
    }


    public List<Ad> generateAds() {
        ads = new ArrayList<>();
        try {
            DriverManager.registerDriver(new Driver());
            Config config = new Config();
            Connection connection = DriverManager.getConnection(
                    config.getUrl(),
                    config.getUsername(),
                    config.getPassword()
            );
            Statement statement = connection.createStatement();
            ResultSet result = statement.executeQuery("select * from users");
            while (result.next()) {
                ads.add(new Ad(
                        result.getLong("id"),
                        result.getLong("user_id"),
                        result.getString("title"),
                        result.getString("description")
                ));
            }
        } catch (SQLException error){
            System.out.print(error);
        }
        return ads;
    }
}


