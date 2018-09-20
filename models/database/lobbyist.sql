create table interestGroupYears (
    year_id INT auto_increment not null,
    year int not null,
    primary key (year_id)

);

create table interestGroupName (
    groupId INT auto_increment not null primary key,
    rank INT unsigned NOT NULL,
    interest_group varchar(225) not null,
    total_donated INT(20) unsigned not null ,
    demPCT int(2) unsigned not null,
    repPct int(2) unsigned not null,
    year_id int(5),
    name_id int(5),
    FOREIGN KEY (year_id)
    REFERENCES interestGroupYears(year_id)
    FOREIGN KEY (name_id)
    REFERENCES topRecipient(name_id)
);

insert into interestGroupYears values (2018);

insert into interestGroupYears (year) values (2018);
insert into interestGroupYears (year) values (2016);
insert into interGroupName (rANK, interest_group, total_donated, demPCT,repPCT, year_id)
values (1, 'Lawyers/Law Firms',	64577411, 77, 23, 1);

create table topRecipient (
    name_id int(5) not null auto_increment primary key,
    name varchar(255) not null
);

SELECT topRecipient.name, interestGroupYears.year
FROM topRecipient
INNER JOIN interestGroupName ON topRecipient.name_id = interestGroupName.name_id
inner join interestGroupYears on interestGroupName.year_id = interestGroupYears.year_id;
