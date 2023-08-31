<template>
  <div>
    <div class="row">
      <div class="col">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(team, index) in teams"
            :key="index"
          >
            <team-component :data="team"></team-component>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TeamComponent from "@/components/TeamComponent";

export default {
  name: "TeamsListComponent",
  components: {
    TeamComponent,
  },
  computed: {
    ...mapState(["teams"]),
  },
};
</script>
