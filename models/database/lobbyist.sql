insert into interestGroupName (rank, interest_group, total_donated, demPCT,repPCT, year_id, name_id)
values 
(1, 'Lawyers/Law Firms', 64577411, 77, 23, 1, 1);
(2	'Retired', 59168252, 54, 44, 1, 2),
(3.	'Securities/Invest', 49933256,	54,	46, 1, 1),
(4,	'Real Estate',	41328934, 52, 47, 1, 3),
(5,	'Health Professionals',	34528421, 51, 48, 1, 3),
(6,	'Leadership PACs', 32151705, 38, 62, 1, 4),
(7,	'Insurance', 30227987, 40, 59, 1, 3),
(8,	'Democratic/Liberal', 26793098,	97,	0, 1, 5),
(9,	'Lobbyists', 19929289, 44, 55, 1, 6),
(10, 'Pharm/Health Prod', 18501794, 46,	54,	1, 6);



insert into interestGroupYears (year) value 
(2018),
(2016),
(2014),
(2012),
(2010),
(2008),
(2006),
(2004),
(2002),
(2000);

-- SELECT topRecipient.name, interestGroupName.interest_group, interestGroupYears.year
-- FROM interestGroupName
-- INNER JOIN topRecipient ON topRecipient.name_id = interestGroupName.name_id
-- inner join interestGroupYears on interestGroupName.year_id = interestGroupYears.year;

-- SELECT topRecipient.name, interestGroupYears.year
-- FROM topRecipient
-- INNER JOIN interestGroupName ON topRecipient.name_id = interestGroupName.name_id
-- inner join interestGroupYears on interestGroupName.year_id = interestGroupYears.year_id;

-- SELECT topRecipient.name, interestGroupYears.year
-- FROM topRecipient
-- INNER JOIN interestGroupName ON topRecipient.name_id = interestGroupName.name_id
-- inner join interestGroupYears on interestGroupName.year_id = interestGroupYears.year_id;

insert into topRecipient (name) values 
('Claire McCaskill (D-Mo)'),
('Ted Cruz (R-Texas)'),
('Sherrod Brown (D-Ohio)'),
('Joe Donnelly (D-Ind)'),
('Doug Jones (D-Ala)'),
('Bob Casey (D-Pa)'),
('Ted Cruz (R-Texas)'),
('Marco Rubio (R-Fla)'),
('Chris Van Hollen (D-Md)'),
('Bernie Sanders (D)'),
('Rob Portman (R-Ohio)'),
('Richard Burr (R-NC)'),
('Cory Booker (D-NJ)'),
('Cory Gardner (R-Colo)'),
('Bill Cassidy (R-La)'),
('Mary L Landrieu (D-La)'),
('Mitch McConnell (R-Ky)'),
('John Cornyn (R-Texas)'),
('Kirsten Gillibrand (D-NY)'),
('Scott Brown (R-Mass)'),
('Scott Brown (R-Mass)'),
('Ron Paul (R)'),
('Scott Brown (R-Mass)'),
('Dean Heller (R-Nev)'),
('Jon Tester (D-Mont)'),
('Rick Berg (R-ND)'),
('Orrin G Hatch (R-Utah)'),
('Bob Corker (R-Tenn)'),
('John Boehner (R-Ohio)'),
('Harry Reid (D-Nev)'),
('Barbara Boxer (D-Calif)'),
('Charles E Schumer (D-NY)'),
('Roy Blunt (R-Mo)'),	
('Gerry Connolly (D-Va)'),
('Barack Obama (D)'),
('John McCain (R)'),
('Hillary Clinton (D-NY)'),
('Saxby Chambliss (R-Ga)'),
('Joe Lieberman (I-Conn)'),
('Jon L Kyl (R-Ariz)'),
('Rick Santorum (R-Pa)'),
('John Kerry (D)'),
('Jean Carnahan (D-Mo'),
('Greg Ganske (R-Iowa)'),
('Paul Wellstone (D-Minn)'),
('Nancy L Johnson (R-Conn)'),
('John Thune (R-SD)'),
('Mary L Landrieu (D-La)'),
('John D Dingell (D-Mich)'),
('Rick A Lazio (R-NY)'),
('Charles S Robb (D-Va)'),
('David E Bonior (D-Mich)'),
('Ron Klink (D-Pa)');


INSERT INTO cost_of_election VALUES
('2016*',   '$6.444.253.265',	'$3.076.968.576',	'$3.078.629.166'),	
('2014',	'$3.921.590.197',	'$1.788.104.441',	'$1.846.074.020'),	
('2012*',	'$6.609.557.743',	'$2.930.193.516',	'$3.413.160.735'),	
('2010',	'$4.020.984.328',	'$1.867.391.527',	'$1.894.664.436'),	
('2008*',	'$5.927.046.595',	'$3.370.847.876',	'$2.511.143.396'),	
('2006',	'$3.416.234.314',	'$1.628.828.804',	'$1.730.257.475'),	
('2004*',	'$5.300.543.183',	'$2.743.838.776',	'$2.509.383.606'),	
('2002',	'$2.927.842.804',	'$1.311.201.258',	'$1.587.943.275'),	
('2000*',	'$4.321.482.961',	'$1.839.315.316',	'$2.330.564.834');	