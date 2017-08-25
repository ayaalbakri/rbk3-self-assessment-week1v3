// your code here

var Array = function () {
	/* body... */
	var instance = [];
	._extend(instance , method);
	return instance;

}

var method = [];
method.first = function (array) {
	/* body... */
	if (array.length === 0) {
		return [];
	}
	else {
		return array[0];
	}
}

method.last = function (array) {
	/* body... */
	if (array.length === 0) {
		return [];
	}
	else {
		return array[array.length-1]
	}
}

