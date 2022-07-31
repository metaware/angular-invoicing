import { convertCurrency } from "./StringUtil"
import axios from "axios"

export const getCurrencyRate = async (currency: string, conversion: string) => {
  const from = convertCurrency(currency)
  const to = convertCurrency(conversion)
  const response = await axios.get("https://api.exchangerate.host/convert", {
    params: { from, to },
  })

  return response.data.result
}
