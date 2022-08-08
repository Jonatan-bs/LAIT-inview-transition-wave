<template>
	<div class="container l-p-xxs">
		<nuxt-link to="/page-two/">page-two</nuxt-link>

		<h1 v-char-animation>Tilte on page two</h1>
	</div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class IndexPage extends Vue {}
</script>
