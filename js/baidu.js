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
        searchButton.value = '随便搜搜'
    }

    let bottom_space = document.getElementById('bottom_space')
    if (bottom_space) {
        // bottom_space.innerHTML = '中华人民共和国万岁 &nbsp;&nbsp;&nbsp;&nbsp; 世界人民大团结万岁'
        bottom_space.innerHTML = '`'
        bottom_space.style.color = '#FFFFFF'
    }


    let headWrapper = document.getElementById('s_form_wrapper')
    
    if (headWrapper) {
        let pageDiv = document.createElement('div');
        pageDiv.setAttribute('style', 'color: red; font-size:20px;');
        // pageDiv.innerHTML = 'Dark River'
        pageDiv.innerHTML = myBaiduChinaText
        
        // pageDiv.onclick = () => {window.location.href = 'http://www.gov.cn/xinwen/2022-09/30/content_5715284.htm'}

        headWrapper.appendChild(pageDiv)
    }

    let topLeft = document.getElementById('s-top-left')
    if (topLeft) {
        let toLeftChildren = topLeft.children
        for (let i = 0; i < toLeftChildren.length; i++) {
            toLeftChildren[i].target = '_self'
        }
        if (toLeftChildren.length > 1) {
            toLeftChildren[1].innerHTML = 'ok2345'
            toLeftChildren[1].href = 'https://www.2345.com/'
            toLeftChildren[1].target = '_self'
        }

    }

}

function baiduInit() {
    indexDiy();
}