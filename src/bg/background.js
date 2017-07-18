chrome.webRequest.onBeforeRequest.addListener(
  function () {
    return {redirectUrl: chrome.extension.getURL('images/pixel.png')};
  }, {
    urls: ["*://abs.twimg.com/emoji/v2*"]
  }, ["blocking"]
);