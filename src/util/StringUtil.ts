export const capitalize = (str: string): string => {
  return str.toUpperCase()
}

export const capitalizeFirstLetter = (str: string): string => {
  const capitalized = str.toUpperCase().charAt(0) + str.slice(1)
  return capitalized
}
