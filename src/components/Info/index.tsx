import React from "react"
import { InvoiceData, Info } from "../../types/Invoice"
import "./styles.css"

type Props = {
  state: InvoiceData
  setState: React.Dispatch<React.SetStateAction<InvoiceData>>
}

const InvoiceInfo: React.FC<Props> = ({ state, setState }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name
    const about = name.split(".")[0] as keyof InvoiceData
    const info = name.split(".")[1] as keyof Info
    ;(state[about] as Info)[info] = e.currentTarget.value
    setState({ ...state })
  }
  return (
    <div>
      <div className="row infos">
        <div className="col-6">
          <div className="input-container">
            <input
              type="text"
              name="customerInfo.name"
              value={state.customerInfo.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="customerInfo.webLink"
              value={state.customerInfo.webLink}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="customerInfo.address1"
              value={state.customerInfo.address1}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="customerInfo.address2"
              value={state.customerInfo.address2}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="customerInfo.postal"
              value={state.customerInfo.postal}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-6 right">
          <div className="input-container">
            <input
              type="text"
              name="companyInfo.name"
              value={state.companyInfo.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="companyInfo.webLink"
              value={state.companyInfo.webLink}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="companyInfo.address1"
              value={state.companyInfo.address1}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="companyInfo.address2"
              value={state.companyInfo.address2}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="companyInfo.postal"
              value={state.companyInfo.postal}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceInfo
