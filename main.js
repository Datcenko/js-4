var arr = ['Lorem ipsum', 'Blanditiis, eaque', 'Iure, quis', 'Iure, voluptatum',
'Maxime, veniam', 'Inventore, a', 'Eius, qui', 'Accusantium, amet', 'Nemo, eos', 'Vero, quos'];

function filterItems(condition) {
  return arr.filter(function(el) {
      return el.indexOf(condition) === -1;
  })
}
console.log(filterItems('o')); 


function formatDate (d) {
    
    var day =  d.getDate();
    if (day < 10) day = '0' + day;

    var month =  d.getMonth() + 1;
    if (month < 10) month = '0' + month;

    var year = d.getFullYear();
    var hour = d.getHours();

    var minutes = d.getMinutes();
    if (minutes< 10) minutes = '0' + minutes;

    return year+ '-' +  month+ '-' + day+ ';'+ hour+ ':' + minutes;
 }
var today = new Date;

console.log(formatDate(today));




function formDate (dd) {
    
    var day =  dd.getDate();
    if (day < 10) day = '0' + day;

    var month =  dd.getMonth() + 1;
    if (month < 10) month = '0' + month;

    var year = dd.getFullYear();
    var hour = dd.getHours();

    var minutes = dd.getMinutes();
    if (minutes< 10) minutes = '0' + minutes;

    var seconds = dd.getSeconds();
    if (seconds < 10) seconds = '0'+ seconds;

    return day+ '.' +  month+ '.' +year + ';'+ hour+ ':' + minutes + ':' + seconds;
}
var today = new Date;

console.log(formDate(today));



function sayThanks() {
    alert( 'Спасибо!' );
  }

  elem.onclick = sayThanks;
 
