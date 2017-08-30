declare module 'timekeeper' {
	interface Timekeeper {
		freeze(time: Date): void;
		travel(time: Date): void;
		isKeepingTime(): boolean;
		reset(): void;
	}

	const timekeeper: Timekeeper;

	export = timekeeper;
}
