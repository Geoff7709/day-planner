var currentDay = $('#currentDay');
var todaysDate = moment().format("dddd, MMMM Do YYYY");
var textBlock = [$('#txt1'),
$('#txt2'),
$('#txt3'),
$('#txt4'),
$('#txt5'),
$('#txt6'),
$('#txt7'),
$('#txt8'),];
var timeBlock = [parseInt($('#hr1').attr('data-mlt')),
parseInt($('#hr2').attr('data-mlt')),
parseInt($('#hr3').attr('data-mlt')),
parseInt($('#hr4').attr('data-mlt')),
parseInt($('#hr5').attr('data-mlt')),
parseInt($('#hr6').attr('data-mlt')),
parseInt($('#hr7').attr('data-mlt')),
parseInt($('#hr8').attr('data-mlt')),];
var eventInput = $('.description');
// var todos = JSON.parse(localStorage.todo) || [];
currentDay.text(todaysDate);

// control color coding
function currentBlock() {
    for (var i = 0; i < 8; i++) {
      var presentTime = parseInt(moment().format('k'))
         if (timeBlock[i] == presentTime) {
            $(textBlock[i]).attr('class', 'present')
         }  
         if (timeBlock[i] > presentTime) {
            $(textBlock[i]).attr('class', 'future')
         }
         if (timeBlock[i] < presentTime) {
          $(textBlock[i]).attr('class', 'past')
         }
    }
}
currentBlock()
// button function to store todos
function newEvent1() {
  var newTodo = $(this).prev().val();
  if (newTodo !== '') {
    localStorage.todo1 = JSON.stringify(newTodo);
    $('#txt1').val('')
    $('#txt1').val(JSON.parse(localStorage.todo1)) 
  }
}

$('#btn1').click (newEvent1)

function newEvent2() {
  $('#txt2').val('')
  var newTodo = $(this).prev().val();
  if (newTodo !== '') {
    localStorage.todo2 = JSON.stringify(newTodo);
  }
}

$('#btn2').click (newEvent2)


function newEvent3() {
  $('#txt3').val('')
  var newTodo = $(this).prev().val();
  if (newTodo !== '') {
    localStorage.todo3 = JSON.stringify(newTodo);
  }
}

$('#btn3').click (newEvent3)

function newEvent4() {
  $('#txt4').val('')
  var newTodo = $(this).prev().val();
  if (newTodo !== '') {
    localStorage.todo4 = JSON.stringify(newTodo);
  }
}

$('#btn4').click (newEvent4)

function newEvent5() {
  $('#txt5').val('')
  var newTodo = $(this).prev().val();
  if (newTodo !== '') {
    localStorage.todo5 = JSON.stringify(newTodo);
  }
}

$('#btn5').click (newEvent5)

function newEvent6() {
  $('#txt6').val('')
  var newTodo = $(this).prev().val();
  if (newTodo !== '') {
    localStorage.todo6 = JSON.stringify(newTodo);
  }
}

$('#btn6').click (newEvent6)

function newEvent7() {
  $('#txt7').val('')
  var newTodo = $(this).prev().val();
  if (newTodo !== '') {
    localStorage.todo7 = JSON.stringify(newTodo);
  }
}

$('#btn7').click (newEvent7)

function newEvent8() {
  $('#txt8').val('')
  var newTodo = $(this).prev().val();
  if (newTodo !== '') {
    localStorage.todo8 = JSON.stringify(newTodo);
  }
}

$('#btn8').click (newEvent8)

function clearEvents() {
  localStorage.clear();
}
$('#delete-all').click(clearEvents)