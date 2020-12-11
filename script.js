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
var arrayOfKeys = Object.keys(localStorage);
var orderedKeys = arrayOfKeys.sort();

currentDay.text(todaysDate);
console.log(orderedKeys)
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
function renderTodos() {
  for (var i = 0; i < timeBlock.length; i++) {
    var translators ={
      todo1: 1,
      todo2: 2,
      todo3: 3,
      todo4: 4,
      todo5: 5,
      todo6: 6,
      todo7: 7,
      todo8: 8,
    }
  todoNum = translators[orderedKeys[i]]
    // console.log(JSON.parse(localStorage.getItem(orderedKeys[i])))
    console.log(todoNum) 
    // console.log(textBlock[i].attr('data-index') == todoNum)
    //  {
    //   textBlock[i].val(blockText)
    // }
  }
}
renderTodos()
       
    // button function to store todos
function newEvent1() {
  var newTodo = $(this).prev().val();
    localStorage.todo1 = JSON.stringify(newTodo);
    $('#txt1').val('')
    $('#txt1').val(JSON.parse(localStorage.todo1)) 
}

$('#btn1').click (newEvent1)

function newEvent2() {
  var newTodo = $(this).prev().val();
    localStorage.todo2 = JSON.stringify(newTodo);
    $('#txt2').val('')
    $('#txt2').val(JSON.parse(localStorage.todo2))
}

$('#btn2').click (newEvent2)


function newEvent3() {
  var newTodo = $(this).prev().val();
    localStorage.todo3 = JSON.stringify(newTodo);
    $('#txt3').val('')
    $('#txt3').val(JSON.parse(localStorage.todo3))
}

$('#btn3').click (newEvent3)

function newEvent4() {
  var newTodo = $(this).prev().val();
    localStorage.todo4 = JSON.stringify(newTodo);
    $('#txt4').val('')
    $('#txt4').val(JSON.parse(localStorage.todo4))
}

$('#btn4').click (newEvent4)

function newEvent5() {
  var newTodo = $(this).prev().val();
    localStorage.todo5 = JSON.stringify(newTodo);
    $('#txt5').val('')
    $('#txt5').val(JSON.parse(localStorage.todo5))
}

$('#btn5').click (newEvent5)

function newEvent6() {
  var newTodo = $(this).prev().val()
    localStorage.todo6 = JSON.stringify(newTodo);
    $('#txt6').val('')
    $('#txt6').val(JSON.parse(localStorage.todo6))
}

$('#btn6').click (newEvent6)

function newEvent7() {
  var newTodo = $(this).prev().val();
    localStorage.todo7 = JSON.stringify(newTodo);
    $('#txt7').val('')
    $('#txt7').val(JSON.parse(localStorage.todo7))
}

$('#btn7').click (newEvent7)

function newEvent8() {
  var newTodo = $(this).prev().val();
    localStorage.todo8 = JSON.stringify(newTodo);
    $('#txt8').val('')
    $('#txt8').val(JSON.parse(localStorage.todo8))
}

$('#btn8').click (newEvent8)

function clearEvents() {
  localStorage.todo1 = 'Schedule Events';
  localStorage.todo2 = 'Schedule Events';
  localStorage.todo3 = 'Schedule Events';
  localStorage.todo4 = 'Schedule Events';
  localStorage.todo5 = 'Schedule Events';
  localStorage.todo6 = 'Schedule Events';
  localStorage.todo7 = 'Schedule Events';
  localStorage.todo8 = 'Schedule Events';
  for (var i = 0; i < 8; i++){
    textBlock[i].text('')
  }
}
$('#delete-all').click(clearEvents)