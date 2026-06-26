import { fireEvent, render, screen } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
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
    render(<TodoItem text="Test Todo" complete={false} />);

    const listItem = screen.getByRole('listitem');

    expect(listItem).not.toHaveStyle('text-decoration: line-through');
    expect(listItem).toHaveStyle('text-decoration: none');
});

it('Should call onClick handler when todo item is clicked', () => {
    const clickHandler = vi.fn();

    render(<TodoItem text="Test Todo" completed={false} onClickHandler={clickHandler} />);

    const listItem = screen.getByRole('listitem');

    fireEvent.click(listItem);
    expect(clickHandler).toHaveBeenCalled();
    expect(clickHandler).toHaveBeenCalledOnce();
    
    expect(clickHandler).not.toHaveBeenCalledTimes(2);
    fireEvent.click(listItem);
    expect(clickHandler).toHaveBeenCalledTimes(2);
});

it('Should call onClick handler by providing particular id when todo item is clicked', () => {
    const todoId = 1;
    const clickHandler = vi.fn();

    render(<TodoItem id={todoId} text="Test Todo" completed={false} onClickHandler={clickHandler} />);

    const listItem = screen.getByRole('listitem');

    fireEvent.click(listItem);
    const desiredCallIndex = 0;
    const desiredParamIndex = 0; 

    expect(clickHandler.mock.calls[desiredCallIndex][desiredParamIndex]).toEqual(todoId);
    expect(clickHandler).toHaveBeenCalledWith(todoId);


})
