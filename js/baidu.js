let pageUrl = window.location.href

document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);

function fireContentLoadedEvent () {
    console.log ("DOMContentLoaded ！！！");
    indexDiy();
    baiduInit();
}

function indexDiy() {
    // 中上部区域
    // if(document.getElementById('my_custom_css')) {
    //     return
    // }
    // let s_btn_wr = document.getElementById('s_btn_wr')

    // let temp = document.createElement('style');
    // temp.id = 'my_custom_css';
    // (s_btn_wr || document.head || document.body).appendChild(temp);
    // let css = `
    // /* 顶部背景颜色 */
    // #head{background: #000000;}
    // #s_top_wrap{background: #000000;}
    // /* 顶部字体颜色 */
    // .c-color-t{color: #ffffff !important;}
    // /* 底部背景颜色 */
    // #bottom_layer{background: #000000;}
    // /* 热榜广告 */
    // .FYB_RD{display:none !important;}
    // #s-hotsearch-wrapper{display:none !important;}`;
    // temp.innerHTML = css;
    // console.log('已注入自定义CSS！');

    /*
    .con-ceiling-wrapper{display:none !important;}
    .rrecom-btn-parent{display:none;}

    
    */
}

function baiduInit() {
    console.log(document.title);

    // // 搜索按钮
    let searchButton = document.getElementById('su');
    if (searchButton != null && searchButton != undefined) {
        searchButton.value = 'Google'
    }

    // let pageText = '<div style="color: #66ccff; height: 14%">百度没用，没用也得用</div>'

    let headWrapper = document.getElementById('s_fm')
    if (headWrapper != null) {
        let pageDiv = document.createElement('div');
        pageDiv.setAttribute('style', 'color: red; font-size:20px;');
        // pageDiv.innerHTML = 'Dark River'
        pageDiv.innerHTML = '热烈庆祝中华人民共和国成立73周年'
        headWrapper.appendChild(pageDiv)
    }
}