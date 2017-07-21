chrome.runtime.onMessage.addListener(function (msg, sender, response) {
	if ((msg.key === 'nomoji')) {

		console.log("is it working?");
		var elements = document.getElementsByTagName('*');
		for (var i = 0; i < elements.length; i++) {
			var element = elements[i];

			for (var j = 0; j < element.childNodes.length; j++) {
				var node = element.childNodes[j];

				if (node.nodeType === 3) {
					var text = node.nodeValue;
					var replacedText = text.replace(/[\uD83C-\uDBFF\uDC00-\uDFFF\u2600\u2764]+/g, "");
					if (replacedText !== text) {
						element.replaceChild(document.createTextNode(replacedText), node);
					}
				}
			}
		}
	}
	if ((msg.key === "nofacebookmoji")) {
		var allImg = document.getElementsByTagName("img"),
			i = 0,
			img;

		var pattern = /https:\/\/www.facebook.com\/images\/emoji.php.*\.png/g;

		while (img = allImg[i++]) {
			if (img.src.match(pattern)) {
				img.src = img.src.replace(pattern, chrome.extension.getURL("images/pixel.png"));
			}
		}
	}
	if ((msg.key === "notwittermoji")) {
		var allImg = document.getElementsByTagName("img"),
			i = 0,
			img;

		var pattern = /https:\/\/abs\.twimg\.com\/emoji.*\.png/g;

		while (img = allImg[i++]) {
			if (img.src.match(pattern)) {
				img.src = img.src.replace(pattern, chrome.extension.getURL("images/pixel.png"));
			}
		}
	}
});