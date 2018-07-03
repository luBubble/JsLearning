/*1.可以读取函数内部的变量，让这些变量的值始终保持在内存中
 * 
 */
function test()
{
	var age=10;
	return function()
	{
		console.log(age);
	}//
}
//调用
var fun=test();//接收到一个函数
fun();//输出10

/*封闭作用域,解决变量重名问题，不污染全局作用域
 * (function(){...})();
 * ;(function(){...})();
 * -(function(){...})();
 */

(function(){
	var age=66;
	console.log(age);
})();
(function(){
	console.log(age);//报错，没有声明
})();

//优化
(function(){
	var a=document.getElementById('btn');
	var b=document.getElementById('btn');
	var c=document.getElementById('btn');
	...
})();//每次都会在window中查找document对象
(function(document){
	var a=document.getElementById('btn');
	var b=document.getElementById('btn');
	var c=document.getElementById('btn');
	...
})(document);//只在window中查找一次document对象