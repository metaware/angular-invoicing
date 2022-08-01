type Props = {
  btnClass?: string
  btnName?: string
  onClickFunction?: () => void
}

const Button: React.FC<Props> = ({ btnClass, btnName, onClickFunction }) => {
  return (
    <button className={btnClass} onClick={onClickFunction}>
      {btnName}
    </button>
  )
}

export default Button
