$(document).ready(function(){



  var sites=[];
  // chrome.storage.sync.set({'sites': sites });
  // sites.push("gugel.kom");
  // sites.push("pesbuk.kom");

  getData();
// chrome.storage.sync.set({'sites': sites });


// alert(sites.length);

// alert(text.trim().charCodeAt(text.length-1));

$("#showAll").click(function(){
  var text = $("#showAll").text().trim();
  $( "#list" ).slideToggle( "slow");
  text.charCodeAt(text.length-1) == 9660 ?
        $(this).html('Show all list: &#9658;') : $(this).html('Hide all list: &#x25BC;');
});

$("form").submit(function(e){
  
  var site = $("#siteInput").val();

  if (sites.length<5) {
    if (!sites.includes(site)) {
      sites.push(site);
      chrome.storage.sync.set({'sites': sites});
    }else{
      $("#error").css("visibility","visible");
      $("#error").html("Situs sudah tersimpan");
       e.preventDefault();
       $("#error").delay(3000) .queue(function (next) {
        $(this).css("visibility","hidden");
        next();
      });
    }

  }else{
    $("#error").css("visibility","visible");
    $("#error").html("Max 5 sites");
    e.preventDefault();
    $("#error").delay(3000) .queue(function (next) {
        $(this).css("visibility","hidden");
        next();
      });

    
  }
});




function getData(){
  chrome.storage.sync.get(['sites'], function(x) {
    sites = x['sites'];
    $.each(sites,function(i,item){
      $("#list").append("<li>"+item+"</li>");
    });
  });

 

  // chrome.storage.sync.get(['value'], function(result){
  //      document.write(result["value"]);
  //   });


}


// sites=[];
// chrome.storage.sync.set({'sites': sites });



});






// function getSavedBackgroundColor(url, callback) {
//   // See https://developer.chrome.com/apps/storage#type-StorageArea. We check
//   // for chrome.runtime.lastError to ensure correctness even when the API call
//   // fails.
//   chrome.storage.sync.get(url, (items) => {
//     callback(chrome.runtime.lastError ? null : items[url]);
//   });
// }

// /**
//  * Sets the given background color for url.
//  *
//  * @param {string} url URL for which background color is to be saved.
//  * @param {string} color The background color to be saved.
//  */
// function saveBackgroundColor(url, color) {
//   var items = {};
//   items[url] = color;
//   // See https://developer.chrome.com/apps/storage#type-StorageArea. We omit the
//   // optional callback since we don't need to perform any action once the
//   // background color is saved.
//   chrome.storage.sync.set(items);
// }

// // This extension loads the saved background color for the current tab if one
// // exists. The user can select a new background color from the dropdown for the
// // current page, and it will be saved as part of the extension's isolated
// // storage. The chrome.storage API is used for this purpose. This is different
// // from the window.localStorage API, which is synchronous and stores data bound
// // to a document's origin. Also, using chrome.storage.sync instead of
// // chrome.storage.local allows the extension data to be synced across multiple
// // user devices.
// document.addEventListener('DOMContentLoaded', () => {
//   getCurrentTabUrl((url) => {
//     var dropdown = document.getElementById('dropdown');

//     // Load the saved background color for this page and modify the dropdown
//     // value, if needed.
//     getSavedBackgroundColor(url, (savedColor) => {
//       if (savedColor) {
//         changeBackgroundColor(savedColor);
//         dropdown.value = savedColor;
//       }
//     });

//     // Ensure the background color is changed and saved when the dropdown
//     // selection changes.
//     dropdown.addEventListener('change', () => {
//       changeBackgroundColor(dropdown.value);
//       saveBackgroundColor(url, dropdown.value);
//     });
//   });
// });
