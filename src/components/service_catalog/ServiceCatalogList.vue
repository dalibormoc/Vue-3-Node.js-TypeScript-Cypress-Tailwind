<template>
	<div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-16">
			<service-catalog-list-item v-for="service in services" :key="service.id"></service-catalog-list-item>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useServices from '@/composables/useServices'

// components
import ServiceCatalogListItem from './ServiceCatalogListItem.vue'

export default defineComponent({
	name: 'ServiceCatalogList',
	components: {
		ServiceCatalogListItem,
	},
	setup() {
		// Import services from the composable
		const { services, loading } = useServices()

		// Set the search string to a Vue ref
		const searchQuery = ref('')

		return {
			services,
			loading,
			searchQuery,
		}
	},
})
</script>

<style lang="scss" scoped>

</style>
