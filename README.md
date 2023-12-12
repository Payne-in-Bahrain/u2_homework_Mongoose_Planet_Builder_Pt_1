<img src="https://i.imgur.com/Y74xxoD.jpg" width="100%">

# Mongoose "Flights" Lab - Part 1

## Intro

Today in the Intro to Mongoose lesson you Created and Read documents using a `Movie` Model.

In this lab, you'll do the same, except you'll create and use a `Flight` model.

You'll begin by forking and cloning this repository. Then `cd` in to that directory and follow the directions below.

FYI, future lessons will expand upon the `mongoose-movies` project, and the labs will expand upon the `mongoose-flights` project!

#### Each part of  `mongoose-flights` (parts 1 thru 3) will be a deliverable and you will make a pull request each time to this same repo to submit each part.

## Exercises

👉 Refer to `mongoose-movies` as needed!

1. Use express generator to create a `mongoose-flights` project. Be sure to install the Node modules after you `cd` into the project.

2. Rename **app.js** to **server.js** and make the necessary change inside of `bin/www`.

3. Install the `dotenv` module and

    ```js
    // server.js

    var logger = require('morgan');
    // Add the line below
    require('dotenv').config();
    ```

4. Create a **.env** file in the root of the project file.

5. Copy your `DATABASE_URL=...` from your **.env** file in `mongoose-movies` and change the name of the database to something like `flights`.

6. Create a **config/database.js** module that connects to a database.

7. Be sure to require the **config/database.js** AFTER `dotenv` in **server.js**.

8. Verify that starting the Express server with `nodemon` console.logs out a successful connection to the database.

9. Optionally set up partial templates.

10. Create a `Flight` Model with the following properties:

	| Property | Type | Validations | Default Value |
	|---|---|---|---|
	| `airline`| `String`| `enum` to include 'American', 'Southwest' & 'United'<br>(or your choices) | n/a | 
	| `airport`| `String`| `enum` to include<br>'AUS', 'DFW', 'DEN', 'LAX' & 'SAN'<br>(or your choices) | 'DEN'<br>(or your choice) |
	| `flightNo`| `Number`| Required<br>Between `10` and `9999` | n/a | 
	| `departs`| `Date`| n/a | One year from date created | 

11. Implement the following User Stories:
	- AAU, I want to view a list of all flights (`index` functionality) that displays each flight's airline, airport, flight no., and departure date/time (consider formatting the `departs` property).
	
	- AAU, I want to create flights by entering the information on a page (`new` functionality) that has a form and submitting it.

	- AAU, I want to be able to access each view via a navigation bar at the top of the page with links to:
		- `ALL FLIGHTS`, and
		- `ADD FLIGHT`

#### Hints:

- Checkout the [`<input type="datetime-local">`
](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local) to assist users in entering valid date/time values.

- In the form for adding a new Flight, use a `<select name="airport">` to assign the flight's `airport`. Since they don't change, it's okay to hard-code the `<option>` elements, e.g., `<option value="DEN" selected>`. Same for the `airline` property (use a `<select>`).

## Bonuses

1. Display the default departure date when displaying the new flight form.

	Hints:
	1. In the flight controller's `new` action, you could create an in-memory flight like this:<br>`const newFlight = new Flight();`<br>  This in-memory flight doc would have the default departure date set properly based on the logic in the function you assigned to `default`.
	2. Just like any other data you want to access/display in a view template, that data needs to be passed by the controller action when it calls `res.render`, however…
	3. Although an input of `type="datetime-local"` will display a date assigned to its `value` attribute, that date value needs to be formatted as a string matching this format: `yyyy-MM-ddThh:mm` (yes, a “T” character is used to separate the date portion from the time portion).  One way of obtaining the properly formatted string is to use the following approach:<br>

```js
const newFlight = new Flight();
// Obtain the default date
const dt = newFlight.departs;
// Format the date for the value attribute of the input
let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
res.render('flights/new', { departsDate });
```

2. Code these additional User Stories:
	- AAU, I want to view the list of flights by departure date in ascending order.
	
	- AAU, I want the flights in the list to be displayed using red text if the flight's departure date has passed.

