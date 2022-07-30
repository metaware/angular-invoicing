import Header from "../components/Header"
import Info from "../components/Info"
import InvoiceItemList from "../components/InvoiceItemList"
import InvoiceItem from "../components/InvoiceItem"
import CurrencyConverter from "../components/CurrencyConverter/CurrencyConverter"
import Button from "../components/Button"
import { InvoiceData, initialInvoiceData } from "../types/Invoice"
import { useLocalStorage } from "../hooks/useLocalStorage"

function Invoice() {
  const [invoiceData, setInvoiceData] = useLocalStorage<InvoiceData>(
    "invoice",
    initialInvoiceData
  )

  return (
    <div className="container">
      <Header page="invoice" state={invoiceData} setState={setInvoiceData} />
      <Info state={invoiceData} setState={setInvoiceData} />
      <CurrencyConverter state={invoiceData} setState={setInvoiceData} />
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
