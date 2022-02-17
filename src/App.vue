<template>
	<a-config-provider :locale="this.locale">
		<div>
			<rp-header :toggle-menu="toggleMenu" :toggleTheme="toggleTheme" :toggleLocale="toggleLocale"/>
			<rp-menu :collapsed="this.collapseMenu" :theme="this.theme"/>
			<rp-body :collapsed="this.collapseMenu">
				<rp-title title="模块管理" :breadcrumb="this.breadcrumb"/>
				<rp-container/>
			</rp-body>
		</div>
	</a-config-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import en_US from 'ant-design-vue/lib/locale-provider/en_US';

import {RpHeader, RpMenu, RpBody, RpTitle, RpContainer} from "@/components/system";

export default {
	name: 'App',
	components: {RpHeader, RpMenu, RpBody, RpTitle, RpContainer},
	methods: {
		toggleMenu() {
			this.collapseMenu = !this.collapseMenu;
		},
		toggleTheme(theme) {
			this.theme = theme;
		},
		toggleLocale(locale) {
			this.locale = this.locales[locale];
		},
	},
	data() {
		return {
			theme: 'light',
			collapseMenu: true,
			locale: zh_CN,
			locales: {
				'zh_CN': zh_CN,
				'en_US': en_US
			},
			breadcrumb: [{label: '系统管理'}, {label: '模块管理', to: 'DashBoard'}]
		}
	}
}
</script>

