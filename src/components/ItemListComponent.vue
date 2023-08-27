<template>
  <div>
    <item-component
      v-for="(item, index) in items"
      :key="index"
      :data="item"
    ></item-component>
  </div>
</template>

<script>
import ItemComponent from "@/components/ItemComponent.vue";
import { mapState } from "vuex";

export default {
  name: "ItemListComponent",
  components: {
    ItemComponent,
  },
  props: {
    type: String,
  },
  computed: {
    ...mapState({
      nurses: (state) => state.nurses,
      rescuers: (state) => state.rescuers,
      doctors: (state) => state.doctors,
    }),
    items() {
      switch (this.type) {
        case "nurses":
          return this.nurses;
        case "rescuers":
          return this.rescuers;
        case "doctors":
          return this.doctors;
      }
      return [];
    },
  },
};
</script>
