
use adlister_db;

select * from users;

select * from ads where id = 68;;

SELECT * FROM users WHERE username = 'bisntach' LIMIT 1;

insert into users (username, email, password, last_name, first_name) values ('username', 'henry@gmail.com', 'password', 'wood', 'natalie');

select * from ads where user_id = 44;

delete from ads where id = 63;

select count(*) from ads;

insert into ads (user_id, title, description, price) values (44, 'very berry dope', 'selling dope', '$33');

CREATE TABLE ad_to_category (
    ad_id integer unsigned not null,
    category_id integer unsigned not null
    foreign key (ad_id) references ads (id),
    foreign key (category_id) references relational_categories (id)
);
CREATE TABLE ad_to_category (
    ad_id INTEGER UNSIGNED NOT NULL,
    category_id INTEGER UNSIGNED NOT NULL,
    FOREIGN KEY (ad_id) REFERENCES ads(id),
    FOREIGN KEY (category_id) REFERENCES relational_categories(id)
);

select * from ad_to_category;

insert into relational_categories (category) values ('Kitchen');

alter table ads add category int;

select * from ads;

select * from relational_categories;

select * from ad_to_category;






