package com.codeup.adlister.models;

public class Ad {

    private Long id;
    private Long userId;
    private String title;
    private String description;
    private String price;
    private int[] categories;

    protected Ad(){ }

    public Ad( String userId, String title, String description, String price) {
        this.userId = Long.parseLong(userId);
        this.title = title;
        this.description = description;
        this.price = price;
    }

    public Ad(long id, long userId, String title, String description, String price) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.description = description;
        this.price = price;
    }

    public Ad(String userId, String title, String description, String price, int[] categories ) {
        this.userId = Long.parseLong(userId);
        this.title = title;
        this.description = description;
        this.price = price;
        this.categories = categories;
    }
    public int[] getCategories() {
        return categories;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