3. Style the `index` and `new` views.

### This is a deliverable (Parts 2 & 3 will build upon this and will be deliverables next week)


# Mongoose "Flights" Lab - Part 2

## Intro

Today in the _Mongoose - Embedding Related Data_ lesson you:

- Created a schema used to embed _review_ subdocuments in a _movie_ document.

- Created routes and a controller for the _reviews_ data resource.

- Created UI for creating and displaying the _reviews_ on the **show** view of a movie.

- Wrote a `create` action that retrieved a _movie_ document, pushed the _review_ (`req.body`) into the document's `reviews` array, saved the _movie_ doc, and redirected back to the show view for that movie.

Similar to what we did in the lesson, in this lab you'll be adding functionality to the `mongoose-flights` project you created in the _part 1_ lab.

#### The final version of `mongoose-flights` will be a deliverable, so do each part and don't fall behind.

## Goal

The goal of this lab is to add the ability to specify a list (array) of `destinations` for the flight - if the flight is non-stop, then there will be only one destination sub-doc in the array.

Styling is secondary, spend time on it only after the functionality has been implemented.

## Exercises

1. Create a `destinationSchema` that will provide the structure for _destination_ subdocuments with the following properties:

	| Property | Type | Validations | Default Value |
	|---|---|---|---|
	| `airport`| `String`| `enum` to include<br>'AUS', 'DFW', 'DEN', 'LAX' & 'SAN'<br>(your choice) | n/a |
	| `arrival`| `Date`| n/a | n/a | 

2. Add the following property to the `Flight` Model:

	| Property | Type | Validations | Default Value |
	|---|---|---|---|
	| `destinations`| `[destinationSchema]`| n/a | n/a | 

3. Implement the following User Story:<br>_AAU, when viewing the list of flights, I want to click on a "detail" link displayed next to each flight to view all of the properties for that flight (`show` view)_

4. Implement the following User Story:<br>_AAU, when viewing the details page (`show` view) for a flight, I want to be able to add a destination for that flight, including its `arrival` date/time & one of the established airport codes_

5. Implement the following User Story:<br>_AAU, when viewing the details page (`show` view) for a flight, I want to see a list of that flight's `destinations` (`airport` & `arrival`)_


## Bonuses

1. Sort the list of `destinations` for a flight by the `arrival` date/time in ascending order.

2. Style the views.

3. When adding a destination for a flight, exclude the airports listed in the `<select>` that have already been used by other destinations and/or the flight's `airport`.

## Deliverable?

### The final version of `mongoose-flights` will be a deliverable, so do each part and don't fall behind.

# Mongoose "Flights" Lab - Part 3

## Intro

Today in the _Mongoose - Referencing Related Data_ lesson you:

- Created a `Performer` Model.

- Created a many-to-many relationship, `movie >--< performer` by adding a `cast` property in the `Movie` Model that references _performer_ documents.

- Created routes and a controller for the _performers_ data resource.

- Implemented functionality for creating  _performers_.

- Populated the `cast` property with _performer_ docs and displayed them with the movie on the movie's show view.

- Implemented functionality for adding _performers_ to a movie's `cast` (if the don't already exist in the cast).

Similar to what we did in the lesson, in this lab you'll be adding functionality to the `mongoose-flights` project you created in _part 1_ and have continued to work on in _part 2_ of the lab.

#### The final version of `mongoose-flights`, as a result of completing parts 1 - 3 of this lab, is a DELIVERABLE.

## Goal

The goal of this lab is to practice referencing related data.

You will add the ability to create _tickets_ for a given _flight_ in the `mongoose-flight` project.

The relationship between the data entities is:<br>
`Flight --< Ticket`<br>
_A flight has many tickets_ / _A ticket belongs to a flight_

Styling is secondary, spend time on it only after the functionality has been implemented.

## Exercises

