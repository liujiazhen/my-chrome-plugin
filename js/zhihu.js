let page = window.location.href

let myChinaText = "富强、民主、文明、和谐  自由、平等、公正、法治  爱国、敬业、诚信、友善"

document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);

function fireContentLoadedEvent () {
    console.log ("DOMContentLoaded ！！！" + myChinaText);
    ZhiHu.init();
}


$(document).ready(function () {
    setTimeout(() => {
        ZhiHu.sidebarHidden();
    }, 1200)
})

var ZhiHu = {
    init: function () {
        console.log(document.title + ' ———— ' + '刘加振');

        if (page.includes('question') || page.includes('answer')) {
            // 详情页面
            setInterval(function() {
                ZhiHu.buttonHidden()
                ZhiHu.authorInfoHidden()
            }, 1000)
        } else {
            // 首页

            if (page.includes('hot')) {
                ZhiHu.itemHotHidden()
            } else {
                setInterval(function() {
                    ZhiHu.buttonHidden()
                }, 1000)
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
            
            // 方法1：修改样式
            // try {
            //     if (buttonListChildren != null && buttonListChildren != undefined && buttonListChildren.length > 5) {
            //         buttonListChildren[0].style.display = "none" // 点赞
            //         // buttonListChildren[1].style.display = "none" // 评论
            //         buttonListChildren[2].style.display = "none" // 分享
            //         buttonListChildren[3].style.display = "none" // 收藏
            //         buttonListChildren[4].style.display = "none" // 喜欢
            //         if (buttonListChildren[5] != null && buttonListChildren[5] != undefined) {
            //             buttonListChildren[5].style.display = "none" // 更多
            //         }
            //     }
            // } catch (e) {
            //     console.error(e)
            // }

            // 方法2：直接删除
            if (buttonListChildren.length > 3) {
                console.log('按钮列表' + i)
                if (buttonListChildren[5]) {
                    buttonListChildren[5].remove() // 更多
                }
                if (buttonListChildren[4]) {
                    buttonListChildren[4].remove() // 喜欢
                }
                if (buttonListChildren[3]) {
                    buttonListChildren[3].remove() // 收藏
                }
                if (buttonListChildren[2]) {
                    buttonListChildren[2].remove() // 分享
                }
                // if (buttonListChildren[1]) {
                //     buttonListChildren[1].remove() // 评论
                // }
                if (buttonListChildren[0]) {
                    buttonListChildren[0].remove() // 点赞
                }
            }
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
        /*&
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
        */
    },
    sidebarHidden: function() {
        $('header').remove();

        // 详情页侧边栏
        // let first = $('.Question-main');
        // if (first != null) {
        //     let childrenList = first.children()
        //     if (childrenList.length > 1) {
        //         childrenList[1].remove();
        //     }
        // }

        // 首页侧边栏
        let container = $('.Topstory-container');
        if (container != null) {
            let childrenChildren = container.children();
            if (childrenChildren.length > 1) {
                childrenChildren[1].remove();
            }
        }

        let iconUrl = 'https://mat1.gtimg.com/www/icon/favicon2.ico'
        const changeFavicon = link => {
            let $favicon = document.querySelector('link[rel="shortcut icon"]');
            if ($favicon !== null) {
                $favicon.href = link;
            } else {
                $favicon = document.createElement("link");
                $favicon.rel = "icon";
                $favicon.href = link;
                document.head.appendChild($favicon);
            }
        };
        // 动态修改网站图标
        changeFavicon(iconUrl); 
    }
}