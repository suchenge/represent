<template>
	<div id="components-form-demo-advanced-search">
		<a-form class="ant-advanced-search-form" :form="form" @submit="handleSearch">
			<a-row :gutter="24">
				<a-col
						v-for="i in 10"
						:key="i"
						:span="8"
						:style="{ display: i < count ? 'block' : 'none' }"
				>
					<a-form-item :label="`Field ${i}`">
						<a-input
								v-decorator="[
                `field-${i}`,
                {
                  rules: [
                    {
                      required: true,
                      message: 'Input something!',
                    },
                  ],
                },
              ]"
								placeholder="placeholder"
						/>
					</a-form-item>
				</a-col>
			</a-row>
			<a-row>
				<a-col :span="24" :style="{ textAlign: 'right' }">
					<a-button type="primary" html-type="submit">
						Search
					</a-button>
					<a-button :style="{ marginLeft: '8px' }" @click="handleReset">
						Clear
					</a-button>
					<a :style="{ marginLeft: '8px', fontSize: '12px' }" @click="toggle">
						Collapse
						<a-icon :type="expand ? 'up' : 'down'"/>
					</a>
				</a-col>
			</a-row>
		</a-form>
		<div class="search-result-list">
			Search Result List
			<a-dropdown :trigger="['contextmenu']">
				<div
						:style="{
        textAlign: 'center',
        background: 'red',
        height: '100px',
        lineHeight: '200px',
        color: '#777',
      }"
				>
					Right Click on here
				</div>
				<a-menu slot="overlay">
					<a-menu-item key="1">
						1st menu item
					</a-menu-item>
					<a-menu-item key="2">
						2nd menu item
					</a-menu-item>
					<a-menu-item key="3">
						3rd menu item
					</a-menu-item>
				</a-menu>
			</a-dropdown>
		</div>
	</div>
</template>
<script>
export default {
	name: "DashBoard",
	data() {
		return {
			expand: false,
			form: this.$form.createForm(this, {name: 'advanced_search'}),
		};
	},
	computed: {
		count() {
			return this.expand ? 11 : 7;
		},
	},
	updated() {
		console.log('updated');
	},
	methods: {
		handleSearch(e) {
			e.preventDefault();
			this.form.validateFields((error, values) => {
				console.log('error', error);
				console.log('Received values of form: ', values);
			});
		},
		
		handleReset() {
			this.form.resetFields();
		},
		
		toggle() {
			this.expand = !this.expand;
		},
	},
};
</script>
<style>
.ant-advanced-search-form {
  padding: 24px;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
}
</style>
