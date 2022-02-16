<template v-show="this.columns.length > 0 && this.dataSource.length > 0">
	<a-dropdown :trigger="['contextmenu']" :visible="this.contextMenuVisible">
		<div class="gird-container" @contextmenu="this.contextMenuClick" @click="this.containerClick">
			<a-table size="small" :columns="this.columns" :data-source="this.dataSource" :pagination="this.paginationOpt" :scroll="{y: this.contentHeight}">
				<a slot="action">快速查看</a>
			</a-table>
		</div>
		<a-menu slot="overlay">
			<template v-for="item in this.contextMenuItems">
				<a-menu-item :key="item.value" v-show="item.name" :disabled="item.disabled">
					<a-icon :type="item.icon"/>{{item.name}}
				</a-menu-item>
				<a-menu-divider v-show="!item.name" :key="item.name"/>
			</template>
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
		watchClientHeight(){
			this.contentHeight = document.body.clientHeight - 160;
		},
		contextMenuClick(){
			this.contextMenuVisible = true;
		},
		containerClick(){
			this.contextMenuVisible = false;
		}
	},
	created() {
		setInterval(() => this.watchClientHeight(), 1000);
	},
	data(){
		return {
			contextMenuVisible: false,
			contentHeight: document.body.clientHeight - 160,
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
