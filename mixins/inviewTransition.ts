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
					entry.target.classList.add("split-text--is-activated");
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
				// Wrap all words in <span>'s. if word contains &shy; it will split to multiple spans
				target.innerHTML = target.innerHTML.replace(
					/\w+/g,
					"<span>$&</span>"
				);

				// Remove &shy;'s
				target.innerHTML = target.innerHTML.replace(/\u00AD/g, "");

				// eslint-disable-next-line no-new
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
				delete target.dataset.splitText;
			});

			Array.prototype.forEach.call(targets, (el) => {
				observer.observe(el);
			});
		}
	}
}
