# Tweet Validator

Checks for 140 character limit.

The `/tweet` endpoint responds to **POST** requests with a
*description* field in URL encoded format.  
It sends back a
**200** HTTP status code if *description* is valid and a **400** status code
if it's not.

Available on Heroku at <http://gentle-spire-1153.herokuapp.com/tweet>

## Running the app

* `npm install`
* `node app.js`

## Making calls with curl

Using *curl*, you can make calls like so:

`curl -d 'description=Example+of+description' http://localhost:3000/tweet`
