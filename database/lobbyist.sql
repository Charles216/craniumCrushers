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
insert into interestGroupName (rank, interest_group, total_donated, demPCT,repPCT, year_id, name_id)
values
--2018
(2,	'Retired', 59168252, 54, 44, 1, 2),
(3,	'Securities/Invest', 49933256,	54,	46, 1, 1),
(4,	'Real Estate',	41328934, 52, 47, 1, 3),
(5,	'Health Professionals',	34528421, 51, 48, 1, 3),
(6,	'Leadership PACs', 32151705, 38, 62, 1, 4),
(7,	'Insurance', 30227987, 40, 59, 1, 3),
(8,	'Democratic/Liberal', 26793098,	97,	0, 1, 5),
(9,	'Lobbyists', 19929289, 44, 55, 1, 6),
(10, 'Pharm/Health Prod', 18501794, 46,	54,	1, 6);
--2016
(1,	'Retired', 88210937, 27, 73, 2, 7),
(2,	'Securities/Invest', 63142305, 34, 66, 2, 8),
(3,	'Lawyers/Law Firms', 62789861,	56,	44, 2, 9),
(4,	'Real Estate', 55312042, 37, 63, 2, 8),
(5,	'Health Professionals',	44755595, 38, 62, 2, 10),
(6,	'Insurance', 39975816,	34,	66,	2, 8),
(7,	'Leadership PACs',	34093917, 25, 75, 2, 11),
(8,	'Democratic/Liberal', 26937567,	99,	1, 2, 10),
(9,	'Oil & Gas', 25631661,	10,	90, 2, 7),
(10, 'Pharm/Health Prod', 23881858,	38,	62, 2, 12),
-- 2014
(1, 'Lawyers/Law Firms', 58626517,	70,	30, 3, 13),
(2, 'Securities/Invest', 50241730,	46,	54, 3, 13),
(3, 'Retired', 42433309, 45, 55, 3, 14),
(4, 'Health Professionals',	40699515, 40, 60, 3, 15),
(5, 'Real Estate',	40019833, 47, 53, 3, 13),
(6, 'Leadership PACs', 33217285, 46, 54, 3, 16),
(7, 'Insurance', 32976700, 38, 61, 3, 17),
(8, 'Oil & Gas', 25992121, 16, 84, 3, 18),
(9, 'Lobbyists', 21034139, 49, 51, 3, 17),
(10, 'Pharm/Health Prod', 19771878,	45,	55, 3, 17);
-- 2012
(1, 'Lawyers/Law Firms', 56228212, 71, 29, 4, 19),
(2, 'Securities/Invest', 44544099, 41, 59, 4, 20),
(3, 'Retired', 42967836, 41, 59, 4, 20),
(4, 'Health Professionals',	42550953, 40, 60, 4, 22),
(5, 'Real Estate', 35678884, 45, 55, 4, 20),
(6, 'Insurance', 29549065, 37, 63, 4, 20),
(7, 'Leadership PACs',	27538303, 40, 60, 4, 24),
(8, 'Lobbyists', 23990229, 54, 46, 4, 25),
(9, 'Oil & Gas', 21553567, 14, 86, 4, 26),
(10, 'Pharm/Health Prod', 19265219,	43,	57, 4, 27),
-- 2010
(1,	'Lawyers/Law Firms', 66124522, 82, 18, 5, 30),
(2,	'Health Professionals',	40865372, 58, 42, 5, 30),
(3,	'Securities/Invest', 40495818, 64, 36, 5, 32),
(4,	'Retired', 40119545, 56, 44, 5, 31),
(5,	'Real Estate', 34541929, 61, 38, 5, 32),
(6,	'Lobbyists', 28091461, 69, 29, 5, 30),
(7,	'Insurance'	26645441, 53, 47, 5, 32),
(8,	'Leadership PACs', 24810628, 67, 32, 5, 33),
(9,	'Pharm/Health Prod', 18267877, 58, 42, 5, 12),
(10, 'Public Sector Unions', 15520926,	91,	9, 5, 34),
-- 2008
(1,	'Lawyers/Law Firms', 133187499,	79,	21, 6, 35),
(2,	'Retired', 125900643, 56, 44, 6, 35),
(3,	'Securities/Invest', 73293670, 65, 35, 6, 35),
(4,	'Real Estate', 67716778, 57, 43, 6, 35),
(5,	'Health Professionals',	62668667, 61, 39, 6, 35),
(6,	'Education', 42080032,	89,	11, 6, 35),
(7,	'Business Services', 35679521,	72,	28, 6, 35),
(8,	'Insurance', 32464705, 51, 49, 6, 36),
(9,	'Misc Finance',	28979975, 53, 47, 6, 35),
(10, 'Lobbyists', 27294852,	58,	42, 6, 37),
-- 2006
(1,	'Lawyers/Law Firms', 60924632, 62, 36, 7, 37),
(2,	'Real Estate',	40993069, 43, 53, 7, 37),
(3,	'Retired', 36625845, 39, 58, 7, 37),
(4,	'Securities/Invest', 34850087, 47, 46, 7, 39),
(5,	'Health Professionals',	33882823, 36, 63, 7, 40),
(6,	'Leadership PACs', 27082326, 18, 81, 7, 41),
(7,	'Insurance', 22738147, 36, 62, 7, 41),
(8,	'Lobbyists', 19836860, 41, 58, 7, 41),
(9,	'Commercial Banks',	16015803, 35, 63, 7, 37),
(10, 'Pharm/Health Prod', 14947514,	32,	66, 7, 41)
-- 2004
(1,	'Lawyers/Law Firms', 87396068,	80,	20, 8, 42),	
(2,	'Retired', 41826396, 63, 37, 8, 42),
(3,	'Real Estate', 37274916, 55, 45, 8, 42)
(4,	'Securities/Invest', 33775956,	61,	39, 8, 42),
(5,	'Health Professionals',	33540591, 48, 52, 8, 42),
(6,	'Insurance', 20105539, 40, 60, 8, 42),	
(7,	'Lobbyists', 19088982,	50,	50, 8, 42),
(8,	'Leadership PACs', 17595457, 26, 74, 8, 12),
(9,	'Education', 16498366,	86,	14, 8, 42),
(10, 'Business Services', 16321362,	68,	32, 8, 42),
-- 2002
(1,	'Lawyers/Law Firms', 37480531, 68, 32, 9, 43),
(2,	'Health Professionals',	22745197, 43, 57, 9, 44),
(3,	'Real Estate',	21212026, 51, 49, 9, 32),
(4,	'Retired',	20859073, 40, 60, 9, 45),
(5,	'Securities/Invest', 17733323,	55,	45, 9, 32),
(6,	'Insurance', 15105201,	39,	61, 9, 46),
(7,	'Leadership PACs',	13397371, 39, 61, 9, 47),
(8,	'Lobbyists', 11488286, 52, 48, 9, 48),
(9,	'Transport Unions',	10392114, 81, 19, 9, 48),
(10, 'Commercial Banks', 10,318,792, 40, 60, 9, 32),
-- 2000
(1,	'Lawyers/Law Firms', 32669023, 60, 39, 10, 50),
(2,	'Retired', 23945174, 23, 76, 10, 50),
(3,	'Health Professionals',	20457724, 40, 59, 10, 50),
(4,	'Real Estate', 20018928, 42, 58, 10, 50),
(5,	'Securities/Invest', 19808366,	40,	60, 10, 50),
(6,	'Insurance', 14377117, 33, 66, 10, 50),
(7,	'Commercial Banks',	11287603, 38, 62, 10, 50),
(8,	'Lobbyists', 9255429, 48, 52, 10, 51),
(9,	'Transport Unions', 9131054, 83, 17, 10, 52),
(10, 'Oil & Gas', 9119104, 24, 75, 10, 50);




SELECT topRecipient.name, interestGroupYears.year
FROM topRecipient
INNER JOIN interestGroupName ON topRecipient.name_id = interestGroupName.name_id
inner join interestGroupYears on interestGroupName.year_id = interestGroupYears.year_id;
