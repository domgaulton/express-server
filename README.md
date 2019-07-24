## Express Server basics

- Run `npm install` to install dependencies
- Terminal `$ node start.js` (so we know to use webpack) then point browser to `http://localhost:3000/` to see returned message or `http://localhost:3000/profile` to see returned object

### Tutorial

- https://www.robinwieruch.de/node-express-server-rest-api/

* `dotenv` allows .env usage
* `uuidv4` - unique identifier tool
* `bodyParser` - The body-parser extracts the entire body portion of an incoming request stream and makes it accessible on req.body
* `curl -X POST -H "Content-Type:application/json" http://localhost:3000/messages -d '{"text":"Hi again, World"}'` - post message
* `next();` tells middlewear you're finished - useful for async `.then()` functions on client
