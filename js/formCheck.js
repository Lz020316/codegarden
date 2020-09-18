$(function () {
    var imgCode = {
        '0653':'0653',
        '3457':'3457',
        '3819':'3819',
        '8562':'8562'
    };
    //图片名称
    var imgCodeArr = ['0653','3457','3819','8562'];

    var randomCode = imgCodeArr[Math.floor(Math.random()*imgCodeArr.length)];
    var html = '<img alt="" src="../code/'+randomCode+'.jpg">';
    function iCode(){
        randomCode = imgCodeArr[Math.floor(Math.random()*imgCodeArr.length)];
        html = '<img alt="" src="../code/'+randomCode+'.jpg">';
        $('#v_container,#findV_container,#registerV_container').html(html);
    }
    $('#v_container,#findV_container,#registerV_container').click(function(){
        iCode();
    }).html(html);


    /*
    * getCheckTel
    * findGetCheckTel
    * registerGetCheckTel
    *
    * 电话号码输入框
    * usertel
    * findUsertel
    * registerTel
    *
    *
    * 图形验证码输入框
    * checkImg
    * findCheckImg
    * registerCheckImg
    * */
    checkCode('getCheckTel' , 'usertel' , 'checkImg');
    checkCode('findGetCheckTel' , 'findUsertel' , 'findCheckImg');
    checkCode('registerGetCheckTel' , 'registerTel' , 'registerCheckImg');
    function checkCode(ele , tel , img) {
        $("#" + ele).click(function () {
            var sTel = $('#' + tel).val();
            //判断手机号码输入是否正确
            if (!isTel(sTel)){
                $("#" + ele).parent().siblings('.input-group-tel').addClass('has-error');
                return false;
            }
            $('.input-group-tel').removeClass('has-error');
            //设置按钮状态
            var btn = $("#" + ele).button('loading');
            //获取图片验证码输入框内容，判断是否一致
            var checkImg = $('#' + img);
            if(checkImg.val() === imgCode[randomCode]){
                console.log(true);
                iCode();
                checkImg.parent().removeClass('has-error');
                var num = 60;
                var time=setInterval(function(){
                    num--;
                    if(num === 0){
                        btn.button('reset');
                        clearInterval(time);
                        return false;
                    }
                    btn.text(num+'s后再次发送')
                },1000);
            }else{
                console.log(false);
                iCode();
                checkImg.parent().addClass('has-error');
                btn.button('reset');
                return false;
            }
        });
    }
    $('#registerForm').submit(function () {
        if ($('#registerUser').val() === ''){
            alert('请输入账户名');
            return false;
        }else if($('#registerPass').val() === '' || $('#registerPass').val() !== $('#registerPassAgain').val() || $('#registerPassAgain').val() === ''){
            alert('请输入密码或您两次输入的密码不一致');
            return false;
        }else if(!isEmail($('#registerEmail'))){
            alert('请输入正确的邮箱');
            return false;
        }
    });


    var index = 1;
    $('#nav').on('click','a',function(){
        index = $(this).parent().index();
        $(this).parent().parent().siblings().css('transform','translateX('+index * 100+'%)')
    });
    $('#jumpFind').click(function(){
        $('#land').modal('hide');
        $('#findPassword').modal('show');
    });
    $('#jumpRegister').click(function(){
        $('#land').modal('hide');
        $('#registerModal').modal('show');
    });
    $('#returnLand').click(function() {
        $('#land').modal('show');
        $('#registerModal').modal('hide');
    }).siblings('#closeRegister').click(function(){
        $('#registerModal').modal('hide');
    });
    $('#closeLand').click(function(){
        $('#land').modal('hide');
    });
    $('#closeFind').click(function(){
        $('#findPassword').modal('hide');
    });

    $('#telLand').submit(function () {
        var sTel = $('#usertel').val();
        if (!isTel(sTel)){
            alert('请输入正确的手机号码');
            return false;
        }else if($('#checkImg').val() === '' || $('#checkImg').val() !== imgCode[randomCode]){
            alert('图形验证码错误');
            return false;
        }else if($('#checkTel').val() === ''){
            alert('短信验证码错误');
            return false;
        }
    });

    $('#findLand').submit(function () {
        if (!isTel($('#findUsertel') || $('#findUsertel').val() === '')){
            alert('请输入正确的手机号');
            return false;
        }else if($('#findCheckImg').val() === '' || $('#findCheckImg').val() !== imgCode[randomCode]){
            alert('图形验证码错误');
            return false;
        }else if($('#findCheckTel') === ''){
            alert('短信验证码错误');
            return false;
        }else if($('#pass').val() === '' || $('#pass').val() !== $('#passCon').val()){
            alert('您两次输入的密码不一致');
            return false;
        }
    });

    var oUsername = $('#username');
    var oPassword = $('#password');
    $('#usernameLand').submit(function () {
        if(oUsername.val() === '' || oPassword.val() === ''){
            alert('请输入用户名或密码!');
            return false;
        }else{
            alert('用户名或密码错误!');
            return false;
        }
    });
    /*存储用户账号&&密码*/
    oUsername.change(function () {
        localStorage.setItem('username',oUsername.val());
        console.log(localStorage.getItem('username'));
    });
    oPassword.change(function(){
        localStorage.setItem('password',oPassword.val());
        console.log(localStorage.getItem('password'));
    });
    if (localStorage.getItem('text') || localStorage.getItem('password')){
        oUsername.val(localStorage.getItem('username'));
        oPassword.val(localStorage.getItem('password'));
    }
});