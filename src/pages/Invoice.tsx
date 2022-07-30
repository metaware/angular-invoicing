import Header from "../components/Header"
import InvoiceInfo from "../components/InvoiceInfo"
import InvoiceItemList from "../components/InvoiceItemList"
import InvoiceItem from "../components/InvoiceItem"
import Button from "../components/Button"
import { useState } from "react"
import { InvoiceData, initialInvoiceData } from "../types/Invoice"

function Invoice() {
  const [invoiceData, setInvoiceData] =
    useState<InvoiceData>(initialInvoiceData)

  return (
    <div className="container">
      <Header
        page="invoice"
        invoiceData={invoiceData}
        setInvoiceData={setInvoiceData}
      />
      <InvoiceInfo />
      <InvoiceItemList>
        <InvoiceItem />
      </InvoiceItemList>
      <Button />
      <Button />
      <Button />
    </div>
  )
}

export default Invoice
