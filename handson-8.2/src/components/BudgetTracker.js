import React from 'react';

export default class BudgetTracker extends React.Component {

    state = {
        expenses: [
            {
                _id: 1,
                date: "2022-06-10",
                description: "MRT",
                category: "transport",
                amount: 100,
                reconciled: false
            },
            {
                _id: 2,
                date: "2022-06-20",
                description: "Bubble Tea",
                category: "food",
                amount: 500,
                reconciled: false
            },
            {
                _id: 3,
                date: "2022-06-30",
                description: "YouTube Premium",
                category: "entertainment",
                amount: 1198,
                reconciled: false
            }
        ],
        newDate: '',
        newDescription: '',
        newCategory: 'transport',
        newAmount: '',
        expenseBeingEdited: null,
        modifiedDate: '',
        modifiedDescription: '',
        modifiedCategory: '',
        modifiedAmount: ''
    }

    allCategories = [
        {
            value: "transport",
            display: "Transport"
        },
        {
            value: "entertainment",
            display: "Entertainment"
        },
        {
            value: "food",
            display: "Food"
        },
        {
            value: "bills",
            display: "Bills"
        },
        {
            value: "loans",
            display: "Loans"
        },
        {
            value: "others",
            display: "Others"
        }
    ]

    updateFormField = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    updateExpenseReconciled = (expense, index) => {
        this.setState({
            expenses: [
                ...this.state.expenses.slice(0, index),
                {...this.state.expenses[index], reconciled: !this.state.expenses[index].reconciled},
                ...this.state.expenses.slice(index + 1)
            ]
        })
    }

    addExpense = () => {
        let newExpense = {
            _id: this.state.expenses.length === 0 ? 1 : this.state.expenses[this.state.expenses.length - 1]._id + 1,
            date: this.state.newDate,
            description: this.state.newDescription,
            category: this.state.newCategory,
            amount: parseInt(this.state.newAmount),
            reconciled: false
        }
        this.setState({
            expenses: [...this.state.expenses, newExpense]
        })
    }

    beginEditExpense = expense => {
        this.setState({
            expenseBeingEdited: expense,
            modifiedDate: expense.date,
            modifiedDescription: expense.description,
            modifiedCategory: expense.category,
            modifiedAmount: expense.amount
        })
    }

    updateExpense = index => {
        let modifiedExpense = {
            _id: this.state.expenseBeingEdited._id,
            date: this.state.modifiedDate,
            description: this.state.modifiedDescription,
            category: this.state.modifiedCategory,
            amount: this.state.modifiedAmount,
            reconciled: false
        }
        this.setState({
            expenses: [
                ...this.state.expenses.slice(0, index),
                modifiedExpense,
                ...this.state.expenses.slice(index + 1)
            ],
            expenseBeingEdited: null
        })
    }

    deleteExpense = index => {
        this.setState({
            expenses: [
                ...this.state.expenses.slice(0, index),
                ...this.state.expenses.slice(index + 1)
            ]
        })
    }

    renderExpense = (expense, index) => (
        <div className='mb-3'>
            <div className='input-group'>
                <div className='input-group-text'>
                    <input className='form-check-input mt-0' type="checkbox" onChange={() => { this.updateExpenseReconciled(expense, index) }} checked={expense.reconciled} />
                </div>
                <div className='form-control fs-5'>{expense.description}</div>
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Date: </span>
                <div className='form-control'>{expense.date}</div>
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Category: </span>
                <div className='form-control'>{expense.category}</div>
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Amount: </span>
                <span className='form-control pe-1' style={{maxWidth: 'fit-content'}}>&cent;</span>
                <div className='form-control ps-0 border-start-0'>{expense.amount}</div>
            </div>
            <div className='input-group'>
                <button className='btn btn-primary w-50' onClick={() => { this.beginEditExpense(expense) }}>Edit</button>
                <button className='btn btn-danger w-50' onClick={() => { this.deleteExpense(index) }}>Delete</button>
            </div>
        </div>
    )

    renderEditExpense = (expense, index) => (
        <div className='mb-3'>
            <div className='input-group'>
                <span className='input-group-text fs-5'>Description: </span>
                <input type='text' className='form-control fs-5' name='modifiedDescription' onChange={this.updateFormField} value={this.state.modifiedDescription} />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Date: </span>
                <input type='text' className='form-control' name='modifiedDate' onChange={this.updateFormField} value={this.state.modifiedDate} />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Category: </span>
                <select className='form-select' name='modifiedCategory' onChange={this.updateFormField} value={this.state.modifiedCategory}>
                    {this.allCategories.map(c => <option value={c.value}>{c.display}</option>)}
                </select>
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Amount: </span>
                <span className='form-control pe-1' style={{maxWidth: 'fit-content'}}>&cent;</span>
                <input type='number' className='form-control ps-0 border-start-0' name='modifiedAmount' onChange={this.updateFormField} value={this.state.modifiedAmount} />
            </div>
            <div className='input-group'>
                <button className='btn btn-warning w-100' onClick={() => { this.updateExpense(index) }}>Update</button>
            </div>
        </div>
    )

    render() {
        return (
            <React.Fragment>
                <h1 className='text-center'>Budget Tracker</h1>
                <div className='container border border-5 pt-3'>
                    {this.state.expenses.map((expense, index) =>
                        !this.state.expenseBeingEdited || this.state.expenseBeingEdited._id !== expense._id ?
                            this.renderExpense(expense, index)
                            :
                            this.renderEditExpense(expense, index)
                    )}
                </div>
                <h1 className='text-center'>Add New Expense</h1>
                <div className='container border border-5 pt-3 pb-3 mb-5'>
                    <div className='input-group'>
                        <span className='input-group-text fs-5'>Description: </span>
                        <input type='text' className='form-control fs-5' name='newDescription' onChange={this.updateFormField} value={this.state.newDescription} />
                    </div>
                    <div className='input-group'>
                        <span className='input-group-text'>Date: </span>
                        <input type='text' className='form-control' name='newDate' onChange={this.updateFormField} value={this.state.newDate} />
                    </div>
                    <div className='input-group'>
                        <span className='input-group-text'>Category: </span>
                        <select className='form-select' name='newCategory' onChange={this.updateFormField} value={this.state.newCategory}>
                            {this.allCategories.map(c => <option value={c.value}>{c.display}</option>)}
                        </select>
                    </div>
                    <div className='input-group'>
                        <span className='input-group-text'>Amount: </span>
                        <span className='form-control pe-1' style={{maxWidth: 'fit-content'}}>&cent;</span>
                        <input type='number' className='form-control ps-0 border-start-0' name='newAmount' onChange={this.updateFormField} value={this.state.newAmount} />
                    </div>
                    <div className='input-group'>
                        <button className='btn btn-success w-100' onClick={this.addExpense}>Add</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}