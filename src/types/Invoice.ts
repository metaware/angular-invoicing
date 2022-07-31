export interface InvoiceData {
  tax: string
  invoiceNumber: number
  currency: string
  conversion: string
  customerInfo: Info
  companyInfo: Info
  items: ItemData[]
}

export interface Info {
  name: string
  webLink: string
  address1: string
  address2: string
  postal: string
}

export interface ItemData {
  qty: string
  description: string
  discount: string
  cost: string
  costConverted: string
  key: string
}

export const initialInvoiceData = {
  tax: "13",
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
  items: [
    {
      qty: "10",
      description: "Gadget",
      cost: "9.95",
      costConverted: "",
      discount: "",
      key: "123e4567-e89b-12d3-a456-426614174000",
    },
  ],
}

export const initialItem = {
  qty: "",
  description: "",
  discount: "",
  cost: "",
  costConverted: "",
}
