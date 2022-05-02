export interface IOrdersData {
  name: string;
  attach: boolean;
  add: boolean;
  modify: boolean;
  delete: boolean;
}
export const pTranslator: IOrdersData[] = [
  {
    name: "Dashboard",
    attach: true,
    add: true,
    modify: false,
    delete: true
  },
  {
    name: "Inbounds",
    attach: true,
    add: true,
    modify: false,
    delete: true
  },
  {
    name: "Outbounds",
    attach: true,
    add: true,
    modify: false,
    delete: true
  },
  {
    name: "Inventory",
    attach: true,
    add: true,
    modify: false,
    delete: true
  },
  {
    name: "Orders",
    attach: true,
    add: true,
    modify: false,
    delete: true
  },
  {
    name: "Returns",
    attach: true,
    add: true,
    modify: false,
    delete: true
  },
  {
    name: "Errors",
    attach: true,
    add: true,
    modify: false,
    delete: true
  },
  {
    name: "Invoices",
    attach: true,
    add: true,
    modify: false,
    delete: true
  },
  {
    name: "Customers",
    attach: true,
    add: true,
    modify: false,
    delete: true
  },
  {
    name: "Team",
    attach: true,
    add: true,
    modify: false,
    delete: true
  },
  {
    name: "Warehouse Team",
    attach: true,
    add: true,
    modify: false,
    delete: true
  },
  {
    name: "Transporters",
    attach: true,
    add: true,
    modify: false,
    delete: true
  },
];
