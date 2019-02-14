package adlister.dao;

import adlister.models.User;

public interface Users {
    User findByUsername(String username);
    Long insert(User user);
}
