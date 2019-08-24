// const Http = new XMLHttpRequest();
// Http.open("GET", "https://jsonplaceholder.typicode.com/posts",true);
// Http.send();

// console.log(Http.responseText);

// $("button").click(function(){
//     alert("In Fun");
//     $.get("https://jsonplaceholder.typicode.com/posts", function(data, status){
//       console.log("Data: " + data + "\nStatus: " + status);
//     });
//   })

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         console.log(this.responseText);
//       }
// }
// xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=1", true);
// xhttp.send();

function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
  
      // Check if the XMLHttpRequest object has a "withCredentials" property.
      // "withCredentials" only exists on XMLHTTPRequest2 objects.
      xhr.open(method, url, true);
  
    } else if (typeof XDomainRequest != "undefined") {
  
      // Otherwise, check if XDomainRequest.
      // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
      xhr = new XDomainRequest();
      xhr.open(method, url);
  
    } else {
  
      // Otherwise, CORS is not supported by the browser.
      xhr = null;
  
    }
    return xhr;
  }

var xhr = createCORSRequest('GET', 'https://api.uber.com/v1.2/products?latitude=37.7759792&longitude=-122.41823');
xhr.setRequestHeader("Authorization", "Token JA.VUNmGAAAAAAAEgASAAAABwAIAAwAAAAAAAAAEgAAAAAAAAH4AAAAFAAAAAAADgAQAAQAAAAIAAwAAAAOAAAAzAAAABwAAAAEAAAAEAAAANLRxXYpyGUplRnbJY4uX26nAAAABkEXm162fjVOHY4vcTaBE6eG2Zg0Gs_yg_QIatoPooUWn-xKU3jZk7DkiIrei1yoDxGTLe-i6vM3xnMXp3ALfWBVmGWBpsQ4SQ8uruMERexOUrqSeXlMVZXBQmh_n4i9WYklGZsMjkaLfCh_iBECBrFb_t_Wp1NCFgB_1Chmx77cOg4t4gkinUxyMstegDKupndR01YvxkfgFxBm2sPLYW-TWeP-ZFAADAAAAHRxWEijCpmcGMQpKyQAAABiMGQ4NTgwMy0zOGEwLTQyYjMtODA2ZS03YTRjZjhlMTk2ZWU");
xhr.send();

console.log(xhr.responseText);