import { Vue, Component } from "nuxt-property-decorator";
import { SplitText } from "~/utils/splitText/SplitText.js";
import { IGsap } from "~/interfaces/Gsap";
import { IIOHTMLElement } from "~/interfaces/IInviewTransition";

@Component
export default class inviewMixin extends Vue {
	private $gsap!: IGsap;
	private firstLoad = true;

	private delay = 0;
	mounted() {
		this.$nextTick(() => {
			// Wait for elements to be mounted before executing, to make sure they have the correct position,
			// in order to check if they're inside the viewport
			setTimeout(() => {
				this.ioGlobal();
				// this.parralaxAnimations();
			}, 50);
		});
	}

	// public parralaxAnimations() {
	// 	const gsap = this.$gsap;
	// 	gsap.to("[scroll-trigger-hero-image]", {
	// 		yPercent: -20,
	// 		ease: "none",
	// 		scrollTrigger: {
	// 			trigger: "[slow-scroll-trigger]",
	// 			start: "top", // the default values
	// 			end: "bottom",
	// 			scrub: true,
	// 		},
	// 	});
	// 	gsap.to("[scroll-trigger-waves]", {
	// 		yPercent: 300,
	// 		ease: "none",
	// 		scrollTrigger: {
	// 			trigger: "[slow-scroll-trigger]",
	// 			start: "top", // the default values
	// 			end: "bottom",
	// 			scrub: true,
	// 		},
	// 	});
	// }

	public ioGlobal() {
		const gsap = this.$gsap;

		if (process.config) {
			gsap.registerPlugin(SplitText);
		}

		// create callback function
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

		const observer = new IntersectionObserver(callbackFunc, options);

		const targets: NodeListOf<IIOHTMLElement> =
			document.querySelectorAll("[data-split-text]");

		if (targets.length > 0) {
			// a loop: create the individual target timelines
			targets.forEach((target) => {
				// eslint-disable-next-line
				new SplitText(target, {
					type: "words",
				});

				const mySplitText2Chars = new SplitText(target, {
					type: "chars",
				});

				const action = gsap.timeline({ paused: true }).from(
					mySplitText2Chars.chars,
					{
						duration: 0.3,
						delay: this.delay,
						opacity: 0,
						yPercent: 50,
						force3D: true,
						ease: "power3",
						transformOrigin: "50% 0% -150",
						stagger: 0.03,
					},
					0
				);

				target.timeline = action;
				target.classList.add("is-activated");
			});

			Array.prototype.forEach.call(targets, (el) => {
				observer.observe(el);
			});
		}
	}
}
