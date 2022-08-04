<template>
	<div class="container l-p-xxs">
		<nuxt-link to="/page-two/">page-two</nuxt-link>
		<h1 data-split-text>Tilte on page two</h1>
	</div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import inviewMixin from "~/mixins/inviewTransition";

@Component({
	mixins: [inviewMixin],
})
export default class IndexPage extends Vue {}
</script>
