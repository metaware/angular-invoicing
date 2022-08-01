import Header from "../components/Header"
import Info from "../components/Info"
import CurrencyConverter from "../components/CurrencyConverter/CurrencyConverter"
import ItemTable from "../components/ItemTable"
import Item from "../components/Item"
import Button from "../components/Button"
import { InvoiceData, initialInvoiceData } from "../types/Invoice"
import { useLocalStorage } from "../hooks/useLocalStorage"
import React, { useState } from "react"
import { v4 as uuid } from "uuid"

function Invoice() {
  const [logo, setLogo] = useLocalStorage("logo", "../../assets/logo.svg")
  const [invoiceData, setInvoiceData] = useLocalStorage<InvoiceData>(
    "invoice",
    initialInvoiceData
  )
  const [printMode, setPrintMode] = useState<boolean>(false)

  const togglePrintMode = () => {
    setPrintMode(!printMode)
  }
  const toggleReset = () => {
    if (window.confirm("Are you sure you would like to clear the invoice?"))
      setInvoiceData((prevState) => {
        prevState = {
          ...initialInvoiceData,
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
          items: [{ ...initialInvoiceData.items[0], key: uuid() }],
        }
        return { ...prevState }
      })
    setLogo("../../assets/logo.svg")
  }

  const printPage = () => {
    window.print()
  }

  return (
    <div className="container">
      <Header
        page="invoice"
        state={invoiceData}
        setState={setInvoiceData}
        printMode={printMode}
        logo={logo}
        setLogo={setLogo}
      />
      <Info state={invoiceData} setState={setInvoiceData} />
      {!printMode && (
        <CurrencyConverter state={invoiceData} setState={setInvoiceData} />
      )}
      <ItemTable
        state={invoiceData}
        setState={setInvoiceData}
        printMode={printMode}
      >
        {invoiceData.items.map((item, index) => (
          <Item
            key={item.key}
            index={index}
            state={invoiceData}
            setState={setInvoiceData}
            printMode={printMode}
          />
        ))}
      </ItemTable>

      {printMode && (
        <Button
          btnClass="btn btn-primary btn-action noPrint"
          btnName="Print"
          onClickFunction={printPage}
        />
      )}
      <Button
        btnClass="btn btn-primary btn-action noPrint"
        btnName="Reset"
        onClickFunction={toggleReset}
      />
      <Button
        btnClass="btn btn-primary btn-action noPrint"
        btnName={printMode ? "Turn Off Print" : "Turn On Print Mode"}
        onClickFunction={togglePrintMode}
      />
    </div>
  )
}

export default Invoice
