package com.codeup.adlister.entities;

import javax.persistence.*;

@Entity
@Table(name = "ads")
public class AdEntity {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    private Long userId;
    private String title;
    private String description;
    private String price;

    protected AdEntity(){ }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
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
