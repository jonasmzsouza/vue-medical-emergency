<template>
  <div>
    <div class="row">
      <div class="col">
        <h5><i class="bi-clipboard-check me-2"></i>Teams Set</h5>
        <span>Number of nurses: {{ $store.getters.numberOfNurses }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <item-list-component type="teams-set"></item-list-component>
      </div>
    </div>
  </div>
</template>

<script>
import ItemListComponent from "@/components/ItemListComponent";

export default {
  name: "TeamsComponent",
  components: {
    ItemListComponent,
  },
};
</script>
