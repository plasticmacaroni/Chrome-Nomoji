// chrome.webRequest.onCompleted.addListener(
//   function () {
//     return {
//       redirectUrl: chrome.extension.getURL('images/pixel.png')
//     };
//   }, {
//     urls: ["*://abs.twimg.com/emoji/v2*"]
//   }, ["blocking"]
// );

chrome.webRequest.onCompleted.addListener(function () {
  // if (typeof changeInfo.status == 'string' && changeInfo.status == 'complete') {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      key: 'nomoji'
    }, function (response) {;
    });
  });
  // }
}, {
  urls: ["<all_urls>"]
});

chrome.webRequest.onCompleted.addListener(function () {
  // if (typeof changeInfo.status == 'string' && changeInfo.status == 'complete') {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      key: 'nofacebookmoji'
    }, function (response) {;
    });
  });
  // }
}, {
  urls: ["https://www.facebook.com/*"]
});

chrome.webRequest.onCompleted.addListener(function () {
  // if (typeof changeInfo.status == 'string' && changeInfo.status == 'complete') {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      key: 'notwittermoji'
    }, function (response) {;
    });
  });
  // }
}, {
  urls: ["https://twitter.com/*"]
});