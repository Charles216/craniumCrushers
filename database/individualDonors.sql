--create table for cycle 2018
create table cycle2018
(
    contributor_id int
    auto_increment not null,
contributor_name varchar
    (255) not null,
contributor_company varchar
    (255) not null,
contributor_city varchar
    (255) not null,
total_contribution int not null,
percent_to_dems int not null,
percent_to_reps int not null,
primary key
    (contributor_id)
);

    --create table for cycle 2016
    create table cycle2016
    (
        contributor_id int
        auto_increment not null,
contributor_name varchar
        (255) not null,
contributor_company varchar
        (255) not null,
contributor_city varchar
        (255) not null,
total_contribution int not null,
percent_to_dems int not null,
percent_to_reps int not null,
primary key
        (contributor_id)
);

        --create table for cycle 2014
        create table cycle2014
        (
            contributor_id int
            auto_increment not null,
contributor_name varchar
            (255) not null,
contributor_company varchar
            (255) not null,
contributor_city varchar
            (255) not null,
total_contribution int not null,
percent_to_dems int not null,
percent_to_reps int not null,
primary key
            (contributor_id)
);

            --create table for cycle 2012
            create table cycle2012
            (
                contributor_id int
                auto_increment not null,
contributor_name varchar
                (255) not null,
contributor_company varchar
                (255) not null,
contributor_city varchar
                (255) not null,
total_contribution int not null,
percent_to_dems int not null,
percent_to_reps int not null,
primary key
                (contributor_id)
);

                --create table for 2010
                create table cycle2010
                (
                    contributor_id int
                    auto_increment not null,
contributor_name varchar
                    (255) not null,
contributor_company varchar
                    (255) not null,
contributor_city varchar
                    (255) not null,
total_contribution int not null,
percent_to_dems int not null,
percent_to_reps int not null,
primary key
                    (contributor_id)
);

                    --***UPDATE*** add display_name column
                    alter table cycle2018
      add display_name varchar(255);

                    alter table cycle2016
      add display_name varchar(255);
                    alter table cycle2014
      add display_name varchar(255);
                    alter table cycle2012
      add display_name varchar(255);
                    alter table cycle2010
      add display_name varchar(255);


