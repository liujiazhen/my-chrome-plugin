console.log(' ———— extension by 刘加振');

const page = window.location.href

const MY_CHINA_TEXT = "富强、民主、文明、和谐  自由、平等、公正、法治  爱国、敬业、诚信、友善"

const ICON_URL = 'https://mat1.gtimg.com/www/icon/favicon2.ico'

document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);

window.addEventListener('load', fireLoadEvent, false);

function fireContentLoadedEvent () {
    console.log ("DOMContentLoaded ！" + MY_CHINA_TEXT);
    ZhiHu.init();
}

function fireLoadEvent () {
    console.log ("load ！！！" + MY_CHINA_TEXT);
    ZhiHu.sidebarHidden()
    ZhiHu.changeFavicon(ICON_URL)
    $('header').remove();
}

const ZhiHu = {
    buttonSize: 0,
    isList: false,
    rightSideBar: null,
    init () {
        console.log('ZhiHu init ----------------------->')
        if (page.includes('question') || page.includes('answer')) {
            // 详情页面
            this.isList = false
            setInterval(function() {
                ZhiHu.buttonHidden()
                ZhiHu.authorInfoHidden()
            }, 1000)

            setTimeout(() => {
                ZhiHu.showQuestionDateTime()
            }, 2200)
        } else {
            // 首页
            this.isList = true
            if (page.includes('hot')) {
                ZhiHu.itemHotHidden()
            } else {
                setInterval(function() {
                    ZhiHu.buttonHidden()
                }, 1000)
            }
        }
        if (page.includes('zhuanlan')) {
            ZhiHu.zhuanlanOptimize()
        }
    },
    // 按钮栏隐藏
    buttonHidden() {
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

        for (let i = 0; i < buttonCardList.length; i++) {
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
                this.buttonSize++
                console.log('按钮列表' + this.buttonSize)
                if (buttonListChildren[5]) {
                    buttonListChildren[5].remove() // 更多
                }
                if (buttonListChildren[4]) {
                    buttonListChildren[4].remove() // 喜欢
                }
                if (buttonListChildren[3]) {
                    // buttonListChildren[3].remove() // 收藏
                }
                if (buttonListChildren[2]) {
                    buttonListChildren[2].remove() // 分享
                }
                if (buttonListChildren[1]) {
                //     buttonListChildren[1].remove() // 评论
                }
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
        for (let i = 0; i < followBtnList.length; i++) {
            if (followBtnList[i].innerHTML != MY_CHINA_TEXT) {
                followBtnList[i].style.color = "red";
                followBtnList[i].disable = "true";
                followBtnList[i].innerHTML = MY_CHINA_TEXT;
            }
        }
        // 作者信息
        let authorInfoList = document.querySelectorAll('.AuthorInfo');
        for (let i = 0; i < authorInfoList.length; i++) {
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
            for (let i = 0; i < hotItemList.length; i++) {
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

        // 详情页侧边栏
        let first = $('.Question-main');
        if (first != null) {
            let childrenList = first.children()
            if (childrenList.length > 1) {
                // childrenList[1].remove();
                let rightBar = childrenList[1]
                if (rightBar) {
                    console.log('详情页侧边栏 -->')
                    console.log(rightBar)
                    this.rightSideBar = rightBar
                    this.rightSideBar.id = 'rightSideBar'
                    ZhiHu.changeSidebarContent()
                }
            }
        }

        // 首页侧边栏
        let container = $('.Topstory-container');
        if (container != null) {
            let childrenChildren = container.children();
            if (childrenChildren.length > 1) {
                // 移除侧边栏
                // childrenChildren[1].remove();
                let rightBar = childrenChildren[1]
                console.log('列表页侧边栏 -->')
                console.log(rightBar)
                this.rightSideBar = rightBar
                this.rightSideBar.id = 'rightSideBar'
                ZhiHu.changeSidebarContent()
            }
        }

    },
    changeSidebarContent() {
        if (this.rightSideBar == null) {
            console.error('rightSideBar 为空')
            return
        }
        this.rightSideBar.style = `
        width:700px;
        height: 900px;
        max-width: 700px;
        position: fixed;
        left: 750px;
        display: flex;
        flex-direction: column;
        top: 50px;
        overflow: scroll;
        `
        this.rightSideBar.innerHTML = ''

        let myPre = document.createElement('pre')
        myPre.style = 'overflow: scroll; width: 100%; height: 100%'
        myPre.innerHTML = `
            public String call0003(Request0002Model paramModel) throws Exception {
                if (paramModel == null) {
                    throw new RuntimeException("参数为空");
                }
                String serialNo = RandomUtils.getRandomNumString(32);
                String isoDate = DateTimeFormatter.ISO_DATE.format(LocalDateTime.now());

                JSONObject jsonObject = new JSONObject();
                JSONObject reqPkgHead = new JSONObject();
                JSONObject pkgBody = new JSONObject();

                reqPkgHead.put("version", VERSION);
                reqPkgHead.put("appNo", APP_NO);
                reqPkgHead.put("reqTime", isoDate);
                reqPkgHead.put("serialNo", serialNo);
                reqPkgHead.put("bsnCode", "0003");
                reqPkgHead.put("userName", "ssf");
                reqPkgHead.put("busiOrg", "ssf");


                pkgBody.put("custName", paramModel.getCustName());

                jsonObject.put("reqPkgHead", reqPkgHead);
                jsonObject.put("pkgBody", pkgBody);


                httpService.call(APP_NO, jsonObject.toJSONString());
                return null;
            }

            public String call0003(Request0002Model paramModel) throws Exception {
                if (paramModel == null) {
                    throw new RuntimeException("参数为空");
                }
                String serialNo = RandomUtils.getRandomNumString(32);
                String isoDate = DateTimeFormatter.ISO_DATE.format(LocalDateTime.now());

                JSONObject jsonObject = new JSONObject();
                JSONObject reqPkgHead = new JSONObject();
                JSONObject pkgBody = new JSONObject();

                reqPkgHead.put("version", VERSION);
                reqPkgHead.put("appNo", APP_NO);
                reqPkgHead.put("reqTime", isoDate);
                reqPkgHead.put("serialNo", serialNo);
                reqPkgHead.put("bsnCode", "0003");
                reqPkgHead.put("userName", "ssf");
                reqPkgHead.put("busiOrg", "ssf");


                pkgBody.put("custName", paramModel.getCustName());

                jsonObject.put("reqPkgHead", reqPkgHead);
                jsonObject.put("pkgBody", pkgBody);


                httpService.call(APP_NO, jsonObject.toJSONString());
                return null;
            }
        `
        this.rightSideBar.appendChild(myPre)
    },
    // 修改网站图标
    changeFavicon(ICON_URL) {
        if (!ICON_URL) {
            return
        }
        let $favicon = document.querySelector('link[rel="shortcut icon"]');
        if ($favicon !== null) {
            $favicon.href = ICON_URL;
        } else {
            $favicon = document.createElement("link");
            $favicon.rel = "icon";
            $favicon.href = ICON_URL;
            document.head.appendChild($favicon);
        }
    },
    zhuanlanOptimize: function (argument) {
        if (!document.getElementById('my_custom_zhuanlan_css')) {
            let temp = document.createElement('style');
            temp.id = 'my_custom_zhuanlan_css';
            (document.head || document.body).appendChild(temp);
            let css = 
            `/* 头部 */
            .ColumnPageHeader-Wrapper{display:none !important;}`
            temp.innerHTML = css;
            console.log('专栏页面已注入自定义CSS');
        }
    },
    showQuestionDateTime: function (argument) {
        let p_css = "<p style='color:gray'>";
        let question = $('.QuestionPage');
        let dateModified = question.find('meta[itemprop="dateModified"]').attr('content');
        let dateCreated = question.find('meta[itemprop="dateCreated"]').attr('content');
        let h1 = question.find('h1');

        h1.after($(p_css).text(`创建时间: ${ZhiHu.formatDate(dateCreated)} 　　　　 修改时间: ${ZhiHu.formatDate(dateModified)}`));
        // 问题回答时间
        // $('.List-item').map(function() {
        //     let answewr = $(this);
        //     console.log(answewr);
        //     let dateModified = answewr.find('meta[itemprop="dateModified"]').attr('content');
        //     let dateCreated = answewr.find('meta[itemprop="dateCreated"]').attr('content');
        //     answewr.prepend($(p_css).text(`创建时间: ${ZhiHu.formatDate(dateCreated)} 　　　　 修改时间: ${ZhiHu.formatDate(dateModified)}`));
        // })
    },
    formatDate: function (inputDate) {
        if (!inputDate) {
            return '';
        }
        //console.log('inputDate:' + inputDate);
        let timezone = 8; //目标时区时间，东八区
        let offset_GMT = new Date().getTimezoneOffset(); // 本地时间和格林威治的时间差，单位为分钟
        let nowDate = new Date(inputDate).getTime(); // 本地时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数
        //console.log('nowDate:' + nowDate);
        let targetDate = new Date(nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000);
        //console.log('res:' + targetDate);
        let year = targetDate.getFullYear();
        let month = targetDate.getMonth() + 1;
        let data = targetDate.getDate();
        let time = year + '年' + month + '月' + data + '日';
        return time;
    }
}

const ZhiHuApi = {
    hotApi: async function (argument) {
        let promise = new Promise((resolve, reject) => {
            $.ajax({
                url: 'https://api.zhihu.com/topstory/hot-list',
                type: 'get',
                dataType: "json",
                success: (res) => {
                    resolve(res)
                }, error: (error) => {
                    reject(error)
                }
            });
        })
        return await promise
    },

    hotApiDecode: async function () {
        const hotApiResult = await this.hotApi()
        let hotData = hotApiResult.data
        for (let i = 0; i < hotData.length; i++) {
            let data = hotData[i]
            let target = data.target
            console.log(target.title)
        }
    },
}

document.addEventListener('readystatechange', readystatechangeEvent, false)
function readystatechangeEvent(e) {
    console.log(e.type + ' : ' + document.readyState);
}