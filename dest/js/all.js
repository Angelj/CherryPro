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
	//闭包是可访问一个函数作用域里变量的匿名函数。
	//使用闭包有一个优点，也是它的缺点：就是可以把局部变量驻留在内存中，可以避免使用全局变量。
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