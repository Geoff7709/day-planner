var currentDay = $('#currentDay');
var todaysDate = moment().format("dddd, MMMM Do YYYY");
var textBlock = $('textarea');
console.log($('b')[0].firstChild.textContent);
console.log(moment().format('h a'))
currentDay.text(todaysDate);
// control color coding
for (var i = 0; i < 8; i++) {
    console.log(blockTime = $('b')[i].firstChild.textContent)
    // function currentBlock() {
    // if 
    // }
}