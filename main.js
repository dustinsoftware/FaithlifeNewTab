function pad(number) {
  var result = String(number);
  if ( result.length === 1 ) {
    result = '0' + result;
  }
  return result;
}

var today = new Date();
var todayDate = today.getFullYear() + '-' + pad( today.getMonth() + 1 ) + '-' + pad( today.getDate() );

document.getElementById('verse-of-the-day-image').src = "https://biblia.com/verseoftheday/image/" + todayDate + "?width=800";