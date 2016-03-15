1
2
3
4
5
6
7
// the first line selects the button and waits for a click
// when the button is clicked it runs a function 
// that selects the h1 and does something

$("button").click(function(){
  $("h1").doSomething();
});