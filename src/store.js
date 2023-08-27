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
    nurses: [
      { id: 1, name: "João", schedule: "12x36" },
      { id: 2, name: "Maria", schedule: "12x36" },
      { id: 3, name: "Ana", schedule: "24x48" },
      { id: 4, name: "José", schedule: "24x48" },
    ],
    rescuers: [
      { id: 1, name: "Marcos", shift: "manhã" },
      { id: 2, name: "Felipe", shift: "tarde" },
      { id: 3, name: "Cláudia", shift: "tarde" },
      { id: 4, name: "Michele", shift: "noite" },
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
});
