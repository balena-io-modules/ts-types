declare module 'mochainon' {

	import * as chai from 'chai';
	import * as sinon from 'sinon';

	interface Mochainon {
		chai: typeof chai;
		sinon: typeof sinon;
	}

	const mochainon: Mochainon;
	export = mochainon;
}
