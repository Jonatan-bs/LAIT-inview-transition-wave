# Text-wave-animation

Add wave animation to titles, when scrolled in to view
<br>
<br>
<br>

## Add the following files

<br>

> assets\styles\animations\splittext.scss

> mixins\inviewTransition.ts

> utils\splitText\SplitText.js

> utils\splitText\utils\strings.js

---

<br>

## Add to nuxt.config.ts

<br>

```js

    buildModules: ["nuxt-gsap-module"],
    gsap: {
    	extraPlugins: {
    		scrollTrigger: true,
    	},
    },
```

---

<br>

## Usage

<br>

Add mixin to page or component

```js
    import inviewMixin from "~/mixins/inviewTransition";

    @Component({
        mixins: [inviewMixin],
    })
```

<br>

Add data-split-text to element to add wave animation

```html
<h1 data-split-text>Tilte on page two</h1>
```
