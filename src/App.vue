<template>
	<a-config-provider :locale="this.locale">
		<div>
			<div id="rp-system-header1" style="background-color:blue; height: 55px;" @click="changeMenu"></div>
				<div id="rp-system-menu" style="background-color:black; width: 60px;"></div>
				<div id="rp-system-content" style="background-color:purple; width: calc(100% - 60px); float: right;">
					<div id="rp-system-title" style="background-color:palegoldenrod; height:48px;">Title</div>
					<div id="rp-system-view" style="background-color:red; height: calc(100vh - 103px)">View</div>
				</div>
		</div>
		<a-layout>
			<Header/>
			<a-layout>
				<Menu/>
				<a-layout-content id="rp-content">
					<a-layout-content class="router-view">
						<router-view src="./DashBoard"></router-view>
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
	methods:{
		changeMenu(){
			document.getElementById("rp-system-menu").style.width = "250px";
			document.getElementById("rp-system-content").style.width = "calc(100% - 250px)";
		}
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

