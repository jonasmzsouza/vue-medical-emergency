<template>
  <div class="row">
    <div class="col-1" v-if="data.id" v-text="data.id"></div>
    <div class="col" v-if="data.name" v-text="data.name"></div>
    <div class="col-2" v-if="data.schedule" v-text="data.schedule"></div>
    <div class="col-2" v-if="data.shift" v-text="data.shift"></div>
    <div class="col" v-if="data.licensePlate" v-text="data.licensePlate"></div>
    <div class="col" v-if="data.phone" v-text="data.phone"></div>
    <div class="col" v-if="data.kit" v-text="data.kit"></div>
    <div class="col-1">
      <i class="bi-check2-square" style="cursor: pointer"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemComponent",
  props: {
    data: Object,
  },
};
</script>
