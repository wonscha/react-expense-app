import { connect } from 'react-redux';
import numeral from 'numeral';
import React from 'react';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
    </div>
  )
};

const mapStateToProps = (state) => ({
  expenseCount: getVisibleExpenses(state.expenses, state.filters).length,
  expensesTotal: getExpensesTotal(getVisibleExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);