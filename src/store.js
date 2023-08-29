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
    nurses: [
      { id: 1, name: "João", schedule: "12x36" },
      { id: 2, name: "Maria", schedule: "12x36" },
      { id: 3, name: "Ana", schedule: "24x48" },
      { id: 4, name: "José", schedule: "24x48" },
    ],
    rescuers: [
      { id: 1, name: "Marcos", shift: "morning" },
      { id: 2, name: "Felipe", shift: "afternoon" },
      { id: 3, name: "Cláudia", shift: "afternoon" },
      { id: 4, name: "Michele", shift: "night" },
    ],
    doctors: [
      { id: 1, name: "André", schedule: "12x36" },
      { id: 2, name: "Roberta", schedule: "12x36" },
      { id: 3, name: "Carlos", schedule: "24x48" },
      { id: 4, name: "Juliana", schedule: "24x48" },
    ],
    devices: {
      cars: [
        { id: 1, licensePlate: "ABC-0000" },
        { id: 2, licensePlate: "BRA1A11" },
        { id: 3, licensePlate: "CBA-1111" },
        { id: 4, licensePlate: "ARB2B22" },
      ],
      phones: [
        { id: 1, phone: "+55 11 98888-8888" },
        { id: 2, phone: "+55 11 97777-7777" },
        { id: 3, phone: "+55 11 96666-6666" },
        { id: 4, phone: "+55 11 95555-5555" },
      ],
      resuscitationKits: [
        { id: 1, kit: "K0001" },
        { id: 2, kit: "K0002" },
        { id: 3, kit: "K0003" },
        { id: 4, kit: "K0004" },
      ],
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
  },
});
