<template>
  <div>
    <div class="row">
      <div class="col">
        <h5><i class="bi-boxes me-2"></i>{{ personalizedLocalTitle }}</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-8">
        <p>Nurse: {{ team.nurse }}</p>
        <p>Rescuer: {{ team.rescuer }}</p>
        <p>Doctor: {{ team.doctor }}</p>
        <p>Car: {{ team.car }}</p>
        <p>Phone: {{ team.phone }}</p>
        <p>Resuscitation kit: {{ team.resuscitationKit }}</p>
      </div>
      <div class="col-12 col-md-4 text-center">
        <div class="row">
          <div class="col">
            <img
              class="img-fluid"
              :src="require('@/assets/ambulances/undefined.png')"
            />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <button type="button" class="btn btn-primary">Set up team</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TeamConfigurationComponent",
  data: () => ({
    title: "Team Configuration",
  }),
  /*
  computed: mapState(["team"]),
  computed: {
    e() {
      return this.$store.state.team;
    },
  },
  */
  computed: {
    ...mapState({
      team: (state) => state.team,
      personalizedLocalTitle(state) {
        return `${this.title} - ${state.team.title}`;
      },
    }),
  },
};
</script>
