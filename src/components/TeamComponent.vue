<template>
  <div>
    <div class="row">
      <div class="col-2" v-text="data.nurse"></div>
      <div class="col-2" v-text="data.rescuer"></div>
      <div class="col-2" v-text="data.doctor"></div>
      <div class="col-2" v-text="data.car"></div>
      <div class="col-2" v-text="data.phone"></div>
      <div class="col-2" v-text="data.resuscitationKit"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamComponent",
  props: {
    data: Object,
  },
};
</script>
