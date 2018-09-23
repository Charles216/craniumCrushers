CREATE DATABASE campaignQuery;
USE campaignQuery;

-- CREATE TABLE cost_of_election (
--     cycle CHAR(5) NOT NULL,
--     totalCost VARCHAR(20) NOT NULL,
--     demCost VARCHAR(20) NOT NULL,
--     repCost VARCHAR(20) NOT NULL,
--     PRIMARY KEY (CYCLE) NOT NULL
-- );

create table interestGroupYears (
    id INT auto_increment not null ,
    year int not null,
);

create table interestGroupName (
    id INT auto_increment not null primary key,
    rank INT NOT NULL,
    interest_group varchar(225) not null,
    total_donated INT(20) not null ,
    demPCT int(2) not null,
    repPct int(2) not null,
    year_id int(5),
    name_id int(5),
    FOREIGN KEY (year_id)
    REFERENCES interestGroupYears(id)
    FOREIGN KEY (name_id)
    REFERENCES topRecipient(id)
);

create table topRecipient (
    id int(5) not null auto_increment primary key,
    name varchar(255) not null
);

