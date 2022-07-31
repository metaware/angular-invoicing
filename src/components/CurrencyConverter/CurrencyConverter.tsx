import { v4 as uuid } from "uuid"
import { InvoiceData } from "../../types/Invoice"
import { currenciesList } from "../../types/CurrencyConverter"
import "./styles.css"
import React from "react"

type Props = {
  state: InvoiceData
  setState: React.Dispatch<React.SetStateAction<InvoiceData>>
}

const CurrencyConverter: React.FC<Props> = ({ state, setState }) => {
  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState({ ...state, currency: e.currentTarget.value })
    if (e.currentTarget.value === state.conversion)
      setState((prevState) => {
        return {
          ...prevState,
          conversion: "",
        }
      })
  }
  const handleConversionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState({ ...state, conversion: e.currentTarget.value })
  }
  return (
    <div className="currency-converter row justify-content-center">
      <div className="title">Currency Converter</div>
      <div className="input-container col-4">
        <span>From:</span>
        <select
          className="ms-2 my-2 custom-select"
          value={state.currency}
          onChange={handleCurrencyChange}
        >
          {currenciesList.map((currency) => (
            <option key={uuid()} value={currency.symbol}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="input-container col-4">
        <span>To:</span>
        <select
          className="ms-2 my-2"
          value={state.conversion}
          onChange={handleConversionChange}
        >
          <option value={""}>Select Currency</option>
          {currenciesList
            .filter((currency) => currency.symbol !== state.currency)
            .map((currency) => (
              <option key={uuid()} value={currency.symbol}>
                {currency.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default CurrencyConverter
