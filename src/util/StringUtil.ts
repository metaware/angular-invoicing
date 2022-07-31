export const capitalize = (str: string): string => {
  return str.toUpperCase()
}

export const capitalizeFirstLetter = (str: string): string => {
  const capitalized = str.toUpperCase().charAt(0) + str.slice(1)
  return capitalized
}

export const convertCurrency = (str: string): string => {
  switch (str) {
    case "$":
      return "USD"
      break
    case "£":
      return "GBP"
    case "CAD $":
      return "CAD"
      break
    case "€":
      return "EUR"
      break
    case "₹":
      return "INR"
      break
    case "kr":
      return "NOK"
      break
    default:
      return ""
  }
}
