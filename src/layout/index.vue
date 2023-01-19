<template>
	<Header />

	<!-- <Container> -->
	<main>
		<slot />
	</main>

	<Footer />
	<!-- </Container> -->
</template>

<script lang="ts">
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
	name: 'AppLayout',
	components: {
		Header,
		Footer,
	},
}
</script>