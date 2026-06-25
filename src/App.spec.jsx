import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { act } from 'react';

afterEach(() => {
    cleanup();
})

describe('App component', () => {
    it('Should render the heading', async () => {

        // Create empty real html node
        const container = document.createElement('div');

        // Attach to the DOM document
        document.body.appendChild(container);

        await (act(() => {
            // Create React root element
            const rootElement = createRoot(container);

            // Render component
            rootElement.render(<App />);
        }))



        // Get heading element from DOM
        const h1Element = document.querySelector('h1');

        //Asert
        expect(h1Element).toBeDefined();
        expect(h1Element.textContent).toBe('Vite + React');

        // Cleanup document 
        document.body.innerHTML = '';
    });

    it('Should have heading using testing-library/react', async () => {
        // Render component
        render(<App />);

        screen.debug();


        // Get heading element from DOM
        const h1Element = screen.getByRole('heading', { level: 1 });
        //Asert
        expect(h1Element).toBeDefined();
        expect(h1Element.textContent).toBe('Vite + React');

        // Cleanup document 
        document.body.innerHTML = '';
    });

    it('Should have heading using testing-library/jest-dom/vitest', async () => {
        // Render component
        render(<App />);

        screen.debug();


        // Get heading element from DOM
        const h1Element = screen.getByText('Vite + React');
        
        //Asert
        expect(h1Element).toBeInTheDocument();
        document.body.innerHTML = '';
    });

    it('Should increment count on button click', async () => {
        render(<App />);

        const buttonElement = screen.getByText('count is 0');

        fireEvent.click(buttonElement);

        expect(buttonElement.textContent).toBe('count is 1');
    })
});
