let pageUrl = window.location.href

document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);

function fireContentLoadedEvent () {
    console.log ("DOMContentLoaded ！！！");
    indexDiy();
    baiduInit();
}

function indexDiy() {
    // 中上部区域
    if(document.getElementById('my_custom_css')) {
        return
    }
    let temp = document.createElement('style');
    temp.id = 'my_custom_css';
    (document.head || document.body).appendChild(temp);
    let css = `
    /* 移除百度右侧广告 */
    #s_top_wrap{background: #000000;}
    /* 覆盖整个屏幕的相关推荐 */
    .rrecom-btn-parent{display:none;}
    .c-color-t{color: #ffffff !important;}
    #bottom_layer{background: #000000;}
    #head{background: #000000;}`;
    temp.innerHTML = css;
    console.log('已注入自定义CSS！');
}

function baiduInit() {
    console.log(document.title);

    // // 搜索按钮
    let searchButton = document.getElementById('su');
    if (searchButton != null && searchButton != undefined) {
        searchButton.value = 'Google'
    }

    // let pageText = '<div style="color: #66ccff; height: 14%">百度没用，没用也得用</div>'

    let headWrapper = document.getElementById('head_wrapper')
    if (headWrapper != null) {
        let pageDiv = document.createElement('div');
        pageDiv.setAttribute('style', 'color: #66ccff; height: 14%');
        pageDiv.innerHTML = 'Dark River'

        headWrapper.appendChild(pageDiv)
    }   
}