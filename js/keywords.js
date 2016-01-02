function Keywords () 
{
  var words = []; // array of search strings
  var myHilitor;
  document.addEventListener("DOMContentLoaded", function() {
    myHilitor = new Hilitor("content");
    // myHilitor.apply("Python");
  }, false);
    
  this.toggle = function (input) 
  {
    var index = words.indexOf(input);
    if (index > -1) 
    {
      // if already highlighted, remove
      words.splice(index, 1);
      document.getElementById(input.replace(/\\/g, "") + "-button").className = "";
    } 
    else 
    {
      // otherwise add
      words.push(input);
      document.getElementById(input.replace(/\\/g, "") + "-button").className = "button-primary";
    }
    myHilitor.applyArray(words);
  };
}