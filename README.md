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