import React from 'react';

export default function AddExpense(props) {
    return (
        <React.Fragment>
            <div className='container border border-5 pt-3 pb-3 mb-5'>
                <div className='input-group'>
                    <span className='input-group-text fs-5'>Description: </span>
                    <input type='text' className='form-control fs-5' name='newDescription' onChange={props.updateFormField} value={props.newDescription} />
                </div>
                <div className='input-group'>
                    <span className='input-group-text'>Date: </span>
                    <input type='text' className='form-control' name='newDate' onChange={props.updateFormField} value={props.newDate} />
                </div>
                <div className='input-group'>
                    <span className='input-group-text'>Category: </span>
                    <select className='form-select' name='newCategory' onChange={props.updateFormField} value={props.newCategory}>
                        {props.allCategories.map(c => <option value={c.value}>{c.display}</option>)}
                    </select>
                </div>
                <div className='input-group'>
                    <span className='input-group-text'>Amount: </span>
                    <span className='form-control pe-1' style={{ maxWidth: 'fit-content' }}>&cent;</span>
                    <input type='number' className='form-control ps-0 border-start-0' name='newAmount' onChange={props.updateFormField} value={props.newAmount} />
                </div>
                <div className='input-group'>
                    <button className='btn btn-success w-100' onClick={props.addExpense}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}