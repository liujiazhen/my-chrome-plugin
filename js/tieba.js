console.log(' ———— extension by 刘加振');

const pageUrl = window.location.href

document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);

function fireContentLoadedEvent () {
    console.log ("DOMContentLoaded ！！！");
    indexDiy();
}

function indexDiy() {
    let branding_ads = document.getElementById('branding_ads')
    if (branding_ads) {
        branding_ads.remove()
        console.log('branding_ads 已被删除')
    }

    let mediago_tb_pb_list = document.querySelectorAll("[id^='mediago-tb-pb-list-']")
    for (let i = mediago_tb_pb_list.length - 1; i >= 0; i--) {
        let node = mediago_tb_pb_list[i];
        if (node) {
            node.remove();
            console.log('帖子内，楼层广告已删除' + i)
        }
    }
}