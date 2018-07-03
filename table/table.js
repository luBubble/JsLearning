window.onload=function()
{
	var secondMan=document.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[1].getElementsByTagName('td')[1].innerHTML;
	console.log("常规方法获取:"+secondMan);
	//表格简便操作
	var table=document.getElementsByTagName('table')[0];
	var fourthMan=table.tBodies[0].rows[3].cells[1].innerHTML;
	console.log("简便方法获取:"+fourthMan);
	var oldBg='';
	
	//隔行变色
	for(var i=0;i<table.tBodies[0].rows.length;i++)
	{
		if(i%2)//奇数行
		{
			table.tBodies[0].rows[i].style.background='pink';
		}
		else{
			table.tBodies[0].rows[i].style.background='darkgray';
		}
		//鼠标移入高亮
		table.tBodies[0].rows[i].onmouseover=function()
		{
			oldBg=this.style.background;//table.tBodies[0].rows[i].style.background找不到
			this.style.background="white";
		};
		table.tBodies[0].rows[i].onmouseout=function()
		{
			this.style.background=oldBg;
		};
	}
	
	var btnAdd=document.getElementById('addMan');
	btnAdd.onclick=function()
	{
		var newName=document.getElementById('newMan').value;
		var newTr=document.createElement('tr');
		
		var newTd=document.createElement('td');
		newTd.innerHTML=table.tBodies[0].rows.length+1;
		newTr.appendChild(newTd);
		
		var newTd2=document.createElement('td');
		newTd2.innerHTML=newName;
		newTr.appendChild(newTd2);
		
		table.tBodies[0].appendChild(newTr);
	};		
	
}
//搜索
//忽略大小写


/*模糊搜索 str.search('a');返回参数第一次在str出现的索引位置，没有则返回-1
 * 与indexOf()相比，在用正则表达式判断时只能用search，查找具体字符串时，用indexOf更节省系统资源，效率更高
 */

//排序 
//newParent.appendChild(element) 1.先将element从原来的父级元素中删除 2.再将element添加到新父级中

