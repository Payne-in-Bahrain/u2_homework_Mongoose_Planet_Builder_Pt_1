<img src="https://i.imgur.com/xXXnDGR.jpg" width="70%">
 
# Mongoose "Planet Builder" Lab - Part 1

## Intro

Today in the Intro to Mongoose lesson you Created and Read documents using a `Movie` Model.

In this lab, you'll do the same, except you'll create and use a `Planet` model.

We're going to be building an app that allows us to build our very own planets and define features of them, such as name, population and climate.  Later on we'll use embedded and referenced models to add additional functionality to our app, allowing users to create native plant life for their planets, as well as associate our planets with different explorers. 

You'll begin by forking and cloning this repository. Then `cd` in to that directory and follow the directions below.

FYI, future lessons will expand upon the `mongoose-movies` project, and the labs will expand upon the `mongoose-planet-builder` project!

#### Each part of  `planet-builder` (parts 1 thru 3) will be a deliverable.  No need to make a new pull request each time though. 

## Exercises

👉 Refer to `mongoose-movies` as needed!

1. Use express generator to create a `mongoose-planets` project. Be sure to install the Node modules after you `cd` into the project by running the command `npm i`. 

```
express -e planet-builder
```

2. Rename **app.js** to **server.js** and make the necessary change inside of `bin/www`.

3. Install the `dotenv` module by entering `npm i dotenv` into the CLI and

    ```js
    // server.js

    var logger = require('morgan');
    // Add the line below
    require('dotenv').config();
    ```

4. Create a **.env** file in the root of the project file.

5. Copy your `DATABASE_URL=...` from your **.env** file in `mongoose-movies` and change the name of the database to something like `planets`.

6. Create a **config/database.js** module that connects to a database.

```
mkdir config
```

```
touch config/database.js
```

Inside the database.js:

```
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

// shortcut to mongoose.connection object
const db = mongoose.connection;
	
db.on('connected', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
```

7. Be sure to require the **config/database.js** AFTER `dotenv` in **server.js**.

```
require('./config/database'); // database
```

8. Install Mongoose with `npm i mongoose` and verify that starting the Express server with `nodemon` console.logs out a successful connection to the database.

9. Optionally set up template partials.

10. Create a `Planet` Model inside of a models folder with the following properties:

	| Property | Type | Validations | Default Value |
	|---|---|---|---|
	| `name`| `String`| Required | n/a | 
	| `climate`| `String`| Required<br>`enum` to include<br>'Oceanic', 'Tropical', 'Arctic', 'Desert' & 'Rainforest'<br>(or your choices) | 'Desert'<br>(or your choice) |
	| `population`| `Number`| Required<br>Between `0` and `9,999,999` | n/a | 

*Remeber to name your model in the singular `planet.js`*

11. Implement the following User Stories:
	
	- AAU, I want to create a planet by entering the information on a page that has a form and submitting it.  You will need two routes.  Both a `GET /new` to display the form and a `POST /` to create the planet. 


	- AAU, I want to view a list of all created planets (`index` functionality) that displays each planet's name, 	population, and climate.

	- AAU, I want to be able to access each view via a navigation bar at the top of the page with links to:
		- `ALL PLANETS`, and
		- `ADD PLANET`

#### Hints:


- In the form for adding a new Planet, use a `<select name="climate">` to assign the planet's `climate`. Since the options for climates don't change, it's okay to hard-code the `<option>` elements, e.g., `<option value="Desert" selected>`, etc.

- Make sure to add some styling to your app!  Have fun with it! 


### This is a deliverable (Parts 2 & 3 will build upon this)
 
