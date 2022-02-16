<template v-show="this.columns.length > 0 && this.dataSource.length > 0">
	<a-dropdown :trigger="['contextmenu']" :visible="this.contextMenuVisible">
		<div class="gird-container" @contextmenu="this.contextMenuVisible = true" @click="this.contextMenuVisible = false">
			<a-table size="small" :columns="this.columns" :data-source="this.dataSource" :pagination="this.paginationOpt" :scroll="{y: this.contentHeight}">
				<a slot="action">快速查看</a>
			</a-table>
		</div>
		<a-menu slot="overlay" v-for="item in this.contextMenuItems" :key="item">
			<a-menu-item :key="item.value" v-if="item.name">
				<a-icon :type="item.icon" v-show="item.icon"></a-icon>{{item.name}}
			</a-menu-item>
			<a-menu-divider v-else/>
		</a-menu>
	</a-dropdown>
</template>

<script>
export default {
	name: 'Grid',
	props: {
		columns: 				{ type: Array,		default: () => [] },
		dataSource: 			{ type: Array,  	default: () => [] },
		paginationOptions: 		{ type: Object, 	default: () => ({}) },
		contextMenuItems: 		{ type: Array, 		default: () => [] }
	},
	methods:{
	},
	data(){
		return {
			contextMenuVisible:false,
			contentHeight: document.body.clientHeight - 165,
			paginationOpt: Object.assign({
				showQuickJumper:true,
				defaultCurrent: 1, // 默认当前页数
				defaultPageSize: 30, // 默认当前页显示数据的大小
				total: this.dataSource.length, // 总数，必须先有
				showSizeChanger: true,
				pageSizeOptions: ["10", "20", "30", "40", "50"],
				showTotal: (total) => `共 ${total} 条`, // 显示总数
				onShowSizeChange: (current, pageSize) => {
					this.paginationOpt.defaultCurrent = 1;
					this.paginationOpt.defaultPageSize = pageSize;
				},
				// 改变每页数量时更新显示
				onChange: (current, size) => {
					this.paginationOpt.defaultCurrent = current;
					this.paginationOpt.defaultPageSize = size;
				}
			}, this.paginationOptions)
		}
	},
}
</script>
