# leaflet-challenge
<h2>Create the Earthquake Visualization with Leaflet</h2>

<h3>Backgroud</h3>
<img src="./images/1-logo.png" alt="USGS_logo"/>
<p>
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.
</p>

<hr/>
<div>
Goal:
<ul>
<li>Get the dataset from the website <a href="https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php">USGS GeoJSON</a> and pull JSON format earthquake data.</li>
<li>Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.</li>
<li>Make data markers to reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Higer magnitudes should apear larger, and greater depth for darker in color.</li>
<li>Include popups that provide additional information about the earthquake when its associated marker is clicked.</li>
<li>Create a legend that will provide context for your map data.</li>
</ul>

<h3>Tools and Techniques</h3>
<hr/>

<ul>
<li>Javascript</li>
<li>leaflet</li>
<li>HTML</li>
<li>Json</li>
<li>CSS</li>
<li>d3</li>
</ul>

</div>

<h3>Project Structure</h3>
<hr/>


<h4>Part 1: Getting access toekn after signing up mapbox (https://www.mapbox.com/).</h4>
<img src="./images/mapbox_access_token.png" alt="mapbox_account_access_token"/>


<h4>Part 2: Getting the URL from the website <a href="https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php">USGS GeoJSON</a> and understand GeoJSON datastructure</h4>
In the logic.js, I used the url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

<h4>Part 3: Define functions to create earthquakes layer and add label</h4>

<h3>Conclusion</h3>
<hr/>
<p>
This assignment showcased how the interactive map can be built with geoJSON file and Leaflet javascript libarary. The deployed website can be found in this <b><a href="https://sunjy0827.github.io/leaflet-challenge/">link</a></b>
</p>