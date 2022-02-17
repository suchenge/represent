<template>
	<div id="rp-system-menu">
		<a-menu
				mode="inline"
				:inline-collapsed="collapsed"
				:theme="theme"
		>
			<a-menu-item key="1">
				<a-icon type="pie-chart"/><span>仪表盘</span>
				<router-link to="/DashBoard"></router-link>
			</a-menu-item>
			<a-menu-item key="2">
				<a-icon type="desktop"/>
				<span>Option 2</span>
			</a-menu-item>
			<a-menu-item key="3">
				<a-icon type="inbox"/>
				<span>Option 3</span>
			</a-menu-item>
			<a-sub-menu key="sub1">
				<span slot="title"><a-icon type="mail"/><span>Navigation One</span></span>
				<a-menu-item key="5">
					Option 5
				</a-menu-item>
				<a-menu-item key="6">
					Option 6
				</a-menu-item>
				<a-menu-item key="7">
					Option 7
				</a-menu-item>
				<a-menu-item key="8">
					Option 8
				</a-menu-item>
			</a-sub-menu>
			<a-sub-menu key="sub2">
				<span slot="title"><a-icon type="appstore"/><span>系统管理</span></span>
				<a-menu-item key="9">
					<router-link to="/Module">模块管理</router-link>
				</a-menu-item>
				<a-menu-item key="10">
					Option 10
				</a-menu-item>
				<a-sub-menu key="sub3" title="Submenu">
					<a-menu-item key="11">
						Option 11
					</a-menu-item>
					<a-menu-item key="12">
						Option 12
					</a-menu-item>
				</a-sub-menu>
			</a-sub-menu>
		</a-menu>
	</div>
</template>

<script>
export default {
	name: "Menu",
	props:{
		collapsed: {type: Boolean, default: true},
		theme:{type:String},
	},
	data() {
		return {
		};
	}
}
</script>
