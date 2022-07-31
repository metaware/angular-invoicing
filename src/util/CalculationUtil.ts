import { ItemData } from "../types/Invoice"

export const calcTotal = (
  qty: string,
  cost: string,
  discount: string
): string => {
  const numQty = +qty
  const numCost = +cost
  const numDiscount = +discount

  if (
    isNaN(numQty) ||
    isNaN(numCost) ||
    isNaN(numDiscount) ||
    numQty < 0 ||
    numCost < 0 ||
    numDiscount < 0
  ) {
    return ""
  }

  const total = numQty * ((numCost * (100 - numDiscount)) / 100)

  if (total < 0) {
    return ""
  }

  return `${total.toFixed(2)}`
}

export const calcSubTotal = (items: ItemData[]) => {
  const subTotal = items[0].costConverted
    ? items.reduce(
        (acc, cur) =>
          acc + +cur.qty * ((+cur.costConverted * (100 - +cur.discount)) / 100),
        0
      )
    : items.reduce(
        (acc, cur) =>
          acc + +cur.qty * ((+cur.cost * (100 - +cur.discount)) / 100),
        0
      )

  if (subTotal < 0) {
    return ""
  }

  return `${subTotal.toFixed(2)}`
}

export const calcTaxTotal = (tax: number, items: ItemData[]) => {
  const taxTotal = (+calcSubTotal(items) * tax) / 100

  if (taxTotal < 0) {
    return ""
  }

  return `${taxTotal.toFixed(2)}`
}

export const isPositive = (str: string) => {
  return (+str >= 0 && str !== "" && true) || false
}

export const calcGrandTotal = (tax: number, items: ItemData[]) => {
  const grandTotal = +calcTaxTotal(tax, items) + +calcSubTotal(items)

  if (grandTotal < 0) {
    return ""
  }

  return `${grandTotal.toFixed(2)}`
}
