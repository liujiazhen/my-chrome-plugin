(function () {
	let page = window.location.href
    let $ = function (id) {
        return document.getElementById(id);
    };
    var ZhiHu = {
        init: function () {
        	console.log(document.title);
        	if (page.includes('question') || page.includes('answer')) {
        		document.querySelector('div.Question-main').style.width="100%";
				document.querySelector('div.Question-mainColumn').style.width="100%";
        	} else {
        		document.querySelector('div.Topstory-container').style.width="100%";
				document.querySelector('div.Topstory-mainColumn').style.width="100%";
        	}
			
        }
    }
    ZhiHu.init();
})();


