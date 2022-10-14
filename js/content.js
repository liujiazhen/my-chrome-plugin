(function () {
	let page = window.location.href

    let myChinaText = "富强、民主、文明、和谐  自由、平等、公正、法治  爱国、敬业、诚信、友善"

    var ZhiHu = {
        init: function () {
        	console.log(document.title + ' ———— ' + '刘加振');

            // 头标签隐藏
            $('header').remove();

        	if (page.includes('question') || page.includes('answer')) {
                // 详情页面

                // 侧边栏
                document.querySelector('div.Question-sideColumn').style.display="none";

                setInterval(function() {
                    ZhiHu.buttonHidden()
                    ZhiHu.authorInfoHidden()
                }, 2000)

                // 回答列表，居中
                document.querySelector('div.Question-main').style.margin="10px 10px 10px 400px";
        	} else {
                // 首页

                let first = $('.Topstory:first-child');
                let childrenList = first.children()
                if (childrenList.length > 1) {
                    childrenList[0].remove();
                }
                
                // 侧边栏，右侧
                let container = $('.Topstory-container');
                let childrenChildren = container.children();
                childrenChildren[1].remove();

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
            let buttonCardList = $('.ContentItem-actions');

            for (var i = 0; i < buttonCardList.length; i++) {
                let buttonList = buttonCardList[i];
                let buttonListChildren = buttonList.children;

                // buttonListChildren[0].style.display = "none" // 点赞
                // // buttonListChildren[1].style.display = "none" // 评论
                // buttonListChildren[2].style.display = "none" // 分享
                // buttonListChildren[3].style.display = "none" // 收藏
                // buttonListChildren[4].style.display = "none" // 喜欢
                // buttonListChildren[5].style.display = "none" // 更多

                if (buttonListChildren.length > 2) {
                    console.log('按钮列表' + i)
                    buttonListChildren[5].remove() // 更多
                    buttonListChildren[4].remove() // 喜欢
                    buttonListChildren[3].remove() // 收藏
                    buttonListChildren[2].remove() // 分享
                    buttonListChildren[0].remove() // 点赞
                    // buttonListChildren[1].remove() // 评论
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
    ZhiHu.init();
})();


