$(function () {
    var spans = $('.sign-method>span');
    spans.click(function () {
        $(this).siblings().css('background-color','').css('color','#000');
        $(this).css('background-color','#66ded4').css('color','#fff');
        var index = $(this).index();
        if (index == 1){
            $('#tel').css('display','none');
            $('#email').css('display','block');
            $('#tel-inp').css('display','none');
            $('#email-inp').css('display','block');
            $('#tel-code').css('display','none');
            $('.tel-code').css('display','none');
        }else{
            $('#tel').css('display','block');
            $('#email').css('display','none');
            $('#tel-inp').css('display','block');
            $('#email-inp').css('display','none');
            $('#tel-code').css('display','block');
            $('.tel-code').css('display','block');
        }
    })
})