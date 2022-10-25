let pageUrl = window.location.href

document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);

function fireContentLoadedEvent () {
    console.log ("DOMContentLoaded ！！！");
    indexDiy();
}

function indexDiy() {
    // if(document.getElementById('my_custom_css')) {
    //     return
    // }
    // let temp = document.createElement('style');
    // temp.id = 'my_custom_css';
    // (document.head || document.body).appendChild(temp);
    // let css = `

    // `;
    // temp.innerHTML = css;
    // console.log('已注入自定义CSS！');
}