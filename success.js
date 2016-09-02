/*�̳з�ʽһ��call,apply���������ð�䷽ʽ�ļ̳У�call��apply�������ǣ�apply����һ��������Ϊ��������call�ǵ����Ĳ���*/

/*��дArray��push()*/
Array.prototype.push = function(item) {
	this[this.length] = item.toLowerCase();
	return this.length;
}

function ClassBase(color) {
	this.colors = new Array(color);
	/*��дClassBase��toString()*/
	ClassBase.prototype.toString = function() {
		return this.colors;
	}
	/*��дClassBase��push()*/
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

/*�̳з�ʽ��������prototype��ʽ*/
function classOther(owner, color) {
	classOther.prototype.colors = new ClassBase(color);
	this.owner = owner;
	classOther.prototype.showProperties = function() {
		WScript.Echo(this.owner + " has " + this.colors.toString());
	}
}
//��Է�ʽһ�Ĳ���
var jack = new ClassDriver("jack", "orange");
var rose = new ClassDriver("rose", "blue");
rose.colors.push("RED");
jack.showProperties();//jack has orange
rose.showProperties();//rose has blue red

//��Է�ʽ���Ĳ���
var mike = new classOther("mike", "orange");
var bread = new classOther("bread", "blue");
bread.colors.push("yellow");
mike.showProperties();//mike has blue yellow
bread.showProperties();//bread has blue yellow