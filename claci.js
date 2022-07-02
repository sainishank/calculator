function add() { 
    var nm1=document.getElementById('num1').value ; 
   
      var nm2=document.getElementById('num2').value ; 
        var res=parseInt(nm1)+parseInt(nm2); 
      alert("The Result is " +res); 
  } 
  function sub() { 
    var nm1=document.getElementById('num1').value; 
   
      var nm2=document.getElementById('num2').value; 
        var res=nm1-nm2; 
      alert("The Result is " +res); 
  } 
  function mult() { 
    var nm1=document.getElementById('num1').value; 
   
      var nm2=document.getElementById('num2').value; 
        var res=nm1*nm2; 
      alert("The Result is " +res); 
  } 
  function divi() { 
    var nm1=document.getElementById('num1').value; 
   
      var nm2=document.getElementById('num2').value; 
        var res=nm1/nm2; 
      alert("The Result is " +res); 
  } 
  function modulo() { 
    var nm1=document.getElementById('num1').value; 
   
      var nm2=document.getElementById('num2').value; 
        var res=nm1%nm2; 
      alert("The Result is " +res); 
  }