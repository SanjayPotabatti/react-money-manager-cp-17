// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <ul className="ulContainer">
      <li className="listItemBg1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="imgStyle"
          alt="balance"
        />
        <div className="balanceContainer">
          <p className="balancePara">Your Balance</p>
          <p className="amountPara">Rs {balance}</p>
        </div>
      </li>
      <li className="listItemBg2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="imgStyle"
          alt="income"
        />
        <div className="balanceContainer">
          <p className="balancePara">Your Balance</p>
          <p className="amountPara">Rs {income}</p>
        </div>
      </li>
      <li className="listItemBg3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="imgStyle"
          alt="expenses"
        />
        <div className="balanceContainer">
          <p className="balancePara">Your Balance</p>
          <p className="amountPara">Rs {expenses}</p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
