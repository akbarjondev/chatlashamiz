create database chatlashamiz;

create extension "pgcrypto";

create extension "uuid-ossp";

create table users(
	user_id uuid not null default uuid_generate_v4() primary key,
	user_username varchar(64),
	password varchar(72)
);

create table messages(
	msg_id serial not null primary key,
	msg_text text,
	msg_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	msg_read boolean default false,
	user_id varchar(72)
);

