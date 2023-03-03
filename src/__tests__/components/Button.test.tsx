import { render, screen } from '../../utils/test-utils';
import { Button } from '../../components';

describe('Button', () => {
  beforeEach(() => {
    render(<Button>Click</Button>);
  });
  it('should render the button', () => {
    const button = screen.getByText('Click');
    expect(button).toBeDefined();
  });
});
