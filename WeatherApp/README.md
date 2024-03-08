WEATHER API APP

Simple app to practice accessing and presenting API data

The approach seems fairly simple; using an async function to access the weather data from an API and then render the data onscreen via HTML.

There will be a single input for location, and the 'Submit' button will fire the API function.

\*\* Ran into a bit of trouble early on writing the function as a promise chain (.then), most of the syntax was correct:

    fetch(http://api.com)
    .then((response) => {
        response.json()
    })
    .then((data) => {
        (console.log(data));
    })

HOWEVER on line 13 we should be RETURNING response.json(), as written it just performs the method and nothing else. It must be returned in order to be picked up by the next .then, like so:

    fetch(http://api.com)
    .then((response) => {
    ** return response.json(); **
    })
    .then((data) => {
        console.log(data)
    })
