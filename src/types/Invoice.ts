export interface InvoiceData {
  tax: number
  invoiceNumber: number
  currency: string
  conversion: string
  customerInfo: Info
  companyInfo: Info
  items: Item[]
}

export interface Info {
  name: string
  webLink: string
  address1: string
  address2: string
  postal: string
}

export interface Item {
  qty: number
  description: string
  cost: number
  key: string
}

export const initialInvoiceData = {
  tax: 13,
  invoiceNumber: 10,
  currency: "$",
  conversion: "",
  customerInfo: {
    name: "Mr. John Doe",
    webLink: "John Doe Designs Inc.",
    address1: "1 Infinite Loop",
    address2: "Cupertino, California, US",
    postal: "90210",
  },
  companyInfo: {
    name: "Ploomes Sistemas Empresariais LTDA",
    webLink: "www.ploomes.com",
    address1: "R. Ferreira de Araújo, 79",
    address2: "Pinheiros, SP - Brazil",
    postal: "05428-000",
  },
  items: [{ qty: 10, description: "Gadget", cost: 9.95, key: "object:27" }],
}
