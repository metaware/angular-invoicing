import InvoiceHeader from "../components/InvoiceHeader"
import InvoiceInfo from "../components/InvoiceInfo"
import InvoiceItemList from "../components/InvoiceItemList"
import InvoiceItem from "../components/InvoiceItem"
import Button from "../components/Button"

function Invoice() {
  return (
    <div className="container">
      <InvoiceHeader />
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
