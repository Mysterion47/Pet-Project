import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('ButtonComponentTest', () => {
  test('test button text', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('test button class', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});
