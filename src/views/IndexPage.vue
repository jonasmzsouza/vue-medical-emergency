<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand m-auto" href="#">Medical Emergencies</a>
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
};
</script>
