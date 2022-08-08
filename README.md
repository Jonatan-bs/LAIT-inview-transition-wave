# Text-wave-animation

Add gsap wave animation to titles, when scrolled in to view

-   works with '&shy';
-   easy to modify animation;
    <br>
    <br>
    <br>

## Setup

<br>

Add charAnimation.client.ts to plugins folder
```js
plugins\charAnimation.client.ts
```

<br>

Add plugin to nuxt.config.ts

```js
plugins: ["~/plugins/charAnimation.client.ts"],
```

<br>

<br>

## Usage

<br>

Add v-char-animation to element to add wave animation

```html
<h1 v-char-animation>Tilte on page two</h1>
```
