
use adlister_db;

select * from users;

select * from ads where id = 68;;

SELECT * FROM users WHERE username = 'bisntach' LIMIT 1;

insert into users (username, email, password, last_name, first_name) values ('username', 'henry@gmail.com', 'password', 'wood', 'natalie');

select * from ads where user_id = 44;

select * from ads;

select count(*) from ads;

insert into ads (user_id, title, description, price) values (44, 'very berry dope', 'selling dope', '$33');

CREATE TABLE ad_to_category (
    ad_id INTEGER UNSIGNED NOT NULL,
    category_id INTEGER UNSIGNED NOT NULL,
    FOREIGN KEY (ad_id) REFERENCES ads(id) on delete cascade,
    FOREIGN KEY (category_id) REFERENCES relational_categories(id) on delete cascade
);

select * from ad_to_category;

insert into relational_categories (category) values ('Kitchen');

alter table ads add category int;

select * from ads;

select * from relational_categories;

select * from ad_to_category;

INSERT INTO ads(user_id, title, description, price) VALUES ('44', 'title', 'desc', '33');

insert into ad_to_category values (68 ,4);

select * from ads order by id desc;