<template>
	<transition name="modal">
		<div>
			<div class="modal-mask">
				<div class="modal-wrapper" :class="{ 'has-scroll': hasScroll }">
					<div class="modal-container" :class="`modal-container-${size}`">
						<div class="modal-header" v-if="$slots.header">
							<slot name="header">
								Modal Header
							</slot>
							<div class="modal-close" @click="$emit('close')" v-if="showClose">
								<i class="material-icons">close</i>
							</div>
							<button type="button" class="close hidden" aria-label="Close" @click="$emit('close')">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>

						<div class="modal-body" :class="{ 'p-0': full }">
							<slot name="body">
								Modal Body
							</slot>
						</div>

						<div class="modal-footer" v-if="!hideFooter">
							<slot name="footer">
								<button class="btn btn-plain btn-icon" @click="$emit('close')">
									<i class="material-icons va-m text-primary">check</i>
									<span class="va-m">OK</span>
								</button>
							</slot>
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'Modal',
	props: {
		size: {
			type: String,
			default: 'small',
		},
		hideFooter: {
			type: Boolean,
			default: false,
		},
		full: {
			type: Boolean,
			default: false,
		},
		hasScroll: {
			type: Boolean,
			default: true,
		},
		showClose: {
			type: Boolean,
			default: true,
		},
	},
	methods: {
		onKeyup(event) {
			if (event.key === 'Escape') {
				this.$emit('close');
			}
		},
	},
	created() {
		document.body.classList.add('modal-open');
		window.addEventListener('keyup', this.onKeyup);
	},
	destroyed() {
		document.body.classList.remove('modal-open');
		window.removeEventListener('keyup', this.onKeyup);
	},
};
</script>

<style lang="scss">
</style>
