<template>
	<div id="rp-system-title">
		<a-row type="flex">
			<a-col flex="auto">
				<a-page-header
						:title="this.title"
						@back="() => $router.go(-1)"
				/>
			</a-col>
			<a-col type="flex" justify="end">
				<a-breadcrumb separator="/">
					<template v-for="item in this.breadcrumb">
						<a-breadcrumb-item :key="item.label">
							<router-link :to="item.to" v-if="item.to">{{item.label}}</router-link>
							<span v-show="!item.to">{{item.label}}</span>
						</a-breadcrumb-item>
					</template>
				</a-breadcrumb>
			</a-col>
		</a-row>
	</div>
</template>

<script>
export default {
	name: "Title",
	props: {
		title:{ type:String },
		breadcrumb:{ type:Array, default:() => []}
	}
}
</script>
