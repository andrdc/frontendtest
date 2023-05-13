<script setup lang="ts">
import { useChessBoardStore } from '../stores/chess-board.store';

const clickTracker = useChessBoardStore().clickTracker;

{ clickTracker };
</script>

<template>
  <div id="SideBar">
    <h2>Coordinates Tracker</h2>
    <div id="ClickTracker">
      <span id="ClickTrackerTextWrapper">
        <h2>{{ clickTracker.toString() }}</h2>
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
#SideBar {
  grid-column: 3 / 3;
  grid-row: 1;
  color: #eeeed2;
}

#ClickTrackerTextWrapper {
  display: block;
  width: 300px;
  margin: auto;
}

#ClickTrackerTextWrapper>h2 {
  overflow-wrap: break-word;
}

@include respond-to(lg) {
  #SideBar {
    grid-column: 1;
    grid-row: 3 / 3;
  }
}
</style>