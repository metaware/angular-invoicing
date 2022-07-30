import Header from "../components/Header"
import Info from "../components/Info"
import CurrencyConverter from "../components/CurrencyConverter/CurrencyConverter"
import ItemTable from "../components/ItemTable"
import Item from "../components/Item"
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
      <ItemTable state={invoiceData} setState={setInvoiceData}>
        {invoiceData.items.map((item, index) => (
          <Item
            key={item.key}
            index={index}
            state={invoiceData}
            setState={setInvoiceData}
          />
        ))}
      </ItemTable>

      <Button />
      <Button />
      <Button />
    </div>
  )
}

export default Invoice
