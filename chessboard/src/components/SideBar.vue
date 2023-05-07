<script setup lang="ts">
</script>

<template>
  <div id="SideBar">SideBar</div>
</template>

<style scoped lang="scss">
#SideBar {
  grid-column: 3 / 3;
  grid-row: 1;
}

@include respond-to(md) {
  #SideBar {
    grid-column: 1;
    grid-row: 3 / 3;
  }
}
</style>