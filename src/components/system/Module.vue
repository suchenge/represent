<template>
	<a-layout>
		<a-layout>
			<a-breadcrumb separator="/">
				<a-breadcrumb-item>
					<router-link to="/DashBoard">仪表盘</router-link>
				</a-breadcrumb-item>
				<a-breadcrumb-item>系统管理</a-breadcrumb-item>
				<a-breadcrumb-item>模块管理</a-breadcrumb-item>
			</a-breadcrumb>
		</a-layout>
		<a-dropdown :trigger="['contextmenu']" :visible="this.menuVisible">
			<div class="router-container" @contextmenu="containerRightClick" @click="containerClick">
				<a-table size="middle" :columns="columns" :data-source="data" :pagination="paginationOpt" :scroll="{y:contentHeight}">
					<a slot="action">快速查看</a>
				</a-table>
			</div>
			<a-menu slot="overlay">
				<a-menu-item key="1">
					<a-icon type="file-add"></a-icon>
					添加
				</a-menu-item>
				<a-menu-item key="4">
					<a-icon type="eye"></a-icon>
					查看
				</a-menu-item>
				<a-menu-item key="2">
					<a-icon type="edit"></a-icon>
					编辑
				</a-menu-item>
				<a-menu-divider/>
				<a-menu-item key="3" disabled>
					<a-icon type="delete"></a-icon>
					删除
				</a-menu-item>
			</a-menu>
		</a-dropdown>
	</a-layout>
</template>
<script>
export default {
	name: "Module",
	methods: {
		containerRightClick(){
			this.menuVisible = true;
		},
		containerClick() {
			this.menuVisible = false;
		}
	},
	data() {
		return {
			data,
			columns,
			menuVisible: false,
			contentHeight: document.body.clientHeight - 170,
			paginationOpt: {
				showQuickJumper:true,
				defaultCurrent: 1, // 默认当前页数
				defaultPageSize: 30, // 默认当前页显示数据的大小
				total: 110, // 总数，必须先有
				showSizeChanger: true,
				pageSizeOptions: ["10", "15", "30", "50"],
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
			}
		};
	}
}

const columns = [
	{title: 'Full Name', width: 100, dataIndex: 'name', key: 'name'},
	{title: 'Age', width: 100, dataIndex: 'age', key: 'age'},
	{title: 'Column 1', dataIndex: 'address', key: '1', width: 150},
	{title: 'Column 2', dataIndex: 'address', key: '2', width: 150},
	{title: 'Column 3', dataIndex: 'address', key: '3', width: 150},
	{title: 'Column 4', dataIndex: 'address', key: '4', width: 150},
	{title: 'Column 5', dataIndex: 'address', key: '5', width: 150},
	{title: 'Column 6', dataIndex: 'address', key: '6', width: 150},
	{title: 'Column 7', dataIndex: 'address', key: '7', width: 150},
	{title: 'Column 8', dataIndex: 'address', key: '8'},
	{
		title: '操作',
		key: 'operation',
		width: 150,
		scopedSlots: {customRender: 'action'},
	},
];

const data = [];
for (let i = 0; i < 110; i++) {
	data.push({
		key: i,
		name: `Edrward ${i}`,
		age: 32,
		address: `London Park no. ${i}`,
	});
}
</script>
