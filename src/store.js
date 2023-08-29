import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    title: "Medical Emergencies",
    team: {
      nurse: "",
      rescuer: "",
      doctor: "",
      car: "",
      phone: "",
      resuscitationKit: "",
    },
    nurses: [],
    rescuers: [],
    doctors: [],
    devices: {
      cars: [],
      phones: [],
      resuscitationKits: [],
    },
  },
  getters: {
    numberOfNurses(state) {
      return state.nurses.length;
    },
    rescuersPerShift(state) {
      return (shift) =>
        !shift
          ? state.rescuers
          : state.rescuers.filter((r) => r.shift === shift);
    },
    numberOfRescuers: (state) => state.rescuers.length,
    numberOfRescuersPerShift: (state, getters) => (shift) =>
      getters.rescuersPerShift(shift).length,
  },
  mutations: {
    setItemToTeam: (state, item) => {
      let t = item.type;
      let d = item.data;

      switch (t) {
        case "nurses":
          state.team.nurse = d.name;
          break;
        case "rescuers":
          state.team.rescuer = d.name;
          break;
        case "doctors":
          state.team.doctor = d.name;
          break;
        case "cars":
          state.team.car = d.licensePlate;
          break;
        case "phones":
          state.team.phone = d.phone;
          break;
        case "resuscitation-kits":
          state.team.resuscitationKit = d.kit;
          break;
      }
    },
    setNurses: (state, payload) => {
      state.nurses = payload;
    },
    setRescuers: (state, payload) => {
      state.rescuers = payload;
    },
    setDoctors: (state, payload) => {
      state.doctors = payload;
    },
    setCars: (state, payload) => {
      state.devices.cars = payload;
    },
    setPhones: (state, payload) => {
      state.devices.phones = payload;
    },
    setResuscitationKits: (state, payload) => {
      state.devices.resuscitationKits = payload;
    },
  },
});
