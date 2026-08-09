export type Location = {
  id: string;
  name: string;
  area: string;
  addressLines: string[];
  phones: string[];
  phoneHrefs: string[];
  hours: string;
  mapsQuery: string;
  formValue: "Shadman" | "Home-Service";
};

export const locations: Location[] = [
  {
    id: "shadman",
    name: "Shadman",
    area: "Shadman Town, Karachi",
    addressLines: [
      "C-15 Shahjahan Avenue Shadman 14/A Town, Karachi.",
    ],
    phones: ["0324-1458751", "0325-7269231"],
    phoneHrefs: ["tel:+923241458751", "tel:+923257269231"],
    hours: "Mon-Sat: 5PM - 8PM",
    mapsQuery: "C-15 Shahjahan Avenue Shadman 14/A Town, Karachi",
    formValue: "Shadman",
  },
];

export const homeServiceNote =
  "Visit Us Today! Or Get Home Based Service — available all over Karachi.";
