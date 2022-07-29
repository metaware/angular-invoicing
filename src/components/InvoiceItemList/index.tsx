type Props = {
  children: JSX.Element
}

const InvoiceItemList: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <h2>Invoice Item List</h2>
      {children}
    </div>
  )
}

export default InvoiceItemList
