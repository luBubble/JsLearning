
function getTime()
{
	var today=new Date();//当前时间
	var todayDate=today.getFullYear()+addZero(today.getMonth())+addZero(today.getDay());//当前日期
	changeImg('date-img',todayDate);
	var todayTime=addZero(today.getHours())+addZero(today.getMinutes())+addZero(today.getSeconds());//现在的时间
	changeImg('time-img',todayTime);
}
function addZero(num)
{
	if(num<10)
	{
		return '0'+num;
	}
	else
	{
		return ''+num;
	}
}
function changeImg(type,str)
{
	var imgs=document.getElementsByClassName(type);
	for(var i=0;i<imgs.length;i++)
	{
		imgs[i].src="../img/"+str[i]+".png";
	}
}
window.onload=function()
{
setInterval(getTime,1000);//1s后第一次执行，此后每隔1s执行一次
//函数后不能有(),写成getTime而非getTime(),传参"getTime(str)"
getTime();

//延迟提示框
var targetImg=document.getElementById("late-img");
//var targetImg=document.getElementsByClassName("hh");
//根据类名获取的是元素数组，绑定鼠标移入移出触发的事件具体到单个元素
var lateAlert=document.getElementById("late-alert");
var alertGone=null;
targetImg.onmouseover=function()
{
	clearTimeout(alertGone);//关闭从提示框移出时的定时器
	lateAlert.style.display='block';
};

targetImg.onmouseout=function()
{
	alertGone=setTimeout(function(){
		lateAlert.style.display='none';
	},500);
};

lateAlert.onmouseover=function()
{
	clearTimeout(alertGone);
};

lateAlert.onmouseout=function()
{
	alertGone=setTimeout(function(){
		lateAlert.style.display='none';
	},500);//鼠标从提示框移出时，提示框消失
}


}
