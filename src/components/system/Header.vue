<template>
	<div id="rp-system-header">
		<a-row type="flex">
			<a-col flex="auto">
				<a-icon type="menu" @click="toggleCollapsedMenu"/>
			</a-col>
			<a-col type="flex" class="badge">
				<a-badge :count="19"><a-icon type="bell"/></a-badge>
			</a-col>
			<a-col type="flex" justify="end">
				<a-dropdown>
					<a-avatar
							class="avatar"
							src="https://avatars.githubusercontent.com/u/14213616?v=4"/>
					<a-menu slot="overlay" :theme="theme" style="width: 150px;">
						<a-menu-item>
							<a-icon type="solution"/>用户设置
						</a-menu-item>
						<a-sub-menu @click="changeLocale">
							<span slot="title"><a-icon type="global"/>语言切换</span>
							<a-menu-item key="zh_CN">简体中文</a-menu-item>
							<a-menu-item>繁體中文</a-menu-item>
							<a-menu-item key="en_US">English</a-menu-item>
							<a-menu-item>Français</a-menu-item>
							<a-menu-item>Pусский</a-menu-item>
						</a-sub-menu>
						<a-sub-menu @click="changeTheme">
							<span slot="title"><a-icon type="bg-colors"/>样式切换</span>
							<a-menu-item key="light">明亮</a-menu-item>
							<a-menu-item key="dark">暗黑</a-menu-item>
						</a-sub-menu>
						<a-menu-divider/>
						<a-menu-item><a-icon type="logout"/>退出登录</a-menu-item>
					</a-menu>
				</a-dropdown>
			</a-col>
		</a-row>
	</div>
</template>

<script>
export default {
	name: "Header",
	props: {
		toggleMenu: {type: Function},
		toggleLocale: {type: Function},
		toggleTheme: {type: Function},
	},
	data() {
		return {
			theme:'light',
		}
	},
	methods: {
		toggleCollapsedMenu() {
			this.toggleMenu();
		},
		changeTheme(e){
			this.toggleTheme(e.key);
			this.theme = e.key;
		},
		changeLocale(e){
			this.toggleLocale(e.key);
		}
	}
}
</script>
