import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
    it('Should render the heading', () => {
        render(<App />);
        expect(screen.getByText('Hello World')).toBeDefined();
    });
});
