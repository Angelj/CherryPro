var btn=document.getElementsByClassName('button1');

for (var i=0;i<btn.length;i++){
	console.log(btn.length);
	btn[i].onclick=function(){
		console.log(i)
	}
}

	/*上下文通常是取决于一个函数如何被调用。当函数作为对象的方法被调用时，this 被设置为调用方法的对象：*/

	function foo(){
		console.log(this);
	}

	foo() // window
	new foo()// foo
	var g=new foo() //foo{}
	g.init=function(){
		alert(1);
	}
	g.init();