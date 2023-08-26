import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    title: "Medical Emergencies",
    team: {
      title: "ABC",
      nurse: "Nurse name",
      rescuer: "Rescuer name",
      doctor: "Doctor name",
      car: "License plate",
      phone: "12346",
      resuscitationKit: "Kit 0001",
    },
  },
});
