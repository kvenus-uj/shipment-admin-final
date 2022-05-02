export interface IOrdersData {
  name: string;
  attach: boolean;
  add: boolean;
  modify: boolean;
  delete: boolean;
}
export const pSeller: IOrdersData[] = [
  {
    name: "Dashboard",
    attach: true,
    add: false,
    modify: true,
    delete: true
  },
  {
    name: "Inbounds",
    attach: true,
    add: false,
    modify: true,
    delete: true
  },
  {
    name: "Outbounds",
    attach: true,
    add: false,
    modify: true,
    delete: true
  },
  {
    name: "Inventory",
    attach: true,
    add: false,
    modify: true,
    delete: true
  },
  {
    name: "Orders",
    attach: true,
    add: false,
    modify: true,
    delete: true
  },
  {
    name: "Returns",
    attach: true,
    add: false,
    modify: true,
    delete: true
  },
  {
    name: "Errors",
    attach: true,
    add: false,
    modify: true,
    delete: true
  },
  {
    name: "Invoices",
    attach: true,
    add: false,
    modify: true,
    delete: true
  },
  {
    name: "Customers",
    attach: true,
    add: false,
    modify: true,
    delete: true
  },
  {
    name: "Team",
    attach: true,
    add: false,
    modify: true,
    delete: true
  },
  {
    name: "Warehouse Team",
    attach: true,
    add: false,
    modify: true,
    delete: true
  },
  {
    name: "Transporters",
    attach: true,
    add: false,
    modify: true,
    delete: true
  },
];
