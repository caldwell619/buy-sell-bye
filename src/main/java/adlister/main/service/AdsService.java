package adlister.main.service;
import adlister.main.models.Ad;
import adlister.main.util.Config;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.sql.*;
import com.mysql.cj.jdbc.Driver;

@Service
public class AdsService {
    Connection connection;

    public AdsService(){
        Config config = new Config();
        try {
            DriverManager.registerDriver(new Driver());
            connection = DriverManager.getConnection(
                    config.getUrl(),
                    config.getUsername(),
                    config.getPassword()
            );
        } catch (SQLException e) {
            throw new RuntimeException("Error connecting to the database!", e);
        }
    }

    public void insertAd( Ad ad) {
        long user_id = ad.getUserId();
        String title = ad.getTitle();
        String description = ad.getDescription();
        String price = ad.getPrice();
        int[] categories = ad.getCategories();

        // Preparing the statement
        String sql = "INSERT INTO ads(user_id, title, description, price) VALUES (?, ?, ?, ?) ";
        try {
            PreparedStatement stmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

            // setting the prepared statement values to the ones accepted by the insert()
            stmt.setLong(1, user_id);
            stmt.setString(2, title);
            stmt.setString(3, description);
            stmt.setString(4, price);

            stmt.executeUpdate();
            relationalAd(user_id, categories);
        } catch (SQLException error){
            System.out.print(error);
        }
    }

    public void relationalAd(long adId, int[] categoryIds){
        String sql = "INSERT INTO ad_to_category(ad_id, category_id) VALUES ((select last_insert_id()),?)";
        try {
            PreparedStatement stmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

            // setting the prepared statement values to the ones accepted by the insert()
            for(int catId : categoryIds){
                stmt.setInt(1, catId);
                stmt.executeUpdate();
            }
        } catch (SQLException error){
            throw new RuntimeException("Error adding the categories to the db", error);
        }
    }

}


