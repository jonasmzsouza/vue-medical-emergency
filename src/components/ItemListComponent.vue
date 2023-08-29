<template>
  <div>
    <div v-if="type == 'rescuers'">
      <select class="form-control form-control-sm" v-model="shift">
        <option value="">All</option>
        <option value="morning">Morning</option>
        <option value="afternoon">Afternoon</option>
        <option value="night">Night</option>
      </select>
    </div>
    <item-component
      v-for="(item, index) in items"
      :key="index"
      :data="item"
      :type="type"
    ></item-component>
    <div v-if="type == 'rescuers'">
      Total: {{ numberOfRescuersPerShift(shift) }}
    </div>
  </div>
</template>

<script>
import ItemComponent from "@/components/ItemComponent.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "ItemListComponent",
  data: () => ({
    shift: "",
  }),
  components: {
    ItemComponent,
  },
  props: {
    type: String,
  },
  computed: {
    ...mapState({
      nurses: (state) => state.nurses,
      doctors: (state) => state.doctors,
      cars: (state) => state.devices.cars,
      phones: (state) => state.devices.phones,
      resuscitationKits: (state) => state.devices.resuscitationKits,
    }),
    //...mapGetters(["rescuersPerShift", "numberOfRescuersPerShift"]),
    ...mapGetters({
      rescuersPerShift: "rescuersPerShift",
      numberOfRescuersPerShift: "numberOfRescuersPerShift",
    }),
    items() {
      switch (this.type) {
        case "nurses":
          return this.nurses;
        case "rescuers":
          return this.rescuersPerShift(this.shift);
        case "doctors":
          return this.doctors;
        case "cars":
          return this.cars;
        case "phones":
          return this.phones;
        case "resuscitation-kits":
          return this.resuscitationKits;
      }
      return [];
    },
  },
};
</script>
