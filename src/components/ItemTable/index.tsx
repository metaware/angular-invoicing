import { InvoiceData } from "../../types/Invoice"

type Props = {
  children: React.ReactNode
  state: InvoiceData
  setState: React.Dispatch<React.SetStateAction<InvoiceData>>
}

const ItemTable: React.FC<Props> = ({ children, state }) => {
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
      <div className="row invoice-item">
        <div className="col-12 add-item-container">
          <a className="btn btn-primary" href="/#">
            [+]
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-10 text-end">Sub Total</div>
        <div className="col-2 text-end"></div>
      </div>
      <div className="row">
        <div className="col-10 text-end">
          Tax(%):
          <input style={{ width: "43px" }} />
        </div>
        <div className="col-2 text-end">{2}</div>
      </div>
      <div className="row">
        <div className="col-10 text-end">Grand Total:</div>
        <div className="col-2 text-end">{100}</div>
      </div>
    </div>
  )
}

export default ItemTable

{
  /* <ItemList state={state} setState={setState} />
      <div className="row invoice-item">
        <div className="col-12 add-item-container">
          <a href="/#" className="btn btn-primary">
            [+]
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-10 text-end">Sub Total</div>
        <div className="col-2 text-end"></div>
      </div>
      <div className="row">
        <div className="col-10 text-end">
          Tax(%):
          <input ng-model="invoice.tax" style={{ width: "43px" }} />
        </div>
        <div className="col-2 text-end"></div>
      </div>
      <div className="row">
        <div className="col-10 text-end">Grand Total:</div>
        <div className="col-2 text-end"></div>
      </div> */
}
