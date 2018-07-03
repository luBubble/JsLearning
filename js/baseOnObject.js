/*面向对象(如java/c++/c#)特征：
 * 1.可以创建自定义类型，支持继承和多态
 * 2.封装（类的私有属性、提供get/set方法接口）、继承、多态(用父类声明一个子类的对象，运行时才能确定)
 * 3.万物皆对象
 * JavaScript是基于对象，不能很好的支持封装和继承
 */

/*对象与json的区别
 * json的变量名要用双引号，用于数据传递
 * for(key in obj){obj[key]}
 */

//字面量对象
var dog={
	name:"大狗",
	age:10,
	eat:function()
	{
		console.log("吃");
	}
}
var dog2={
	name:"大狗",
	age:10,
	eat:function()
	{
		console.log("吃");
	}
}
console.log(dog===dog2);//false
console.log(dog==dog2);//false

dog.hobby="吃屎";//dog对象自动新增一个属性
console.log(dog.sport);//undefined
//dog.run();//不会自动新增方法，报错

//构造函数 new Object() 大写开头
function Person()
{
	var obj=new Object();
	//构造属性
	obj.name=null;
	obj.age=null;
	//方法
	obj.study=function()
	{
		console.log(this.name+"在学习");
	}
	return obj;
}
//使用Person构造的每个对象都不一样

//对象的constructor、prototype属性
 var arr=new Array();
 //给声明的数组添加一个方法，仅在当前对象增加方法
 arr.eat=function ()
 {
 	console.log("数组会吃东西");
 }
 
 //这样之后，所有创建的数组对象都具有此方法
Array.prototype.eat=function ()
   {
   	console.log("数组会吃东西");
   }
/*简洁写法
Array.prototype={
	eat:function(){...},
	run:function(){...},
	...
}*/

//寻找对象的构造函数
console.log(arr.constructor);//Array
console.log(dog.constructor);//Object

var d=[1,2,3,4,5,5];
console.log(d.constructor);//Array,用于判断数组