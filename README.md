# StormEventsTracker
This project is a MERN stack. MERN meaning (MongoDB, Express, React, Node.js). None of this would be possible without the work of
those at the National Centers for Environmental Information (NCEI), so I want to thank them for compiling all of this data for public use.

## Project Components
### Backend
In the backend, models of the MongoDB collections are created and then sent to the database as queries to bring back the data that is requested by the user in the frontend. The MongoDB is one that I designed and imported all of the data into. The API module does all of the heavy lifting and the Server module makes sure that Mongo's connection is stable and sets up the localhost endpoint.

### Frontend
There is are a decent amount of modules to go through. The Components and Context directories handle everything to do with the Mongo connection and work with the backend. These are crucial to connectivity to the backend to bring data to the user. They are organized into Charts, Lists, and Pages. Charts and Lists are pieces of the pages based on the collection that the user would be interacting with. The Routes module creates the The App module takes all of these modules and puts them on a localhost that the user can interact with on their browser.

# Sources
## Information on the Database
https://www.ncdc.noaa.gov/stormevents/
## Link to where I accessed the Data
https://www.ncei.noaa.gov/pub/data/swdi/stormevents/csvfiles/
## Link to US States GeoJSON Data from Kaggle
[GeoJSON Bulk Data Link](https://storage.googleapis.com/kagglesdsdata/datasets/831691/1428241/us-states.json?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=gcp-kaggle-com%40kaggle-161607.iam.gserviceaccount.com%2F20240715%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20240715T234511Z&X-Goog-Expires=259200&X-Goog-SignedHeaders=host&X-Goog-Signature=6f9effcbd37fdbc213231636e3121c88c4d8478e5eb6c6b39108e89e34944b4e662faa7a2374acbf32fe3daafd32d49c1db8d553bc14c9d4fc38b8e9ff982d93dc956210fa0b9cc13bef7d32739c4c68064e1f70c1e974e35cb2afa939611bfce4c355c841ec64c7585e09b2175fd3109f81a7b28b485d6c273903848b9a13d46fc412fe5161c111afadbc77ca2bca0c1d64b70778f40a990efd91e73a271c0d5bfb93eac50568780426fe38a28a9afaea8695fb530431ba35cb1b229c7b41e2131a02a3bbe3446d983af6622a60433c672489a4ee60dbe5e934ca0959d63f320080ded2f1d6237123522a17cd8e7a40f67588e68d695024a3839a2abd88d792)

[GeoJSON Link to Author](https://www.kaggle.com/datasets/pompelmo/usa-states-geojson)