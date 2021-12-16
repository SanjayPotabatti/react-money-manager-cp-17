import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    titleText: '',
    amountText: '',
    optionId: 'INCOME',
    historyList: [],
    balance: 0,
    income: 0,
    expenses: 0,
  }

  onChangeTitle = event => {
    this.setState({titleText: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountText: event.target.value})
  }

  render() {
    const {balance, income, expenses, titleText, amountText} = this.state
    return (
      <div className="bgContainer">
        <div className="headerStyle">
          <h1 className="heading">Hi, Richard</h1>
          <p className="para">
            Welcome back to your{' '}
            <span className="heighlighted">Money Manager</span>
          </p>
        </div>
        <div>
          <div>
            <MoneyDetails
              balance={balance}
              income={income}
              expenses={expenses}
            />
          </div>
        </div>
        <div>
          <div className="inputContainer">
            <form className="formContainer">
              <h2>Add Transaction</h2>
              <label htmlFor="title" className="labelFormat">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                placeholder="TITLE"
                className="inputBox"
                value={titleText}
                onChange={this.onChangeTitle}
              />
              <label htmlFor="amount" className="labelFormat">
                AMOUNT
              </label>
              <input
                id="amount"
                type="text"
                placeholder="AMOUNT"
                className="inputBox"
                value={amountText}
                onChange={this.onChangeAmount}
              />
              <label htmlFor="type" className="labelFormat">
                TYPE
              </label>
              <select className="inputBox">
                <option>Income</option>
                <option>Expenses</option>
              </select>
              <button type="submit" className="addButton">
                Add
              </button>
            </form>
          </div>
          <div className="historyContainer">
            <p>History</p>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
