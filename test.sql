
use adlister_db;

select * from users;

select * from ads where id = 68;;

SELECT * FROM users WHERE username = 'bisntach' LIMIT 1;

insert into users (username, email, password, last_name, first_name) values ('username', 'henry@gmail.com', 'password', 'wood', 'natalie');

select * from ads where user_id = 44;

delete from ads where id = 63;

select count(*) from ads;

insert into ads (user_id, title, description, price) values (44, 'very berry dope', 'selling dope', '$33');







