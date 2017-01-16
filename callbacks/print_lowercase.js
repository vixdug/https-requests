var getHTML = require('./http-functions');


function toLowerCase(html) {
var res = html.toLowerCase();
console.log(res);
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};
getHTML(requestOptions, toLowerCase);
