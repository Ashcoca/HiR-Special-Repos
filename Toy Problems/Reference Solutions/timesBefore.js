// Note that these are just one of many possible solutions!
// Provided for reference, please try to solve the problem on your own before reviewing this!

function calledWhenReady(timesBefore, callback) {
	timesCalled = 0;
	return function() {
		timesCalled += 1;
		console.log(timesCalled);
		if (timesCalled >= timesBefore) return callback();
		else return;
	};
	return returnedFunc;
};

var called = function() {
	return "I'm Ready!"
};

var afterCalled = calledWhenReady(3, called);

afterCalled()
afterCalled()
afterCalled()