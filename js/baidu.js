(function () {
	let page = window.location.href
    var baidu = {
        init: function () {
        	let randomNum = Math.floor(Math.random() * 100 + 9)
        	console.log(document.title);
        }
    }
    baidu.init();
})();