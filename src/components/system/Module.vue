<template>
	<a-layout>
		<a-layout>
			<a-breadcrumb separator="-">
				<a-breadcrumb-item>
					<router-link to="/DashBoard">仪表盘</router-link>
				</a-breadcrumb-item>
				<a-breadcrumb-item>系统管理</a-breadcrumb-item>
				<a-breadcrumb-item>模块管理</a-breadcrumb-item>
			</a-breadcrumb>
		</a-layout>
		<a-table	:columns="columns"
					:data-source="data"
					size="middle"
					:pagination="paginationOpt"
					:scroll="{y:contentHeight}"
					:customRow="customClick">
			<a slot="action">快速查看</a>
		</a-table>
		<a-menu :style="menuStyle" v-if="menuVisible">
			<a-menu-item>查看</a-menu-item>
			<a-menu-item>删除</a-menu-item>
			</a-menu>
	</a-layout>
</template>
<script>
export default {
	name: "Module",
	data() {
		return {
			data,
			columns,
			menuVisible: false,
			menuStyle: {
				position: "absolute",
				top: "0",
				left: "0",
				border: "1px solid #eee"
			},
			contentHeight: document.body.clientHeight - 155,
			paginationOpt:{
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
					console.log(this.contentHeight);
					this.paginationOpt.defaultCurrent = current;
					this.paginationOpt.defaultPageSize = size;
				}
			},
			customClick: record => ({
				on: {
					contextmenu: e => {
						e.preventDefault();
						this.menuData = record;
						this.menuVisible = true;
						this.menuStyle.top = e.clientY + "px";
						this.menuStyle.left = e.clientX + "px";
						document.body.addEventListener("click", this.bodyClick);
					}
				}
			})
		};
	}
	, methods: {
		bodyClick() {
			this.menuVisible = false;
			document.body.removeEventListener("click", this.bodyClick);
		}
	},
}

const columns = [
	{ title: 'Full Name', width: 100, dataIndex: 'name', key: 'name' },
	{ title: 'Age', width: 100, dataIndex: 'age', key: 'age' },
	{ title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
	{ title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
	{ title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
	{ title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
	{ title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
	{ title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
	{ title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
	{ title: 'Column 8', dataIndex: 'address', key: '8' },
	{
		title: '操作',
		key: 'operation',
		width: 150,
		scopedSlots: { customRender: 'action' },
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
