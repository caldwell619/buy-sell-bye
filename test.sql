
use adlister_db;

select * from users;

SELECT * FROM users WHERE username = 'bisntach' LIMIT 1;

insert into users (username, email, password, last_name, first_name) values ('username', 'henry@gmail.com', 'password', 'wood', 'natalie');

delete from users;

describe users;

alter table users add first_name varchar(100) not null ;


