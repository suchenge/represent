<template>
		<rp-grid
				:columns="this.columns"
				:dataSource="this.data"
				:paginationOptions="this.paginationOptions"
				:contextMenuItems="this.contextMenuItems"/>
</template>
<script>
import RpGrid from '@/components/common/Grid';

export default {
	name: "Module",
	components: { RpGrid },
	data() {
		return {
			data,
			columns,
			paginationOptions:{
				defaultPageSize: 40,
			},
			contextMenuItems:[
				{name: "添加", icon: "file-add", value:"add", click:(item) => console.log(item)},
				{name: "查看", icon: "eye", value:"eye", click:(item) => console.log(item)},
				{name: "编辑", value:"edit"},
				{},
				{name: "删除", icon: "delete", value:"delete", disabled: true}
			]
		};
	}
}

const columns = [
	{title: 'Full Name', width: 100, dataIndex: 'name', key: 'name'},
	{title: 'Age', width: 100, dataIndex: 'age', key: 'age'},
	{title: 'Email', dataIndex: 'address', key: '1', width: 150},
	{title: 'Phone', dataIndex: 'address', key: '2', width: 150},
	{title: 'Address', dataIndex: 'address', key: '3', width: 150},
	{title: 'Column 4', dataIndex: 'address', key: '4', width: 150},
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
