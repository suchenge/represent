<template>
	<div id="rp-system-header">
		<a-layout-header >
			<a-row type="flex">
				<a-col flex="auto">
					<a-icon type="menu" @click="toggleCollapsedMenu"/>
				</a-col>
				<a-col type="flex">
					<div class="rp-system-header-quicksearch">
						<a-input-group compact size="small">
							<a-select style="width:150px" default-value="Merchant Detail">
								<a-select-option value="Merchant Detail">
									Merchant Detail
								</a-select-option>
								<a-select-option value="Sale Order">
									Sale Order
								</a-select-option>
							</a-select>
							<a-input-search placeholder="Merchant ID" style="width: 200px;"/>
						</a-input-group>
					</div>
				</a-col>
				<a-col type="flex" justify="end">
					<a-dropdown >
						<a-avatar
									class="avatar"
									@click="e => e.preventDefault()"
									src="https://avatars.githubusercontent.com/u/14213616?v=4"/>
						<a-menu slot="overlay" :theme="theme" style="width: 150px;">
							<a-menu-item>
								<a-icon type="solution"/>用户设置
							</a-menu-item>
							<a-sub-menu @click="changeLocale">
								<span slot="title"><a-icon type="global"/>语言切换</span>
								<a-menu-item key="zh_CN">
									简体中文
								</a-menu-item>
								<a-menu-item>
									繁體中文
								</a-menu-item>
								<a-menu-item key="en_US">
									English
								</a-menu-item>
								<a-menu-item>
									Français
								</a-menu-item>
								<a-menu-item>
									Pусский
								</a-menu-item>
							</a-sub-menu>
							<a-sub-menu @click="changeTheme">
								<span slot="title"><a-icon type="bg-colors"/>样式切换</span>
								<a-menu-item key="light">明亮</a-menu-item>
								<a-menu-item key="dark">暗黑</a-menu-item>
							</a-sub-menu>
							<a-menu-divider/>
							<a-menu-item>
								<a-icon type="logout"/>
								退出登录
							</a-menu-item>
						</a-menu>
					</a-dropdown>
				</a-col>
			</a-row>
		</a-layout-header>
	</div>
</template>

<script>
import eventContainer from "@/event-container";

export default {
	name: "Header",
	created() {
		eventContainer.$on("toggleTheme", theme => this.theme = theme)
		//eventContainer.$on("toggleCollapsed", () => this.collapsed = !this.collapsed);
	},
	data() {
		return {
			theme: this.UserSetting.theme
		}
	},
	methods: {
		toggleCollapsedMenu() {
			eventContainer.$emit("toggleCollapsed");
		},
		changeTheme(e){
			eventContainer.$emit("toggleTheme", e.key);
		},
		changeLocale(e){
			eventContainer.$emit("changeLocale", e.key);
		}
	}
}
</script>
