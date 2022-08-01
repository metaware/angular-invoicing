import React, { useEffect, useState } from "react"
import { InvoiceData, ItemData } from "../../types/Invoice"
import { calcTotal, isPositive } from "../../util/CalculationUtil"
import { getCurrencyRate } from "../../util/APIUtil"

type Props = {
  state: InvoiceData
  setState: React.Dispatch<React.SetStateAction<InvoiceData>>
  index: number
  printMode: boolean
}

const Item: React.FC<Props> = ({ state, setState, index, printMode }) => {
  const { description, cost, discount, qty, costConverted } = state.items[index]
  const [conversionRate, setConversionRate] = useState<number>(0)

  useEffect(() => {
    const getRate = async () => {
      try {
        const rate = await getCurrencyRate(state.currency, state.conversion)

        if (rate) {
          setConversionRate(rate)
        }
      } catch (error) {
        console.error(error)
      }
    }

    if (state.conversion !== "") {
      getRate()
      setState((prevState) => {
        prevState.items[index].costConverted = (
          +prevState.items[index].cost * conversionRate
        )
          .toFixed(2)
          .toString()
        return { ...prevState }
      })
    } else {
      setConversionRate(0)
      setState((prevState) => {
        prevState.items[index].costConverted = ""

        return { ...prevState }
      })
    }
  }, [state.conversion, state.currency, conversionRate, index, setState])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const name = e.currentTarget.name as keyof ItemData
    state.items[index][name] = e.currentTarget.value

    if (state.items[index].costConverted !== "") {
      state.items[index].costConverted = e.currentTarget.value
    }

    setState({ ...state })
  }

  const handleDeleteClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number
  ) => {
    e.preventDefault()
    state.items = state.items.filter((item, itemIndex) => itemIndex !== index)
    setState({ ...state })
  }

  return (
    <>
      <div className="row invoice-item">
        <div className="col-1 remove-item-container">
          {!printMode && (
            <a
              href="/#"
              className="btn btn-danger"
              onClick={(e) => {
                handleDeleteClick(e, index)
              }}
            >
              [X]
            </a>
          )}
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
            value={costConverted ? costConverted : cost}
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
          {isPositive(calcTotal(qty, cost, discount)) && (
            <span>
              {state.conversion ? state.conversion : state.currency}
              {costConverted
                ? calcTotal(qty, costConverted, discount)
                : calcTotal(qty, cost, discount)}
            </span>
          )}
        </div>
      </div>
    </>
  )
}

export default Item
