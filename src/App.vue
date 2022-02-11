<template>
	<a-layout>
		<Header/>
		<a-layout>
			<Menu/>
			<a-layout-content id="rp-content">
				1Content 2Content 3Content 4Content 5Content 6Content 7Content 8Content 9Content 10Content 11Content
				12Content 13Content 14Content 15Content 16Content 17Content
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
