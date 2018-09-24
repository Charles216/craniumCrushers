# Campaign Query

Campaign Query has been created as a group project as part of the Northwestern Web Dev Bootcamp.  Contributing developers are Amy Moretti, Bobbi Rose, Charlie Grogan, and Joe Plukarski.

<h2>Concept</h2>

Campaign Query is the result of a lengthy discussion about campaign finance laws and how difficult it can be to obtain campaign finance data.  Finding finance data requires a large amount of time to sift through a mountain of data from the Federal Election Commission. Other websites do provide this information but they are equally difficult to sort through and the user interfaces were really lacking.  Our goal was to improve upon this by creating a clear, easy to read website regarding campaign finance.

<h2>Resources</h2

Over the course of our research we settled on making primary use of two websites.  Our datasets came from OpenSecrets.org/The Center for Responsive Politics and we also used the Federal Election Commission api.  This allowed us to easier sift through the data, as the sheer amount was overwhelming.  

<h2>Technology and Design</h2>

We used a variety of technologies to build this website.  In addition to using basic HTML and CSS to build the UI, we utilized Javascript and jQuery to interact with our APIs.

Express, MySQL and Sequelize were used to build an API using the datasets from OpenSecrets.org, which we then queried with Ajax.  We are then displaying the data using visuals from Amcharts.

<h2>Project Challenges</h2>
Our biggest challenge with this project was the sheer amount of data.  We maxed out our use of the the Federal Election Commission API on at least one occasion due the pagination of the API -- with over 4000 results and 100 pages, it we made too many calls during teseting. 

<h2>Next Interations</h2>

We were very ambitious with this project and as a result have many things we would like to implement in the future.  
<ul>
<li>Candidate information and search -- being able to view a candidate individually to see who their donors are</li>
<li>Vote registration -- links to each states election committee in order to facilitate easy voter registration</li>
<li>A ticking dollar amount, showing approximate funds donated to campaigns for the current election cyle.</li>
</ul>
