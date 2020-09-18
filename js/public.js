/*
*检索某个字符串指定字符出现次数 
*使用面向对象编程方式
* @param：o  指定的字符
* */
String.prototype.stringIndexOf = function (o){
	var n = 0,m = -1;
	for(var i=0;i<this.length;i++){
		if(this.indexOf(o,m+1)>-1){
			m = this.indexOf(o,m+1);
			n++;
		}
	}
	return n;
};
/*
*把字符串转换成由Unicode码组成的数组
* */
String.prototype.toCode = function () {
	var sum = [];
	for(var i = 0; i < this.length; i++){
		sum.push(this.charCodeAt(i))
	}
	return sum;
};

/*
*把由Unicode码组成的转换成字符串
* */
Array.prototype.toStringCode = function () {
	var strSum = '';
	for(var j = 0; j < this.length; j++){
		strSum += String.fromCharCode(this[j]);
	}
	return strSum;
};

/*
 * 给数字加，例如1234567 ---- 1，234，567
 * @param:num传入的数字
 * */
function addMark(num){
	var str = num.toString();
	var newArr = [];
	var n = 0;
	var len = parseInt(str.length/3);
	for(var i = 0; i < len; i++){
		n -= 3;
		newArr.unshift(str.substr(n,3));
	}
	if(str.length%3 !== 0 ){
		newArr.unshift(str.substr(0,str.length%3));
	}
	return newArr.join();
}

/*
* 利用html5新增加的快速选择器进行选择器的封装
* @param: ele  css选择器
* 		  boo 判断是否选中一个还是所有元素
* 			    true 只选中一个
* 				false 选中所有元素
* */
/*function $(ele,boo) {
	return boo ? document.querySelector(ele) : document.querySelectorAll(ele);
}*/

/*
* 检测任意对象的数据类型
* @param：obj  任意对象
*返回值为该对象的数据类型
* */
function typeObj(obj) {
	var type = '';
	type = typeof obj !== 'object' ? typeof obj :
		(obj instanceof Array) ? 'Array' :
			(obj instanceof Object) ? 'Object' :
				obj === null ? 'null' : '';
	return type;
}

/*
 * 判断用户输入的是否闰年
 * @param: a 年份
 * */
function isRunNian(a){
	if(a%4 === 0 && a%100 !== 0){
		return '是闰年';
	}else{
		return '不是闰年';
	}
}

/*
 * 表单验证开始
* 验证用户输入的是否是邮箱
* @param: val 需要验证的输入框
* */
function isEmail(val) {
	var eIsEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	return eIsEmail.test(val);
}
/*密码*/
function isPass(val) {
	var eIsPass = /^[a-zA-Z]\w{5,17}$/;
	return eIsPass.test(val);
}
/*强密码*/
function isPassPlus(val) {
	var eIsPassPlus = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;
	return eIsPassPlus.test(val);
}
/*身份证号*/
function isId(val) {
	var eIsId = /^\d{15}|\d{18}$/;
	return eIsId.test(val);
}
/*手机号*/
function isTel(val) {
	var eIsTel = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	return eIsTel.test(val);
}
/*时间格式*/
function isTime(val) {
	var eIsTime = /^\d{4}-\d{1,2}-\d{1,2}/;
	return eIsTime.test(val);
}
/*是否中文*/
function isChinese(val) {
	var eIsChinese = /^[\u4e00-\u9fa5]{0,}$/;
	return eIsChinese.test(val);
}
/*是否数字*/
function isNum(val) {
	var eIsNum = /^[0-9]*$/;
	return eIsNum.test(val);
}
/*是否邮政编码*/
function isPostalCode(val) {
	var eIsPostalCode = /[1-9]\d{5}(?!\d)/;
	return eIsPostalCode.test(val);
}