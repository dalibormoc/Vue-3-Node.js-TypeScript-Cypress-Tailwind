<template>
	<nav class="header flex justify-between" aria-label="Global">
		<div class="flex lg:min-w-0 lg:flex-1 self-center" aria-label="Global">
			<a href="#" class="-m-1.5 p-1.5">
				<span class="sr-only">Kong</span>
				<img class="h-8" :src="logoSrc" alt="Kong logo" />
			</a>
		</div>
		<div class="flex lg:hidden">
			<button type="button" class="inline-flex items-center justify-center rounded-md p-2.5 text-white"
				@click="mobileMenuOpen = true">
				<span class="sr-only">Open main menu</span>
				<!-- Heroicon name: outline/bars-3 -->
				<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
					stroke="currentColor" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
			</button>
		</div>
		<div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end lg:gap-x-9">
			<a href="#" class="font-semibold text-white hover:text-gray-400 flex">
				<img :src="organizationIconSrc" class="h-5 w-5 self-center" />
				<div class="ml-3 md:text-15 self-center">Organization</div>
			</a>
			<a href="#" class="font-semibold text-white hover:text-gray-400 flex">
				<img :src="settingsIconSrc" class="h-5 w-5 self-center" />
				<div class="ml-3 md:text-15 self-center">Settings</div>
			</a>

			<a href="#" class="font-medium text-white hover:text-gray-400 flex px-5 profile">
				<img :src="profileIconSrc" class="h-30 w-30 self-center" />
				<div class="ml-3 md:text-15 self-center opacity-80">Katherine Ellis</div>
			</a>
		</div>
	</nav>


	<!-- mobile menu -->
	<div v-if="mobileMenuOpen" role="dialog" :aria-modal="true">
		<div focus="true" class="fixed inset-0 z-10 overflow-y-auto bg-blue-900 px-6 py-5 lg:hidden mobile-menu">
			<div class="flex h-9 items-center justify-between">
				<div class="flex">
					<a href="#" class="-m-3.5 p-1.5">
						<span class="sr-only">Your Company</span>
						<img class="h-8" :src="logoSrc" alt="Kong logo">
					</a>
				</div>
				<div class="flex">
					<button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
						@click="mobileMenuOpen = false">
						<span class="sr-only">Close menu</span>
						<!-- Heroicon name: outline/x-mark -->
						<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
							stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>
			<div class="mt-6 flow-root">
				<div class="-my-6 divide-y divide-white-500/10">
					<div class="space-y-2 py-6">
						<a href="#"
							class="-mx-3 block rounded-lg py-2 px-3 text-base leading-7 font-semibold text-white hover:bg-gray-400/10">Organization</a>
						<a href="#"
							class="-mx-3 block rounded-lg py-2 px-3 text-base leading-7 font-semibold text-white hover:bg-gray-400/10">Settings</a>

					</div>
					<div class="py-6">
						<a href="#"
							class="-mx-3 block rounded-lg py-2 px-3 text-base leading-7 font-semibold text-white hover:bg-gray-400/10">Katherine
							Ellis</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import logoSrc from "@/assets/logo.svg";
import organizationIconSrc from "@/assets/organization.svg";
import settingsIconSrc from "@/assets/settings.svg";
import profileIconSrc from "@/assets/profile.svg";


export default defineComponent({
	name: 'AppLayoutHeader',
	setup() {
		const mobileMenuOpen = ref(false)

		return {
			logoSrc,
			organizationIconSrc,
			settingsIconSrc,
			profileIconSrc,
			mobileMenuOpen
		};
	}
})
</script>

<style lang="scss">
:root {
	--header-bg-gradient: linear-gradient(180deg, #09224F 0%, #073382 100%);
  --header-bg-color: #072863;;
}

.header {
	background: var(--header-bg-gradient);
	background-color: var(--header-bg-color);
	height: 70px;
}

.mobile-menu {
	background: var(--header-bg-gradient);
	background-color: var(--header-bg-color);
}

.profile {
	background-color: var(--header-bg-color);
}
</style>
