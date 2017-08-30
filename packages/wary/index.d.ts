declare module 'wary' {
	import * as Promise from 'bluebird';

	interface Wary {
		it: (
			desc: string,
			files: { [filename: string]: string },
			action: (files: { [filename: string]: string }) => any
		) => void;
		run: () => Promise<void>;
	}

	const wary: Wary;

	export = wary;
}
