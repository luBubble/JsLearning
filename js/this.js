/*this
 * 1.this所在的函数在哪个对象中，this就代表这个对象
 * 2.谁调用this就代表谁
 * 3.构造函数中的this始终是new的当前对象
 */
console.log(this);//输出window
function fun()
{
	console.log(this);//输出window
}

//特殊情况
var btn=document.getElementById('btn');
btn.onclick=function()
{
	console.log(this);//this指btn元素
}
