import { Progress } from 'antd'
import React from 'react'
import '../Resources/analytics.css'


function Analytics({ transactions }) {

    const totalTransactions = transactions.length
    const totalIncomeTransactions = transactions.filter(transaction => transaction.type === 'income')
    const totalExpenseTransactions = transactions.filter(transaction => transaction.type === 'expense')
    const totalIncomeTransactionsPercentage = (totalIncomeTransactions.length / totalTransactions) * 100
    const totalExpenseTransactionsPercentage = (totalExpenseTransactions.length / totalTransactions) * 100

    const totalTurnOver = transactions.reduce((acc, transaction) => acc + transaction.amount, 0)
    const totalIncomeTurnOver = transactions.filter((transactions) => transactions.type === 'income').reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalExpenseTurnOver = transactions.filter((transactions) => transactions.type === 'expense').reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalIncomeTurnoverPercentage = (totalIncomeTurnOver / totalTurnOver) * 100
    const totalExpenseTurnoverPercentage = (totalExpenseTurnOver / totalTurnOver) * 100

    const categories = ['fuel', 'movie', 'salary', 'investment',
        'freelance', 'food', 'travel', 'loan',
        'entertainment', 'medical']

    return (
        <div className='analytics'>

            <div className='row'>
                <div className="col-md-4 mt-3">
                    <div className="transactions-count">
                        <h4>Total Transactions : {totalTransactions}</h4>
                        <hr />
                        <h5>Income : {totalIncomeTransactions.length} </h5>
                        <h5>Expense : {totalExpenseTransactions.length} </h5>
                        <div className='progress-bars'>

                            <Progress className="mx-5" strokeColor="#3FBC1B" type="circle" percent={totalIncomeTransactionsPercentage.toFixed(0)} />
                            <Progress strokeColor="#EA2A2A" type="circle" percent={totalExpenseTransactionsPercentage.toFixed(0)} />

                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="transactions-count mx-3">
                        <h4>Total Turnover : {totalTurnOver}</h4>
                        <hr />
                        <h5>Income : {totalIncomeTurnOver} </h5>
                        <h5>Expense : {totalExpenseTurnOver} </h5>
                        <div className='progress-bars'>

                            <Progress className="mx-5" strokeColor="#3FBC1B" type="circle" percent={totalIncomeTurnoverPercentage.toFixed(0)} />
                            <Progress strokeColor="#EA2A2A" type="circle" percent={totalExpenseTurnoverPercentage.toFixed(0)} />

                        </div>
                    </div>
                </div>

            </div>
            <hr/>
            <div className='row'>

                <div className='col-md-6'>
                    <div className='category-analysis'>
                        <h3>Income - Category wise</h3>
                        {categories.map((category) => {
                            const amount = transactions.filter(t => t.type == 'income' && t.category === category).reduce((acc, t) => acc + t.amount, 0)
                            return (
                                amount > 0 && <div className='category-card'>
                                    <h5>{category}</h5>
                                    <Progress strokeColor='#17C9E6' percent={((amount / totalIncomeTurnOver) * 100).toFixed(0)} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='col-md-6'>
                 <div className='category-analysis'>
                        <h3>Expense - Category wise</h3>
                        {categories.map((category) => {
                            const amount = transactions.filter(t => t.type == 'expense' && t.category === category).reduce((acc, t) => acc + t.amount, 0)
                            return (
                                amount > 0 &&<div className='category-card'>
                                    <h5>{category}</h5>
                                    <Progress strokeColor='#17C9E6' percent={((amount / totalExpenseTurnOver) * 100).toFixed(0)} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics 