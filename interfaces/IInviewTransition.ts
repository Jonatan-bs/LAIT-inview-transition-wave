export interface IIOHTMLElement extends HTMLElement {
	timeline: () => void | { play: () => void };
}
