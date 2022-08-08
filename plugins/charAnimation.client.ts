import Vue from "vue";
import gsap from "gsap";
import { SplitText } from "~/utils/splitText/SplitText.js";

const callbackFunc = (
	entries: IntersectionObserverEntry[],
	io: IntersectionObserver
) => {
	entries.forEach((entry: IntersectionObserverEntry) => {
		if (entry.isIntersecting) {
			// eslint-disable-next-line
			// @ts-ignore
			entry.target.timeline.play(0);
			io.unobserve(entry.target);
		}
	});
};

const options = {
	rootMargin: "0px 0px -200px 0px",
};

Vue.directive("char-animation", {
	bind: (el) => {
		// Wrap all words in <span>'s. if word contains &shy; it will split to multiple spans (Only relevant if splitting on chars)
		el.innerHTML = el.innerHTML.replace(/\w+/g, "<span>$&</span>");

		// Remove &shy;'s (Only relevant if splitting on chars)
		el.innerHTML = el.innerHTML.replace(/\u00AD/g, "");

		// Make all spans inline-flex, so they don't break words on resize
		(Array.from(el.children) as HTMLSpanElement[]).forEach((span) => {
			span.style.display = "inline-flex";
		});

		// Split chars into divs
		const mySplitText2Chars = new SplitText(el, {
			type: "chars",
		});

		const action = gsap.timeline({ paused: true }).from(
			mySplitText2Chars.chars,
			{
				duration: 0.3,
				delay: 0,
				opacity: 0,
				yPercent: 50,
				force3D: true,
				ease: "power3",
				transformOrigin: "50% 0% -150",
				stagger: 0.03,
			},
			0
		);

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		el.timeline = action;
		// delete el.dataset.splitText;

		// Observe element
		const observer = new IntersectionObserver(callbackFunc, options);
		observer.observe(el);
	},
});
