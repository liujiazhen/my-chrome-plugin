console.log(' ———— extension by 刘加振');

let pageUrl = window.location.href

const myBaiduChinaText = '热烈庆祝中华人民共和国成立73周年'

document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);

function fireContentLoadedEvent () {
    console.log ("DOMContentLoaded ！！！");
    baiduInit();
}

function indexDiy() {
    // // 搜索按钮
    let searchButton = document.getElementById('su');
    if (searchButton != null && searchButton != undefined) {
        searchButton.value = 'Google'
    }


    let headWrapper = document.getElementById('s_fm')
    if (headWrapper != null) {
        let pageDiv = document.createElement('div');
        pageDiv.setAttribute('style', 'color: red; font-size:20px;');
        // pageDiv.innerHTML = 'Dark River'
        pageDiv.innerHTML = myBaiduChinaText
        headWrapper.appendChild(pageDiv)
    }

    let topLeft = document.getElementById('s-top-left')
    if (topLeft) {
        let toLeftChildren = topLeft.children
        if (toLeftChildren.length > 1) {
            toLeftChildren[1].innerHTML = 'ok2345'
            toLeftChildren[1].href = 'https://www.2345.com/'
        }
    }

}

function baiduInit() {
    indexDiy();
}