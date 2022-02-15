<template>
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
</template>

<script>
import {Header, Menu} from './components/system'

export default {
	name: 'App',
	components: {
		Header, Menu
	}
}
</script>
