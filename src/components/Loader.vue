<template>
	<div class="p-3" :class="`text-${align}`">
		<div class="is-loading large dark" :class="`${theme}`"></div>
	</div>
</template>

<script>
export default {
	name: 'Loader',
	props: {
		align: {
			type: String,
			default: 'center', // left, right, center
		},
		theme: {
			type: String,
			default: 'dark',
		},
	},
};
</script>
