/*斐波那契数列
 * 1,1,2,3,5,8,...,f(n-1)+f(n-2)
 */
function fibonacci(n)
{
	if(n===1||n===2)
	{
		return 1;
	}
	else
	{
		return fibonacci(n-1)+fibonacci(n-2)
	}
}
/*累加*/
function add(n)
{
	if(n===1)
	{
		return 1;
	}
	else
	{
		return n+add(n-1);
	}
}
/*作用域*/
//例一
var num=10;
fun();
function fun()
{
	console.log(num);//输出undefined
	var num=20;
}
/*执行console.log(num)时，在当前作用域中查找是否存在num变量
 * 查找到var num=20;存在其后面，因此将num声明提前，但不赋值
 * 因此输出undefined
 */

//例二
var a=18;
function hh()
{
	var b=9;
	console.log(a);//输出undefined
	console.log(b);//输出9
	var a=10;
}

//例三
ee();
console.log(z);//9
console.log(y);//9
console.log(x);//报错
function ee()
{
	var x=y=z=9;
	/*var x=9;
	 * y=9;
	 * z=9;
	 */
	console.log(x);//9
	console.log(y);//9
	console.log(z);//9
}
