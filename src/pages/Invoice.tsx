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
import { motion, AnimatePresence } from "framer-motion"

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
    <div className="container" style={{ overflow: "hidden" }}>
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
        <AnimatePresence initial={false}>
          {invoiceData.items.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="row"
              style={{ width: "824px" }}
            >
              <Item
                key={item.key}
                index={index}
                state={invoiceData}
                setState={setInvoiceData}
                printMode={printMode}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </ItemTable>

      {printMode && (
        <Button
          btnClass="btn btn-primary me-2 mb-2 noPrint"
          btnName="Print"
          onClickFunction={printPage}
        />
      )}
      <Button
        btnClass="btn btn-primary me-2 mb-2 noPrint"
        btnName="Reset"
        onClickFunction={toggleReset}
      />
      <Button
        btnClass="btn btn-primary noPrint mb-2"
        btnName={printMode ? "Turn Off Print" : "Turn On Print Mode"}
        onClickFunction={togglePrintMode}
      />
    </div>
  )
}

export default Invoice
