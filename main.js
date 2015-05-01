function pad(number) {
  var result = String(number);
  if ( result.length === 1 ) {
    result = '0' + result;
  }
  return result;
}

var today = new Date();
var todayDate = today.getUTCFullYear() + '-' + pad( today.getUTCMonth() + 1 ) + '-' + pad( today.getUTCDate() );

document.getElementById('verse-of-the-day-image').style.backgroundImage = "url('https://biblia.com/verseoftheday/image/" + todayDate + "?width=800')";