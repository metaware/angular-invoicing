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
    <div className="currency-converter">
      <div className="title">Currency Converter</div>
      <div className="input-container">
        <span>From:</span>
        <select
          value={state.currency}
          defaultValue={state.currency}
          onChange={handleCurrencyChange}
        >
          {currenciesList.map((currency) => (
            <option key={Math.random()} value={currency.symbol}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="input-container">
        <span>To:</span>
        <select
          value={state.conversion}
          defaultValue={""}
          onChange={handleConversionChange}
        >
          <option value={""}>No conversion</option>
          {currenciesList
            .filter((currency) => currency.symbol !== state.currency)
            .map((currency) => (
              <option key={Math.random()} value={currency.symbol}>
                {currency.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  )
}

export default CurrencyConverter
