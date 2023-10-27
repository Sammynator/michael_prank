
let output = document.getElementById("output");

function myFunction() {
    var copyText = document.getElementById("myInput");
  
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    navigator.clipboard.writeText(copyText.value);
  
    
    output.textContent=`Copied "${copyText.value}" to clipboard.`;
    output.style.color = "white";



  }