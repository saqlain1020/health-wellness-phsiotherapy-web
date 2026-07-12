export type Location = {
  id: string;
  name: string;
  area: string;
  addressLines: string[];
  phones: string[];
  phoneHrefs: string[];
  hours: string;
  mapsQuery: string;
  formValue: "Tariq-Road" | "DHA-Phase-V" | "Home-Service";
};

export const locations: Location[] = [
  {
    id: "tariq-road",
    name: "Tariq Road",
    area: "P.E.C.H.S, Karachi",
    addressLines: [
      "Khalid Bin Walid Rd, Block 2 P.E.C.H.S, Karachi Pakistan",
      "M 151 Block 2 P.E.C.H.S, 74000",
    ],
    phones: ["(+92) 323 9571533"],
    phoneHrefs: ["tel:+923239571533"],
    hours: "Mon-Sat: 11AM - 11PM",
    mapsQuery:
      "Khalid Bin Walid Rd, Block 2 P.E.C.H.S, Karachi Pakistan M 151",
    formValue: "Tariq-Road",
  },
  {
    id: "dha-phase-v",
    name: "DHA Phase V",
    area: "Defence V, Karachi",
    addressLines: [
      "Khayaban-e-Badar, Badar Commercial Area Defence V, Karachi Pakistan",
      "C-33C Badar Commercial Area Defence V, 75500",
    ],
    phones: ["(+92) 323 9571533", "(+92) 334 3655597"],
    phoneHrefs: ["tel:+923239571533", "tel:+923343655597"],
    hours: "Mon-Sat: 11AM - 11PM",
    mapsQuery:
      "C-33C Badar Commercial Area Defence V, Karachi Pakistan",
    formValue: "DHA-Phase-V",
  },
];

export const homeServiceNote =
  "Visit Us Today! Or Get Home Based Service — available all over Karachi.";
