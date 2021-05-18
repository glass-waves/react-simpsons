import SimpsonsQuote from './SimpsonsQuote';
import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
    rest.get(
        'https://thesimpsonsquoteapi.glitch.me/quotes',
        (req, res, ctx) => {
            return res(
                ctx.json([
                    {
                        quote: 'This is the quote',
                        character: 'Homer',
                        image: 'image.com',
                        characterDirection: 'Left',
                    },
                ])
            );
        }
    )
);

describe('SimsonsQuote', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('should display quote on button press', () => {
        render(<SimpsonsQuote />);
        const button = screen.getByRole('button');
        fireEvent.click(button);

        return waitFor(() => {
            screen.getByAltText('Homer');
            screen.getByText('This is the quote');
        })
    });
});
