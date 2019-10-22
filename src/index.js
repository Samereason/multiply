module.exports = function multiply(first, second) {
  // your solution
	const intOneArr = first.split('').reverse();
	const intTwoArr = second.split('').reverse();

	const stack = [];

	for (let i = 0; i < intOneArr.length; i++) {
		for (let j = 0; j < intTwoArr.length; j++) {
			const m = intOneArr[i] * intTwoArr[j];
			stack[i + j] = (stack[i + j]) ? stack[i + j] + m : m;
		}
	}

	for (let i = 0; i < stack.length; i++) {
		const num = stack[i] % 10;
		const move = Math.floor(stack[i] / 10);

		stack[i] = num;

		if (stack[i + 1]) {
			stack[i + 1] += move;
		} else if (move !== 0) {
			stack[i + 1] = move;
		}
	}

	return stack.reverse().join('');
};
