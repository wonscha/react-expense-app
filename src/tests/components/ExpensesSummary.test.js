import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary when one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={9434} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary when multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={9434} />);
  expect(wrapper).toMatchSnapshot();
})