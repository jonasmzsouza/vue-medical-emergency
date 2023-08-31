<template>
  <div>
    <div class="row">
      <div class="col">
        <h5><i class="bi-clipboard-check me-2"></i>Teams Set</h5>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <teams-list-component></teams-list-component>
      </div>
    </div>
  </div>
</template>

<script>
import TeamsListComponent from "@/components/TeamsListComponent";

export default {
  name: "TeamsComponent",
  components: {
    TeamsListComponent,
  },
};
</script>
