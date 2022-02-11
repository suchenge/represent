<template>
  <div id="rp-system-header">
    <a-layout-header>
      <a-row type="flex">
        <a-col flex="auto">
            <a-icon type="menu" @click="toggleCollapsed"/>
        </a-col>
        <a-col type="flex">
          <div class="rp-system-header-quicksearch">
            <a-input-group compact size="small">
              <a-select style="width:150px" default-value="Merchant Detail">
                <a-select-option value="Merchant Detail">
                  Merchant Detail
                </a-select-option>
                <a-select-option value="Sale Order">
                  Sale Order
                </a-select-option>
              </a-select>
              <a-input-search placeholder="Merchant ID" style="width: 200px;" />
            </a-input-group>
          </div>
        </a-col>
        <a-col type="flex" justify="end">
          <div style="line-height:44px">
            <a-avatar size="large" src="https://avatars.githubusercontent.com/u/14213616?v=4" /></div>
        </a-col>
      </a-row>
    </a-layout-header>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
