<template>
	<div class="">
		<nuxt-link to="/">page one</nuxt-link>
		<h1 data-split-text>VeryLongTitle&shy;WithLineBreak</h1>
		<h1>VeryLongTitleWithLineBreak</h1>
	</div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import inviewMixin from "~/mixins/inviewTransition";

@Component({
	mixins: [inviewMixin],
})
export default class pageTwo extends Vue {}
</script>
