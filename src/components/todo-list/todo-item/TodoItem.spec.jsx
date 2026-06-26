import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import TodoItem from './TodoItem';


it('Should show todo item correctly', () => {
    render(<TodoItem text="Test Todo" />);

    const listItem = screen.getByRole('listitem');

    expect(listItem).toHaveTextContent('Test Todo');
});

it('Should have line-through when completed', () => {
    render(<TodoItem text="Test Todo" completed />);

    const listItem = screen.getByRole('listitem');

    expect(listItem).toHaveStyle('text-decoration: line-through');
});

it('Should NOT have line-through when completed', () => {
    render(<TodoItem text="Test Todo" complete={false}/>);

    const listItem = screen.getByRole('listitem');

    expect(listItem).not.toHaveStyle('text-decoration: line-through');
    expect(listItem).toHaveStyle('text-decoration: none');
});