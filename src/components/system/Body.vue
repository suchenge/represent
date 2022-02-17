<template>
	<div id="rp-system-body" :class="{'rp-system-body-unfolded': !this.collapsed, 'rp-system-body-collapsed': this.collapsed}">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "Body",
	props: {
		collapsed: {type:Boolean, default: true}
	}
}
</script>
