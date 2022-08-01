import "./style.css"
import { capitalize, capitalizeFirstLetter } from "../../util/StringUtil"
import { InvoiceData } from "../../types/Invoice"
import React, { useRef, useEffect, useState } from "react"

type Props = {
  page: string
  state: InvoiceData
  setState: React.Dispatch<React.SetStateAction<InvoiceData>>
  printMode: boolean
  logo: string
  setLogo: React.Dispatch<React.SetStateAction<string>>
}

const Header: React.FC<Props> = ({
  page,
  state,
  setState,
  printMode,
  logo,
  setLogo,
}) => {
  const [showLogo, setShowLogo] = useState<boolean>(true)
  const numberRef = useRef<HTMLInputElement | null>(null)
  const editRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    numberRef.current?.focus()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      invoiceNumber: +e.currentTarget.value,
    })
  }

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let file
    if (e.target.files instanceof FileList) file = e.target.files[0]
    if (file) setLogo(`${URL.createObjectURL(file)}`)
  }

  const handleEditClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    editRef.current?.click()
  }

  const handleShowClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setShowLogo(!showLogo)
  }

  return (
    <>
      <div className="row">
        <div className="col-12 heading">{capitalize(page)}</div>
      </div>
      <div className="row branding">
        <div className="col-6">
          <div className="invoice-number-container">
            <label htmlFor="invoice-number">
              {capitalizeFirstLetter(page)} #
            </label>
            <input
              type="number"
              id="invoiceNumber"
              value={state.invoiceNumber}
              onChange={handleChange}
              ref={numberRef}
            />
          </div>
        </div>
        <div className="col-6 logo-container">
          <input
            type="file"
            id="imgInp"
            ref={editRef}
            onChange={handleLogoChange}
          />
          {showLogo && (
            <img src={logo} id="company_logo" alt="Company Logo" height={35} />
          )}
          {!printMode && (
            <div>
              <div className="noPrint">
                <a href="/#" onClick={handleEditClick}>
                  Edit Logo
                </a>
                <a href="/#" id="remove_logo" onClick={handleShowClick}>
                  {showLogo ? "Hide logo" : "Show logo"}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Header
