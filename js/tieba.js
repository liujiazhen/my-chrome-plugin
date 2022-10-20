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
    /* 移除贴吧上侧广告 */
    #plat_recom_carousel{display: none;border: medium double red; !important;}
    /* 搜索框 */
    .search_main_wrap{display:none !important;}
    /* 背景颜色 
    #head{background: #000000;}*/
    /* 帖子内，楼层广告 */
    div[id^="mediago-tb-pb-list-"]{display:none;border: medium double red; !important}
    /* 帖子内，左侧边广告 */
    div[ad-dom-img].clearfix{display:none;border: medium double red; !important}
    /* 帖子内，右侧边广告 */
    div[id^="aside-ad"]{display:none;border: medium double red; !important}
    /* 帖子列表，列表广告 */
    div[data-index]{display:none;border: medium double red; !important}
    div[id^="mediago-tb-frs-list-"]{display:none;border: medium double red; !important}
    /* 帖子列表，右侧广告 */
    div[id="pagelet_frs-aside/pagelet/aside_ad"]{display:none;border: medium double red; !important}
    /* 主页，右侧广告 */
    #lu-home-aside{display:none;border: medium double red; !important}
    `;
    temp.innerHTML = css;
    console.log('已注入自定义CSS！');
}

function baiduInit() {
    console.log(document.title);
}