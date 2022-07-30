import React from "react"
import { InvoiceData, ItemData } from "../../types/Invoice"

type Props = {
  state: InvoiceData
  setState: React.Dispatch<React.SetStateAction<InvoiceData>>
  index: number
}

const Item: React.FC<Props> = ({ state, setState, index }) => {
  const { description, cost, discount, qty } = state.items[index]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const name = e.currentTarget.name as keyof ItemData
    state.items[index][name] = e.currentTarget.value
    setState({ ...state })
  }

  const calcTotal = (qty: string, cost: string, discount: string): string => {
    const numQty = +qty
    const numCost = +cost
    const numDiscount = +discount

    if (isNaN(numQty) || isNaN(numCost) || isNaN(numDiscount)) {
      return ""
    }

    const total = numQty * ((numCost * (100 - numDiscount)) / 100)

    if (total < 0) {
      return ""
    }

    return `${state.currency}${total.toFixed(2)}`
  }

  return (
    <>
      <div className="row invoice-item">
        <div className="col-1 remove-item-container">
          <a href="/#" className="btn btn-danger">
            [X]
          </a>
        </div>
        <div className="col-4 input-container">
          <input
            name="description"
            type="text"
            value={description}
            size={30}
            placeholder="Description"
            onChange={(e) => handleChange(e, index)}
          />
        </div>
        <div className="col input-container">
          <input
            name="qty"
            type="text"
            value={qty}
            size={7}
            placeholder="Quantity"
            onChange={(e) => handleChange(e, index)}
          />
        </div>
        <div className="col input-container">
          <input
            name="cost"
            type="text"
            value={cost}
            size={8}
            placeholder="Cost"
            onChange={(e) => handleChange(e, index)}
          />
        </div>
        <div className="col input-container">
          <input
            name="discount"
            type="text"
            value={discount}
            size={11}
            placeholder="Discount (%)"
            onChange={(e) => handleChange(e, index)}
          />
        </div>
        <div className="col text-end input-container">
          {calcTotal(qty, cost, discount)}
        </div>
      </div>
    </>
  )
}

export default Item
