let page = window.location.href

let myChinaText = "富强、民主、文明、和谐  自由、平等、公正、法治  爱国、敬业、诚信、友善"

document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);

function fireContentLoadedEvent () {
    console.log ("DOMContentLoaded ！！！" + myChinaText);
    ZhiHu.init();
}

$(document).ready(function () {
    setTimeout(() => {
        $('header').remove();

        // 详情页侧边栏
        let first = $('.Topstory:first-child');
        if (first != null) {
            let childrenList = first.children()
            if (childrenList.length > 1) {
                childrenList[0].remove();
            }
        }

        // 首页侧边栏
        let container = $('.Topstory-container');
        if (container != null) {
            let childrenChildren = container.children();
            if (childrenChildren.length > 1) {
                childrenChildren[1].remove();
            }
        }
    }, 800)
})

var ZhiHu = {
    init: function () {
        console.log(document.title + ' ———— ' + '刘加振');

        if (page.includes('question') || page.includes('answer')) {
            // 详情页面

            if(!document.getElementById('my_custom_detail_css')) {
                let temp = document.createElement('style');
                temp.id = 'question';
                (document.head || document.body).appendChild(temp);
                let css = `
                /* 回答列表，居中 */
                .Question-main{margin:10px 10px 10px 400px !important;}`
                temp.innerHTML = css;
                console.log('已注入自定义CSS，详情页！');
            }

            setInterval(function() {
                ZhiHu.buttonHidden()
                ZhiHu.authorInfoHidden()
            }, 2000)
        } else {
            // 首页

            // 阅读全文
            // rgb(229 125 125 / 48%)
            if(!document.getElementById('my_custom_css')) {
                let temp = document.createElement('style');
                temp.id = 'my_custom_css';
                (document.head || document.body).appendChild(temp);
                let css = `
                /* 阅读全文 */
                .ContentItem-more{color:rgb(229 125 125 / 20%) !important;}`;
                temp.innerHTML = css;
                console.log('已注入自定义CSS！');
            }
            

            if (page.includes('hot')) {
                ZhiHu.itemHotHidden()
            } else {
                setInterval(function() {
                    ZhiHu.buttonHidden()
                }, 2000)
            }
        }
    },
    // 按钮栏隐藏
    buttonHidden: function () {
        // if(!document.getElementById('my_custom_button_css')) {
        //     let temp = document.createElement('style');
        //     temp.id = 'my_custom_button_css';
        //     (document.head || document.body).appendChild(temp);
        //     let css = `
        //     /* 点赞按钮 */
        //     .VoteButton{display:none !important;}
        //     /* 分享按钮 */
        //     .ShareMenu{display:none !important;}
        //     /* 按钮栏 */
        //     .ContentItem-action{color:rgb(40 41 35 / 2%) !important;}`
        //     temp.innerHTML = css;
        //     console.log('已注入自定义CSS，隐藏按钮！');
        // }


        let buttonCardList = $('.ContentItem-actions');

        for (var i = 0; i < buttonCardList.length; i++) {
            let buttonList = buttonCardList[i];
            let buttonListChildren = buttonList.children;

            buttonListChildren[0].style.display = "none" // 点赞
            // buttonListChildren[1].style.display = "none" // 评论
            buttonListChildren[2].style.display = "none" // 分享
            buttonListChildren[3].style.display = "none" // 收藏
            buttonListChildren[4].style.display = "none" // 喜欢
            buttonListChildren[5].style.display = "none" // 更多

            // if (buttonListChildren.length > 2) {
            //     console.log('按钮列表' + i)
            //     buttonListChildren[5].remove() // 更多
            //     buttonListChildren[4].remove() // 喜欢
            //     buttonListChildren[3].remove() // 收藏
            //     buttonListChildren[2].remove() // 分享
            //     buttonListChildren[0].remove() // 点赞
            //    // buttonListChildren[1].remove() // 评论
            // }
        }
    },
    // 答主信息隐藏
    authorInfoHidden: function () {
        // 关注按钮
        let followBtnList = document.querySelectorAll('.FollowButton');
        for (var i = 0; i < followBtnList.length; i++) {
            if (followBtnList[i].innerHTML != myChinaText) {
                followBtnList[i].style.color = "red";
                followBtnList[i].disable = "true";
                followBtnList[i].innerHTML = myChinaText;
            }
        }
        // 作者信息
        let authorInfoList = document.querySelectorAll('.AuthorInfo');
        for (var i = 0; i < authorInfoList.length; i++) {
            let authorInfo = authorInfoList[i];
            let authorInfoChildren = authorInfo.children;
            authorInfoChildren[0].style.display = "none"
        }
    },
    // 热榜信息优化
    itemHotHidden: function () {
        let hotItemList = document.querySelectorAll('.HotItem');
        if (hotItemList.length > 0) {
            for (var i = 0; i < hotItemList.length; i++) {
                // 热榜单条信息，整个热榜
                let hotItem = hotItemList[i];
                let hotItemChildren = hotItem.children;
                if (hotItemChildren.length > 1) {
                    if (hotItemChildren[1] != null && hotItemChildren[1] != undefined) {
                        // 热榜内容
                        let hotItemContent = hotItemChildren[1];
                        // hotItemContent.style.color = 'green'
                        hotItemContent.style.background = '#eef0f4'
                        // hotItemContent.style.background = '#66ccff'

                        let hotItemContentChildren = hotItemContent.children;
                        if (hotItemContentChildren.length > 1) {
                            // hotItemContentChildren[0].style.color = 'green'
                            hotItemContentChildren[1].style.display = "none";
                        }
                    }

                    if (hotItemChildren[2] != null) {
                        hotItemChildren[2].remove(); // 热榜图片
                    }
                    if (hotItemChildren[0] != null) {
                        hotItemChildren[0].remove(); // 热榜编号
                    }

                    hotItem.style.padding = "30px"
                }
            }
        }
    }
}