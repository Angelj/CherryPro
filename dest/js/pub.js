function foo(){console.log(this)}for(var btn=document.getElementsByClassName("button1"),i=0;i<btn.length;i++)console.log(btn.length),btn[i].onclick=function(){console.log(i)};foo(),new foo;var g=new foo;g.init=function(){alert(1)},g.init();