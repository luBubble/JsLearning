var numArray=[2,45,12,-7,5.6,-3.4,50,132];
//1.sort排序，默认升序，numArray被改变
//console.log(numArray);
//console.log(numArray.sort());
//console.log(numArray.sort(function(a,b){return a-b;}));//升序

///*2.slice,返回一个数组，numArray不改变
// * 1个参数a：返回数组从a索引开始的部分
// */
//console.log(numArray.slice(2));
//console.log(numArray.slice(1,5));//不包括5索引
//console.log(numArray.slice(1,-6));//负参数处理方式：numArray.length-3
//console.log(numArray.slice(9,10));

/*3.splice
 * 两个参数
 * 一个参数
 */
//var tempArray=numArray.splice(2,3);
//console.log(tempArray);//删除了[ 12, -7, 5.6 ]
//console.log(numArray);//[ 2, 45, -3.4, 50, 132 ]

//console.log(numArray.splice(3,4,'hhh','eee','emmmm'));//索引3开始的后4个
//console.log(numArray);

//console.log(numArray.splice(3));//索引3后的所有内容
//console.log(numArray);
//清空数组
//numArray.splice(0);

/*4.forEach
 * 循环
 */

//numArray.forEach(function(value,index){
//	console.log(index+":"+value)
//});


/*5.map()
 * 返回一个新数组
 */
//var tempArray=numArray.map(function(value,index){
//	return value*2;
//});
//console.log(tempArray);

/*6.filter()
 * 返回一个新数组
 */
//var tempArray=numArray.filter(function(value,index){
//	return index%2===0;
//});
//console.log(tempArray);

/*7.every
 * 每个都满足条件返回true
 */

/*8.some
 * 只要有一个满足条件就返回true
 */

//判断数组
//A instanceof B
var arr=[1,4,6,8];
console.log(arr instanceof Array);//true
console.log(arr instanceof Object);//true
console.log(typeof arr);//object,直接拿到根源
//Array.isArray(); 返回true/false
console.log(arr.constructor);//[Function: Array]