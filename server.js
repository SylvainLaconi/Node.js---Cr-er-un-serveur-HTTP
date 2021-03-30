const http = require('http');
const url = require('url');
const port = 8000;

const requestHandler = (request, response) => {
  console.log(request.url);
  const parsedUrl = url.parse(request.url, true);
  if (request.url === "/") {
    response.end('Please provide name AND city parameters')
  }
  else if (parsedUrl.query.name === "" || parsedUrl.query.city === "") {
    response.end('Hello <name> from <city> !')
  } else {
    response.end(`Hello ${parsedUrl.query.name} from ${parsedUrl.query.city} !`);
  } 
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`Server is listening on ${port}`)
  }
});