import { v4 as uuid } from "uuid"
import React from "react"
import { initialItem, InvoiceData } from "../../types/Invoice"
import {
  calcGrandTotal,
  calcSubTotal,
  calcTaxTotal,
  isPositive,
} from "../../util/CalculationUtil"

type Props = {
  children: React.ReactNode
  state: InvoiceData
  setState: React.Dispatch<React.SetStateAction<InvoiceData>>
  printMode: boolean
}

const ItemTable: React.FC<Props> = ({
  children,
  state,
  setState,
  printMode,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, tax: e.currentTarget.value })
  }

  const handleAddClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    state.items.push({ ...initialItem, key: uuid() })
    setState({ ...state })
  }

  return (
    <div className="items-table">
      <div className="row header">
        <div className="col-1">&nbsp;</div>
        <div className="col-4">Description</div>
        <div className="col">Quantity</div>
        <div className="col">Cost {state.currency}</div>
        <div className="col">Discount (%)</div>
        <div className="col text-end">Total</div>
      </div>
      {children}
      {!printMode && (
        <div className="row invoice-item">
          <div className="col-12 add-item-container">
            <a className="btn btn-primary" href="/#" onClick={handleAddClick}>
              [+]
            </a>
          </div>
        </div>
      )}
      <div className="row">
        <div className="col-10 text-end">Sub Total:</div>
        <div className="col-2 text-end">
          {isPositive(calcSubTotal(state.items)) && (
            <span>
              {state.currency}
              {calcSubTotal(state.items)}
            </span>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-10 text-end">
          Tax(%):
          <input
            style={{ width: "43px" }}
            type="text"
            value={state.tax}
            onChange={handleChange}
          />
        </div>
        <div className="col-2 text-end">
          {isPositive(calcTaxTotal(+state.tax, state.items)) && (
            <span>
              {state.currency}
              {calcTaxTotal(+state.tax, state.items)}
            </span>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-10 text-end">Grand Total:</div>
        <div className="col-2 text-end">
          {isPositive(calcGrandTotal(+state.tax, state.items)) && (
            <span>
              {state.currency}
              {calcGrandTotal(+state.tax, state.items)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ItemTable
