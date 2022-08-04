// gssp
declare interface IGsapTicker {
	add: Function;
	lagSmoothing: Function;
}
export declare interface IGsap {
	to: Function;
	registerPlugin: Function;
	set: Function;
	timeline: Function;
	fromTo: Function;
	toFrom: Function;
	ticker: IGsapTicker;
}
export declare interface ISplittext {
	split: Function;
	lines: object;
}
