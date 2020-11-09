var output = {};

function process() {
  var timeElements = [...document.querySelectorAll('article a time')];
  var tweets = timeElements.map(e => e.closest('article'));

  tweets.forEach(function(tweet) {
    var url = tweet.querySelector('a time').parentNode.href;
    var id = url.replace(/^[^0-9]+/, '');
    var isThread = !!tweet.querySelector('article > * > a');

    output[id] = { id, url, isThread };
  });

  return tweets[tweets.length - 1];
}

var iterations = 1000;
var oldCursor, newCursor;

function main() {
  oldCursor = newCursor;
  newCursor = process();

  if (oldCursor !== newCursor && iterations > 0) {
    iterations--;
    newCursor.scrollIntoView();
    console.log(Object.keys(output).length);  
    setTimeout(main, 1000);
  }
}

document.scrollingElement.scrollTop = 0;
main();