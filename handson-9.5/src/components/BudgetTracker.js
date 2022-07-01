import React from 'react';
import AddExpense from './AddExpense';

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
                { ...this.state.expenses[index], reconciled: !this.state.expenses[index].reconciled },
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
                <span className='form-control pe-1' style={{ maxWidth: 'fit-content' }}>&cent;</span>
                <div className='form-control ps-0 border-start-0'>{expense.amount}</div>
            </div>
            <div className='input-group'>
                <button className='btn btn-primary w-50' onClick={() => { this.beginEditExpense(expense) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                </button>
                <button className='btn btn-danger w-50' onClick={() => { this.deleteExpense(index) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                </button>
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
                <span className='form-control pe-1' style={{ maxWidth: 'fit-content' }}>&cent;</span>
                <input type='number' className='form-control ps-0 border-start-0' name='modifiedAmount' onChange={this.updateFormField} value={this.state.modifiedAmount} />
            </div>
            <div className='input-group'>
                <button className='btn btn-warning w-100' onClick={() => { this.updateExpense(index) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                    </svg>
                </button>
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
                <AddExpense
                    newDescription={this.state.newDescription}
                    newDate={this.state.newDate}
                    newCategory={this.state.newCategory}
                    newAmount={this.state.newAmount}
                    allCategories={this.allCategories}
                    updateFormField={this.updateFormField}
                    addExpense={this.addExpense}
                />
            </React.Fragment>
        )
    }

}