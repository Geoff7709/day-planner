var currentDay = $('#currentDay');
var todaysDate = moment().format("dddd, MMMM Do YYYY");
var textBlock = $('textarea');
var timeBlock = $('.hour');
var eventInput = $('.description');
// var todos = JSON.parse(localStorage.todo) || [];
// console.log($('b')[0].firstChild.textContent);
// console.log(moment().format('h a'))
currentDay.text(todaysDate);

// console.log(timeBlock.attr('data-mlt'))

// control color coding
// function currentBlock() {
//     for (var i = 0; i < 8; i++) {
//         // var timeBlock = parseInt($('b')[i].firstChild.textContent)
//         // var presentTime = parseInt(moment().format('h'))
//         // // var presentBlock = textBlock[i] 
//         // if (timeBlock[i] == presentTime[i]) {
//         //     $(textBlock[i]).attr('class', 'present')
//         // } else if (timeblock[i] > presentTime[i]) {
//         //     $(timeBlock[i]).attr('class', '')
//         // }
//     }
// }
// currentBlock()

function newEvent() {
  var newTodo = $(this).prev().val();
  if (newTodo !== '') {
    localStorage.todo = JSON.stringify(newTodo);
  }
}

$('.saveBtn').click (newEvent)

function clearEvents() {
  localStorage.clear();
}
$('#delete-all').click(clearEvents)