<template>
  <div>
    Items List {{ type }}
    <br />
    <item-component></item-component>
  </div>
</template>

<script>
import ItemComponent from "@/components/ItemComponent.vue";

export default {
  name: "ItemListComponent",
  components: {
    ItemComponent,
  },
  props: {
    type: String,
  },
};
</script>