1. Create a `ticketSchema` that will be compiled into a `Ticket` Model with the following properties:

	| Property | Type | Validations | Default Value |
	|---|---|---|---|
	| `seat`| `String`| Must be 'A1' thru 'F99' (see hints) | n/a |
	| `price`| `Number`| Minimum of `0` | n/a |
	| `flight`| `ObjectId`| Include `ref: 'Flight'` to enable population | n/a |

	##### Hints
	
	Notice how we don't _have_ to use an array to implement the 1:M relationship between `Flight` and `Ticket`. Instead, referencing the `ObjectId` of the _flight_ in the `flight` property of a _ticket_ enables the relationship. FYI, to implement this 1:M relationship, we _could_ have put a `tickets` array on the `Flight` model instead. Yup, unlike M:M relationships, 1:M doesn't require the use of an array property - just an ObjectId on the "belongs to" side (child side) of the relationship.
	
	Define the `seat` property as follows:<br>`seat: {type: String, match: /[A-F][1-9]\d?/}` - that's what we call a [regular expression](https://en.wikipedia.org/wiki/Regular_expression) that's being assigned to the `match` validator. Now for the best part, which just might blow your mind! You ready?  Here it is... HTML `<input>` tags have a `pattern` attribute that accept a regex pattern; and if what's typed in the `<input>` doesn't match the pattern, the form can't be submitted! Here's what your `<input>` should look like for entering the seat:
	
	```html
	<input name="seat" required pattern="[A-F][1-9]\d?">
	```
	That regex pattern will match the following characters:
	
	- An `A` thru `F` character, followed by
	- a `1` thru `9` character, followed by
	- zero or one `0` thru `9` character.
	
	We'll cover more about regular expressions soon enough in SEI, but this opportunity to preview them was too hard to pass up! Combined with the HTML `pattern` attribute, they provide an excellent way to perform _client-side_ validation of inputs.

2. Implement the following user story:<br>_AAU, when viewing the detail page for a flight, I want to view a list of the tickets that have been created for that flight_

	##### Hints

	To show a list of _tickets_ that belong to a _flight_ in the `flights/show.ejs`, the flight controller's `show` action is going to have pass that array of tickets to be rendered.  This is going to require the `show` action to make a separate query to retrieve the tickets as follows:
	
	```js
	const flight = await Flight.findById(req.params.id)
	const tickets = await Ticket.find({flight: flight._id})
        // Now you can pass both the flight and tickets in the res.render call
	...
	```
	
	Note that there's no reason to `populate` the `flight` property because in this case, you already have obtained the _flight_ using `Flight.findById`.
	
	For future reference though, here's how to populate a _ticket's_ `flight` property:
	
	```js
	const ticket = await Ticket.findById(req.params.id).populate('flight')
	...
	```

3. Also on the flight's `show` view, display a **New Ticket** link (perhaps styled to look like a button) that when clicked, shows the ticket's `new` view used to create a _ticket_ for the _flight_. When the form is submitted, create the _ticket_ on the server and redirect back to the _flight's_ `show` view.

	##### Hints
	
	To display the view with the form for adding a ticket, the path of the `href` for the **New Ticket** link will need to include the flight's `_id`.  The path should match this route defined on the server:  `/flights/:id/tickets/new`. The `req.params.id` can now be passed to the **tickets/new.ejs** and used for the ticket form's `action` attribute...
	
	If you use the "proper" route for the ticket form's `action` attribute, the `ticketsCtrl.create` action will have access to the `_id` of the _flight_ the _ticket_ is being created for - you got this!
	
	In the controller action, there **will not** be a `flight` property on the `req.body` object. You must add that property yourself before using `req.body` to create the _ticket_. Failure to do so will result in the _ticket_ being created without a `flight` property that references the _flight_ it belongs to - so if newly added tickets are not showing up with the flight, this is probably the cause.
 
## More Hints

- Learn it, know it, live it... When adding functionality to the app:
	1. Identify the "proper" Route (Verb + Path)
	2. Create the UI that issues a request that matches that route.
	3. Define the route on the server and map it to a controller action.
	4. Code and export the controller action.
	5. `res.render` a view in the case of a GET request, or `res.redirect` if data was changed.

## Bonuses

1. Style the app.
