import { render } from '@testing-library/react';
import Card from './card.component';

describe('Card', () => {
  test('Renders Card', () => {
    render(<Card></Card>);
  });
});
