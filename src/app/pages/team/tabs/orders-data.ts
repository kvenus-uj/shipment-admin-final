export interface IOrdersData {
  checked:boolean;
  id: string;
  pronoun: string;
  name: string;
  email: string;
  profile: string;
  active: string;
}
export const ordersData: IOrdersData[] = [
  {
    checked:false,
    id: "1",
    pronoun: "System",
    name: "Administrator",
    email: "admin@hipro.fr",
    profile: "SuperAdmin",
    active: "true"
  },
  {
    checked:false,
    id: "2",
    pronoun: "Houda",
    name: "Quabdelmoumen",
    email: "houda@hipro.fr",
    profile: "Logistician",
    active: "true"
  },
  {
    checked:false,
    id: "3",
    pronoun: "Qussama",
    name: "Qua",
    email: "qussama@hipro.fr",
    profile: "SuperAdmin",
    active: "true"
  }
];
