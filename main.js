function pad(number) {
  var result = String(number);
  if ( result.length === 1 ) {
    result = '0' + result;
  }
  return result;
}

var today = new Date();
var todayDate = today.getFullYear() + '-' + pad( today.getMonth() + 1 ) + '-' + pad( today.getDate() );

document.getElementById('verse-of-the-day-image').src = 'https://biblia.com/verseoftheday/image/' + todayDate + '?width=800';

var bibliaLink = 'https://bible.faithlife.com/verseoftheday/lightbox/' + todayDate;

document.getElementById('share-faithlife-link').onclick = function() { window.location.href = 'https://faithlife.com/share?url=' + bibliaLink; };
document.getElementById('share-fb-link').onclick = function() { window.location.href = 'https://www.facebook.com/sharer/sharer.php?u=' + bibliaLink; };
document.getElementById('share-twitter-link').onclick = function() { window.location.href = 'https://twitter.com/share?url=' + bibliaLink; };
document.getElementById('verse-of-the-day-image').onclick = function() { window.location.href = bibliaLink; };
