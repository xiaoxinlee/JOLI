$(function(){
    var box = $('.box');
    var pics = $(".pics");
    var rChange = false;
    var lChange = false;
    var lis = pics.children();
    function toPlay(){
        if (toRight[0].flag == true) {
            return;
        }
        toRight[0].flag = true;
        var curLeft = pics.position().left;
        if (curLeft <= (1-lis.length) * lis.width()) {
            lis.first().css('left',lis.width()*lis.length);
            rChange = true; }
        pics.animate({
            left : curLeft - 1200
        },200,function(){
            toRight[0].flag = false;
            if (rChange == true) {
                lis.eq(0).css('left',0);
                pics.css('left',0);
                rChange = false;
            }
        })
    }
    var timer = setInterval(toPlay,5000);
    box.hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(toPlay,5000);
    })
    var toLeft = $('.left');
    toLeft[0].flag = false;
    toLeft.click(function(){
        if (this.flag == true) {
            return;
        }
        this.flag = true;
        var curLeft = pics.position().left;
        if (curLeft == 0) {
            lis.last().css('left',lis.width() * (-lis.length));
            lChange = true;
        }
        pics.animate({
            left : curLeft + 1200
        },200,function(){
            toLeft[0].flag = false;
            if (lChange == true) {
                lis.last().css('left',0); pics.css('left',(1-lis.length)*lis.width());
                lChange = false;
            }
        })
    })
    var toRight = $('.right');
    toRight[0].flag = false;
    toRight.click(toPlay);
})
