<template>
	<a-config-provider :locale="this.locale">
		<a-layout>
			<Header/>
			<a-layout>
				<Menu/>
				<a-layout-content id="rp-content">
					<a-layout-content class="router-view">
						<router-view src="DashBoard"></router-view>
					</a-layout-content>
				</a-layout-content>
			</a-layout>
		</a-layout>
	</a-config-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import en_US from 'ant-design-vue/lib/locale-provider/en_US';

import eventContainer from "@/event-container";
import {Header, Menu} from '@/components/system'

export default {
	name: 'App',
	components: {
		Header, Menu
	},
	created() {
		eventContainer.$on('changeLocale', locale => this.locale = this.locales[locale])
	},
	data() {
		return{
			locale: zh_CN,
			locales:{
				'zh_CN': zh_CN,
				'en_US': en_US
			}
		}
	}
}
</script>

