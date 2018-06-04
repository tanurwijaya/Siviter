
// var script = document.createElement('script');
// script.src = 'libs/jquery-3.2.1.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);



var theValue;



 var h1 = document.createElement("h1");
 h1.className = "aClassName";

h1.setAttribute("style", "border:none; width:150px; height:30px");
h1.setAttribute("scrolling", "no");
h1.setAttribute("frameborder", "0");


 chrome.storage.sync.get(['value'], function(x) {
    if (typeof x["value"] == 'undefined') {
        console.log("kosong");
        theValue =1;
        chrome.storage.sync.set({'value': 1});
        h1.innerHTML = "Visit "+theValue+" times";
    }else{
     
     theValue = x["value"];
     theValue = theValue+1;
     chrome.storage.sync.set({'value': theValue});
     h1.innerHTML = "Visit "+theValue+" times";
     console.log(theValue);
 }

});
$(document).ready(function(){
    $(".aClassName").delay(3000).fadeOut();   
    // $(".aClassName").delay(3000).slideDown("slow");
});
 

 document.body.appendChild(h1);
 

  // var div = document.createElement('div');
           
  //         div.className = 'new-rect';       
  //           //div.style.backgroundColor = "black";

  //      document.getElementsByTagName('body')[0].appendChild(div);

 // chrome.storage.sync.set({'value': theValue});








 chrome.storage.onChanged.addListener(function(changes, namespace) {
    for (key in changes) {
      var storageChange = changes[key];
      console.log('Storage key "%s" in namespace "%s" changed. ' +
          'Old value was "%s", new value is "%s".',
          key,
          namespace,
          storageChange.oldValue,
          storageChange.newValue);
  }
});

// alert(x);



// function clearData(){
//     chrome.storage.sync.clear();
// }



// chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
//     suggest([
//       {content: text + " one", description: "the first one"},
//       {content: text + " number two", description: "the second entry"}
//     ]);
// });
// chrome.omnibox.onInputEntered.addListener(function(text) {
//     alert('You just typed "' + text + '"');
// });


