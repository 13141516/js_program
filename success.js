/*继承方式一：call,apply类似与对象冒充方式的继承，call和apply的区别是，apply传递一个数组作为参数，而call是单个的参数*/

/*重写Array的push()*/
Array.prototype.push = function(item) {
	this[this.length] = item.toLowerCase();
	return this.length;
}

function ClassBase(color) {
	this.colors = new Array(color);
	/*重写ClassBase的toString()*/
	ClassBase.prototype.toString = function() {
		return this.colors;
	}
	/*重写ClassBase的push()*/
	ClassBase.prototype.push = function(item) {
		this.colors[this.colors.length] = item;
		return this.colors.length;
	}
}

function ClassDriver(owner, color) {
	ClassBase.call(this, color);
	this.owner = owner;
	this.showProperties = function() {
		WScript.Echo(this.owner + " has " +this.colors);
	}
}

/*继承方式二：利用prototype方式*/
function classOther(owner, color) {
	classOther.prototype.colors = new ClassBase(color);
	this.owner = owner;
	classOther.prototype.showProperties = function() {
		WScript.Echo(this.owner + " has " + this.colors.toString());
	}
}
//针对方式一的测试
var jack = new ClassDriver("jack", "orange");
var rose = new ClassDriver("rose", "blue");
rose.colors.push("RED");
jack.showProperties();//jack has orange
rose.showProperties();//rose has blue red

//针对方式二的测试
var mike = new classOther("mike", "orange");
var bread = new classOther("bread", "blue");
bread.colors.push("yellow");
mike.showProperties();//mike has blue yellow
bread.showProperties();//bread has blue yellow