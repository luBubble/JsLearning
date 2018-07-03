var btnMove=document.getElementById('btn-move');
var timer=null;
btnMove.onclick=function()
{
	clearInterval(timer);//保证只有一个定时器
	var square=document.getElementById('square');
	timer=setInterval(function(){
		if(square.offsetLeft>=400)
		{
			clearInterval(timer);//从下一次暂停，本次还是会执行
		}
		else
		{
			square.style.left=square.offsetLeft+2+'px';
		}
	},30);
}
/*运动框架 注意点
 * 1.保证只有一个定时器
 * 2.将停止与运动分开（if...else...）
 */