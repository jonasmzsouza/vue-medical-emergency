import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    title: "Medical Emergencies",
    team: {
      title: "ABC",
      nurse: "",
      rescuer: "",
      doctor: "",
      car: "",
      phone: "",
      resuscitationKit: "",
    },
    teams: [],
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
    addTeamInTeams: (state, payload) => {
      state.teams.push(payload);
      state.team = {};
    },
  },
  //Implement business rules
  actions: {
    fetchDevices(context, { cars, phones, resuscitationKits }) {
      fetch("http://localhost:3000/devices")
        .then((response) => response.json())
        .then((data) => {
          if (cars) context.commit("setCars", data.cars);
          if (phones) context.commit("setPhones", data.phones);
          if (resuscitationKits)
            context.commit("setResuscitationKits", data.resuscitationKits);
        });
    },
    fetchProfessionals(context) {
      fetch("http://localhost:3000/nurses")
        .then((response) => response.json())
        .then((data) => context.commit("setNurses", data));

      fetch("http://localhost:3000/rescuers")
        .then((response) => response.json())
        .then((data) => context.commit("setRescuers", data));

      fetch("http://localhost:3000/doctors")
        .then((response) => response.json())
        .then((data) => context.commit("setDoctors", data));
    },
  },
});
