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
    Connection connection;
    Config config;

    public AdsService() {
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
    public List<Ad> all(){
        return generateAds();
    }

    public Ad findOneAd (long adId) {
        try {
            String query = "SELECT * FROM ads WHERE id = ?";
                PreparedStatement stmt = connection.prepareStatement(query);
                stmt.setLong(1, adId);
                ResultSet result = stmt.executeQuery();
                if (result.next()) {
                    return new Ad(
                            result.getLong("id"),
                            result.getLong("user_id"),
                            result.getString("title"),
                            result.getString("description"),
                            result.getString("price")
                    );
                }
            return null;
        } catch (SQLException e) {
                throw new RuntimeException("Error finding an ad", e);
            }
    }

    // accepts user id, returns all ads associated with that user
    public List<Ad> usersAds (long userId) {
        ads = new ArrayList<>();
            String query = "SELECT * FROM ads WHERE user_id = ?";
            try {
                PreparedStatement stmt = connection.prepareStatement(query);
                stmt.setLong(1, userId);
                ResultSet result = stmt.executeQuery();
                while (result.next()) {
                    ads.add(new Ad(
                            result.getLong("id"),
                            result.getLong("user_id"),
                            result.getString("title"),
                            result.getString("description"),
                            result.getString("price")
                    ));
                }
                return ads;
            } catch (SQLException e) {
                throw new RuntimeException("Error finding the users ads", e);
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
        String sql = "INSERT INTO ad_to_category(ad_id, category_id) VALUES (?,?)";
        try {
            PreparedStatement stmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

            // setting the prepared statement values to the ones accepted by the insert()
            stmt.setLong(1, adId);
            for(int catId : categoryIds){
                stmt.setInt(2, catId);
            }
            stmt.executeUpdate();
        } catch (SQLException error){
            System.out.print(error);
        }
    }

    public void deleteAd(long adId){
        try {
            // Preparing the statement
            String sql = "delete from ads where id = ?";
            PreparedStatement stmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);

            // setting the prepared statement values to the ones accepted by the insert()
            stmt.setLong(1, adId);
            stmt.executeUpdate();
        } catch (SQLException error){
            System.out.print(error);
        }
    }

    public List<Ad> generateAds() {
        ads = new ArrayList<>();
        try {
            Statement statement = connection.createStatement();
            ResultSet result = statement.executeQuery("select * from ads");
            while (result.next()) {
                ads.add(new Ad(
                        result.getLong("id"),
                        result.getLong("user_id"),
                        result.getString("title"),
                        result.getString("description"),
                        result.getString("price")
                ));
            }
        } catch (SQLException error){
            System.out.print(error);
        }
        return ads;
    }
}


