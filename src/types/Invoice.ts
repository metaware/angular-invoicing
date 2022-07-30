export interface InvoiceData {
  tax: number
  invoiceNumber: number
  customerInfo: {
    name: string
    webLink: string
    address1: string
    address2: string
    postal: string
  }
  companyInfo: {
    name: string
    webLink: string
    address1: string
    address2: string
    postal: string
  }
  items: Item[]
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
  customerInfo: {
    name: "Mr. John Doe",
    webLink: "John Doe Designs Inc.",
    address1: "1 Infinite Loop",
    address2: "Cupertino, California, US",
    postal: "90210",
  },
  companyInfo: {
    name: "Metaware Labs",
    webLink: "www.metawarelabs.com",
    address1: "123 Yonge Street",
    address2: "Toronto, ON, Canada",
    postal: "M5S 1B6",
  },
  items: [{ qty: 10, description: "Gadget", cost: 9.95, key: "object:27" }],
}
