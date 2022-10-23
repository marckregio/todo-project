const resolveToCallback = (arg: string) => {
	console.log('Resolving the Promise with arg:', arg);
}

const rejectToCallback = (arg: string) => {
	console.log('Rejecting the Promise with arg:', arg);
}

const legacyPromise = (isTrue: boolean, name: string, res, rej): Promise<void> => {
	return new Promise<any>((resolve, reject) => {
		if (isTrue) {
			resolve(res(name));
		} else {
			reject(new Error("something went wrong!"));
		}
	}).then(() => {
		console.log('Then this!');
	}).then(() => {
		console.log('Then that!');
	}).catch((e: any) => {
		console.log('error:', e.message);
		rej('Invalid Request')
	}).finally(() => {
		console.log('All good!');
	});
}

async function asyncawaitFuncPromise () {
	//alternate function syntax
}

const asyncawaitPromise = async (isTrue: boolean, name: string, res, rej) => {
	try {
		if (isTrue) {
			res(name);
			console.log('Then this!');
			console.log('Then that!');
		} else {
			throw new Error("something went wrong");
		}
	} catch (e: any) {
		console.log('error:', e.message);
		rej('Invalid Request')
	} finally {
		console.log('All good!');
	}
}

const dependencyInjection = async  (res, rej) => {
	const name = "Marck Regio";
	const isTrue = true;

	await asyncawaitPromise(isTrue, name, res, rej); //await will should finish first
	legacyPromise(isTrue, name, res, rej);
}

const start = async () => {
	dependencyInjection(resolveToCallback, rejectToCallback);
}

export { start };