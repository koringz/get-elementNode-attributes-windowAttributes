/****** 调用方法 *******/
function getElementNode(attr_name, node, element) {
	element = el(element);
	if (isString(attr_name)) {
		if (/^\./g.test(attr_name)) {
			if (element.getElementsByClassName) {
				return element.getElementsByClassName((new callback(attr_name)).attr_class())[0]
			} else {
				var a = [];
				node = node || element;
				if (node.ownerDocument === '[object HTMLDocument]') node.all;
				for (var i = 0; i < node.length; i++) {
					if (node[i].className == (new callback(attr_name)).attr_class()) a.push(node[i])
				}
				return a
			}
		} else if (/^\#/g.test(attr_name)) {
			return element.getElementById((new callback(attr_name)).attr_id())
		} else {
			return element.getElementsByTagName(attr_name)[0]
		}
	}
};
function callback(element) {
	reg.apply(this, arguments)
};

function reg(options) {
	this.attr_class = function() {
		return options.replace(/./, "")
	};
	this.attr_id = function() {
		return options.replace(/#/, "")
	}
};

function addLister(domnode, eventType, handler) {
	el();
	if (el().all) {
		domnode.attachEvent("on" + eventType, handler)
	} else {
		domnode.addEventListener(eventType, handler, false)
	}
};

function el(element) {
	if (!element) {
		element = document
	}
	return element
};

function isString(element) {
	return typeof element === "string"
};
/****** 调用方法 *******/

// getElementNode(class_name[i]) 等同于 document.getElementsByClassName(class_name[i])
// 比如你的类名：class_name = ['class01','class02','class03']
