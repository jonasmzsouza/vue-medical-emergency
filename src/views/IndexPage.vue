<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand m-auto" href="#">{{ $store.state.title }}</a>
      </div>
    </nav>

    <div class="container">
      <div class="row mt-5 bg-light px-2">
        <div class="col-12 col-md-6 py-4">
          <professionals-component />
        </div>

        <div class="col-12 col-md-6 py-4">
          <devices-component></devices-component>
        </div>
      </div>

      <div class="row mt-5 mb-5 bg-light px-2">
        <div class="col py-4">
          <team-configuration-component></team-configuration-component>
        </div>
      </div>

      <div class="row mt-5 mb-5 bg-light px-2">
        <div class="col py-4">
          <teams-component></teams-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import TeamConfigurationComponent from "@/components/TeamConfigurationComponent.vue";
import DevicesComponent from "@/components/DevicesComponent.vue";
import TeamsComponent from "@/components/TeamsComponent.vue";
import ProfessionalsComponent from "@/components/ProfessionalsComponent.vue";

export default {
  components: {
    TeamConfigurationComponent,
    DevicesComponent,
    TeamsComponent,
    ProfessionalsComponent,
  },
  name: "IndexPage",
  props: {
    msg: String,
  },
  methods: {
    ...mapMutations([
      "setNurses",
      "setRescuers",
      "setDoctors",
      "setDevices",
      "setCars",
      "setPhones",
      "setResuscitationKits",
    ]),
  },
  created() {
    fetch("http://localhost:3000/nurses")
      .then((response) => response.json())
      .then((data) => this.setNurses(data));

    fetch("http://localhost:3000/rescuers")
      .then((response) => response.json())
      .then((data) => this.setRescuers(data));

    fetch("http://localhost:3000/doctors")
      .then((response) => response.json())
      .then((data) => this.setDoctors(data));

    fetch("http://localhost:3000/devices")
      .then((response) => response.json())
      .then((data) => {
        this.setCars(data.cars);
        this.setPhones(data.phones);
        this.setResuscitationKits(data.resuscitationKits);
      });
  },
};
</script>
