var asyncAdd = ( a , b ) => {
	return new Promise((resolve, reject) => {
		setTimeout( ()=> {
			if(typeof a === 'number' && typeof b === 'number'){
				resolve(a + b);
			} else {
				reject('Arguments must numbers');
			}
		}, 1500);
	});
}


/*
let somePromise = new Promise( (resolve, reject) => {
	setTimeout( ()=> {
		resolve('Worked');
		reject('Unable to resolve');
	}, 2500)
	
});

somePromise.then( (message)=> {
	console.log('Success: ', message);
}, (error) => {
	console.log('Error: ', error);
});
*/
asyncAdd(5, 7)
	.then( (res) => {
		console.log('Result: ', res);
		return asyncAdd(res, '33');
	})
	.then( (res) => {
		console.log('Should be 45', res);
	})
	.catch( (errorMessage) => {
		console.log(errorMessage);
	});