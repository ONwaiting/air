window.onload = function () {

    var elms = {}, //元素命名空间
        timer = null, //定时器
        timer3D = null,
        init = null, //初始化函数
        move = null, //动画函数
        headFn = null, //头部函数
        sliderFn = null, //轮播函数
        scrollFn = null, //滚轮函数
        conFn = null, //内容函数
        boomFn = null, //图片炸裂函数
        peopleFn = null, //第五屏人物气泡函数
        rdFn = null, //右方原点函数
        aninFn = null, //动画函数
        start = null, //开机动画
        main = null; //主函数
    var arr = [{
        inFn: function () {
            elms.up.style.transform = 'translateY(0)';
            elms.up.style.opacity = 1;
            elms.down.style.transform = 'translateY(0)';
            elms.down.style.opacity = 1;
        },
        outFn: function () {
            elms.up = document.querySelector('.hom_main');
            elms.down = document.querySelector('.dot');
            elms.up.style.transform = 'translateY(-150px)';
            elms.up.style.opacity = 0;
            elms.down.style.transform = 'translateY(150px)';
            elms.down.style.opacity = 0;
        }
    }, {
        inFn: function () {
            elms.plane1.style.transform = 'translate(0,0)';
            elms.plane2.style.transform = 'translate(0,0)';
            elms.plane3.style.transform = 'translate(0,0)';
            elms.plane1.style.opacity = '1';
            elms.plane2.style.opacity = '1';
            elms.plane3.style.opacity = '1';
        },
        outFn: function () {
            elms.plane1 = document.querySelector('.plane1');
            elms.plane2 = document.querySelector('.plane2');
            elms.plane3 = document.querySelector('.plane3');
            elms.plane1.style.transform = 'translate(-150px,-150px)';
            elms.plane2.style.transform = 'translate(-150px,150px)';
            elms.plane3.style.transform = 'translate(150px,-150px)';
            elms.plane1.style.opacity = '0';
            elms.plane2.style.opacity = '0';
            elms.plane3.style.opacity = '0';
        }
    }, {
        inFn: function () {
            elms.pen1.style.transform = 'translate(0,0)';
            elms.pen2.style.transform = 'translate(0,0)';
            elms.pen3.style.transform = 'translate(0,0)';
            elms.pen1.style.opacity = '1';
            elms.pen2.style.opacity = '1';
            elms.pen3.style.opacity = '1';
        },
        outFn: function () {
            elms.pen1 = document.querySelector(".pen1");
            elms.pen2 = document.querySelector(".pen2");
            elms.pen3 = document.querySelector(".pen3");
            elms.pen1.style.transform = 'translate(0,-150px)';
            elms.pen2.style.transform = 'translate(0,150px)';
            elms.pen3.style.transform = 'translate(0,150px)';
            elms.pen1.style.opacity = '0';
            elms.pen2.style.opacity = '0';
            elms.pen3.style.opacity = '0';
        }
    }, {
        inFn: function () {
            elms.imgLi[0].style.transform = 'rotate(0deg)';
            elms.imgLi[1].style.transform = 'rotate(0deg)';
        },
        outFn: function () {
            elms.imgLi[0].style.transform = 'rotate(45deg)';
            elms.imgLi[1].style.transform = 'rotate(-45deg)';
        }
    }, {
        inFn: function () {
            elms.leftT.style.transform = 'translate(0,0)';
            elms.rightT.style.transform = 'translate(0,0)';
        },
        outFn: function () {
            elms.leftT = document.querySelector('.tea_hea');
            elms.rightT = document.querySelector('.tea_text');
            elms.leftT.style.transform = 'translate(-150px,0)';
            elms.rightT.style.transform = 'translate(150px,0)';
        }
    }];
    //背景动画
    aninFn = function () {
        for (var i = 0; i < arr.length; i++) {
            arr[i].outFn();
        }
        setTimeout(function () {
            arr[0].inFn();
        }, 1500)
    }
    //开机动画
    start = function () {
        console.log(1);
        var timeMid = null;
        var timeSide = null;
        var i=0;
        elms.mid = document.querySelector('.page>span');
        elms.pageUp=document.querySelector('.pageUp');
        elms.pageDown=document.querySelector('.pageDown');
        elms.page=document.querySelector('.page');
        timeMid = setInterval(function () {
            elms.mid.style.width = elms.mid.offsetWidth + 6 + 'px';
            if (elms.mid.offsetWidth >= document.documentElement.clientWidth) {
                elms.mid.remove();
                clearInterval(timeMid);
                timeSide=setInterval(function(){
                    i+=3;
                    elms.pageUp.style.height=document.documentElement.clientHeight/2-i+'px';
                    elms.pageDown.style.height=document.documentElement.clientHeight/2-i+'px';
                    
                    if(elms.pageUp.offsetHeight<=10){
                        clearInterval(timeSide);
                        
                        elms.page.style.display='none';
                        elms.page.remove();
                        sliderFn();
                    }
                },1);
            }
        }, 1);
    }
    //初始化函数     
    init = function () {
        elms.nowHeaLi = 0; //头部位置
        elms.nowPrev = 0; //上一张
        elms.head = document.querySelector('#head')
        elms.headLiList = document.querySelectorAll('#head > .hea_con > .hea_nav > ul > li');
        elms.headActive = elms.headLiList[0].querySelector('.up');
        elms.headLiUp = document.querySelectorAll('.up');
        elms.headSanjiao = document.querySelector('.sanjiao');
        // content
        elms.content = document.querySelector('#content');
        elms.conLi = document.querySelectorAll('#content>.list>li');
        elms.conUl = document.querySelector('#content>.list');
        //banner
        elms.heaDiv=document.querySelector('.Home>div');
        elms.banLi = document.querySelectorAll('.hom_main li');
        elms.banDot = document.querySelectorAll('.dot>li');
        //第四屏图片效果      
        elms.imgLi = document.querySelectorAll('.ab_pto');
        elms.imgListUp = elms.imgLi[0].querySelectorAll('.ab_pto>ul>li>img');
        elms.imgListDown = elms.imgLi[1].querySelectorAll('.ab_pto>ul>li>img');
        //第五屏人物效果
        elms.peoLi = document.querySelectorAll('.people>ul>li');
        elms.peoUl = document.querySelector('.people>ul');
        elms.peoDiv = document.querySelector('.people');
        //右边原点
        elms.rightDot = document.querySelectorAll('.dotRight>ul>li');
    };
    //头部函数

    headFn = function () {
        for (var i = 0; i < elms.headLiList.length; i++) {
            elms.headLiList[i].index = i;
            elms.headLiList[i].onclick = function () {
                elms.nowPrev = elms.nowHeaLi;
                elms.nowHeaLi = this.index;
                move(this.index);
            }
        }
        elms.headActive.style.width = "100%";
        elms.headSanjiao.style.left = elms.headLiList[0].offsetLeft + elms.headLiList[0].offsetWidth / 2 - elms.headSanjiao.offsetWidth / 2 + 'px';

    };
    //主要动画函数

    move = function (index) {
        // init();
        for (var i = 0; i < elms.headLiUp.length; i++) {
            elms.headLiUp[i].style.width = '';
        }
        elms.headLiUp[index].style.width = "100%";
        elms.headSanjiao.style.left = elms.headLiList[index].offsetLeft + elms.headLiList[index].offsetWidth / 2 - elms.headSanjiao.offsetWidth / 2 + 'px';
        elms.conUl.style.top = -elms.conLi[0].offsetHeight * index + 'px';
        //右边原点
        for (var j = 0; j < elms.rightDot.length; j++) {
            elms.rightDot[j].classList.remove('active');
        }
        elms.rightDot[index].classList.add('active');
        //出入场动画
        if (arr[index] && typeof arr[index]['inFn'] === "function") {
            arr[index].inFn();
        }
        if (arr[elms.nowPrev] && typeof arr[index]['inFn'] === "function") {
            arr[elms.nowPrev].outFn();
        }

    }
    // 分辨率的调整适应
    window.onresize = function () {
        conFn();
        elms.conUl.style.top = -elms.conLi[0].offsetHeight * elms.nowHeaLi + 'px';
        elms.headSanjiao.style.left = elms.headLiList[elms.nowHeaLi].offsetLeft + elms.headLiList[elms.nowHeaLi].offsetWidth / 2 - elms.headSanjiao.offsetWidth / 2 + 'px';
    }
    //四屏函数
    conFn = function () {
        elms.content.style.height = document.documentElement.clientHeight - elms.head.offsetHeight + 'px';
        for (var i = 0; i < elms.conLi.length; i++) {
            elms.conLi[i].style.height = document.documentElement.clientHeight - elms.head.offsetHeight + 'px';
        }
    }
    //滚轮函数
    scrollFn = function () {
        //滚轮事件兼容处理
        if (elms.content.addEventListener) {
            elms.content.addEventListener('DOMMouseScroll', function (e) {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    fn(e);
                }, 200);
            });
        }
        elms.content.onmousewheel = function (e) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn(e);
            }, 200);
        };
        // 滚轮事件
        function fn(e) {
            e = e || event;
            var dir = '';
            if (e.wheelDelta) {
                dir = e.wheelDelta > 0 ? 'up' : 'down';
            } else if (e.datail) {
                dir = e.datail < 0 ? 'up' : 'down'
            }
            elms.nowPrev = elms.nowHeaLi;
            switch (dir) {
                case 'up':
                    if (elms.nowHeaLi > 0) {
                        elms.nowHeaLi--;
                        move(elms.nowHeaLi);
                    }
                    break;
                case 'down':
                    if (elms.nowHeaLi < 4) {
                        elms.nowHeaLi++;
                        move(elms.nowHeaLi);
                    }
                    break;
            }
        }
    }
    //轮播函数    
    sliderFn = function () {
        // console.log(elms.banDot);
        var oldIndex = 0;
        var autoIndex = 0;

        function dotMove(that) {
            for (var i = 0; i < elms.banDot.length; i++) {
                elms.banDot[i].classList.remove('active');
            }
            that.classList.add('active');
        }
        //手动轮播
        for (var i = 0; i < elms.banDot.length; i++) {
            elms.banDot[i].index = i;
            elms.banDot[i].onclick = function () {
                dotMove(this);
                clearInterval(timer3D);
                if (oldIndex < this.index) {
                    elms.banLi[this.index].setAttribute('class', '');
                    elms.banLi[this.index].classList.add('rightShow');
                    elms.banLi[oldIndex].setAttribute('class', '');
                    elms.banLi[oldIndex].classList.add('leftHide');
                } else if (oldIndex > this.index) {
                    elms.banLi[this.index].setAttribute('class', '');
                    elms.banLi[this.index].classList.add('leftShow');
                    elms.banLi[oldIndex].setAttribute('class', '');
                    elms.banLi[oldIndex].classList.add('rightHide');
                }
                oldIndex = this.index;
                //autoIndex=this.index;
            }
        }
        //自动轮播
        timer3D = setInterval(function () {
            autoIndex++;
            if (autoIndex === elms.banLi.length) {
                autoIndex = 0;
            }
            dotMove(elms.banDot[autoIndex]);
            elms.banLi[autoIndex].setAttribute('class', '');
            elms.banLi[autoIndex].classList.add('rightShow');
            elms.banLi[oldIndex].setAttribute('class', '');
            elms.banLi[oldIndex].classList.add('leftHide');
            oldIndex = autoIndex;
        }, 2000);
        elms.heaDiv.onmouseenter=function(){
            clearInterval(timer3D);
        }
    }
    //图片炸裂函数
    boomFn = function () {
        var imgW = (elms.imgLi[0].clientWidth) / 2;
        var imgH = elms.imgLi[0].clientHeight / 2;
        for (var i = 0; i < elms.imgListUp.length; i++) {
            elms.imgListUp[i].style.left = -(i % 2) * imgW + 'px';
            elms.imgListUp[i].style.top = -Math.floor(i / 2) * imgH + 'px';
            elms.imgListDown[i].style.left = -(i % 2) * imgW + 'px';
            elms.imgListDown[i].style.top = -Math.floor(i / 2) * imgH + 'px';
        }
        var arrLeft = [0, -2, 1, -1];
        var arrTop = [1, 0, -1, -2];
        var arr0 = [0, -1, 0, -1]
        var arr1 = [0, 0, -1, -1]
        elms.imgLi[0].onmouseenter = function () {
            for (var i = 0; i < elms.imgListUp.length; i++) {
                elms.imgListUp[i].style.left = arrLeft[i] * imgW + 'px';
                elms.imgListUp[i].style.top = arrTop[i] * imgH + 'px';
            }
        }
        elms.imgLi[0].onmouseleave = function () {
            for (var i = 0; i < elms.imgListUp.length; i++) {
                elms.imgListUp[i].style.left = arr0[i] * imgW + 'px';
                elms.imgListUp[i].style.top = arr1[i] * imgH + 'px';
            }
        }
        elms.imgLi[1].onmouseenter = function () {
            for (var i = 0; i < elms.imgListUp.length; i++) {
                elms.imgListDown[i].style.left = arrLeft[i] * imgW + 'px';
                elms.imgListDown[i].style.top = arrTop[i] * imgH + 'px';
            }
        }
        elms.imgLi[1].onmouseleave = function () {
            for (var i = 0; i < elms.imgListUp.length; i++) {
                elms.imgListDown[i].style.left = arr0[i] * imgW + 'px';
                elms.imgListDown[i].style.top = arr1[i] * imgH + 'px';
            }
        }
    }
    //人物气泡函数
    peopleFn = function () {
        var cvs = null;
        var time1 = null;
        var time2 = null;
        for (var i = 0; i < elms.peoLi.length; i++) {
            elms.peoLi[i].index = i;
            elms.peoLi[i].onmouseenter = function () {
                for (var i = 0; i < elms.peoLi.length; i++) {
                    elms.peoLi[i].style.opacity = .3;
                }
                this.style.opacity = 1;
                addCvs();
                cvs.style.left = this.offsetLeft + 'px';
                posi = this.index;

            }
        }
        elms.peoUl.onmouseleave = function () {

            // elms.peoDiv.removeChild(cvs);
        }

        function addCvs() {
            if (!cvs) {
                cvs = document.createElement("canvas");
                cvs.width = elms.peoLi[0].offsetWidth;
                cvs.height = elms.peoLi[0].offsetHeight;
                cvs.onmouseleave = function () {
                    for (var i = 0; i < elms.peoLi.length; i++) {
                        elms.peoLi[i].style.opacity = 1;
                    }
                    this.remove();
                    cvs = null;
                    clearInterval(time1);
                    clearInterval(time2);
                }
                addBall();
                elms.peoDiv.appendChild(cvs);
            }
        }

        function addBall() {
            var cts = cvs.getContext('2d');
            //存放圆的位置
            var arr = [];
            //生成圆的位置
            time1 = setInterval(function () {
                var r = Math.random() * 8 + 2;
                var x = Math.random() * cvs.width;
                var y = cvs.height - r;
                var red = Math.round(Math.random() * 255);
                var green = Math.round(Math.random() * 255);
                var blue = Math.round(Math.random() * 255);
                var alp = 1;
                var deg = 0;
                var startX = x;
                var startY = y;
                var step = Math.random() * 6 + 10;
                arr.push({
                    x: x,
                    y: y,
                    r: r,
                    red: red,
                    green: green,
                    blue: blue,
                    alp: alp,
                    deg: deg,
                    startX: startX,
                    startY: startY,
                    step: step
                })
            }, 30);
            //画圆
            time2 = setInterval(function () {
                //擦除
                cts.clearRect(0, 0, cvs.width, cvs.height);
                //动画
                for (var j = 0; j < arr.length; j++) {

                    arr[j].deg += 10;
                    arr[j].x = arr[j].startX + Math.sin(arr[j].deg * Math.PI / 180) * arr[j].step * 2;
                    arr[j].y = arr[j].startY - (arr[j].deg * Math.PI / 180) * arr[j].step;
                    if (arr[j].y < 80) {
                        arr.splice(j, 1);
                    }
                }
                //绘制
                for (var i = 0; i < arr.length; i++) {
                    cts.save();
                    cts.beginPath();
                    cts.arc(arr[i].x, arr[i].y, arr[i].r, 0, Math.PI * 2);
                    cts.fillStyle = 'rgba(' + arr[i].red + ',' + arr[i].green + ',' + arr[i].blue + ',' + arr[i].alp + ')';
                    cts.fill();
                    cts.restore();
                }
            }, 10);
        }
    }
    //右方原点函数
    rdFn = function () {
        for (var j = 0; j < elms.rightDot.length; j++) {
            elms.rightDot[j].index = j;
            elms.rightDot[j].onclick = function () {
                elms.nowPrev = elms.nowHeaLi;
                elms.nowHeaLi = this.index;
                move(this.index);
            }
        }
    }
    main = function () {
        init();
        conFn();
        headFn();
        scrollFn();
        // sliderFn();
        boomFn();
        peopleFn();
        rdFn();
        aninFn();
        start();
    }
    main();
}