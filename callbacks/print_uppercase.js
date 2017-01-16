var getHTML = require('./http-functions');


function toUpperCase(html) {
var res = html.toUpperCase();
console.log(res);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};
getHTML(requestOptions, toUpperCase);
