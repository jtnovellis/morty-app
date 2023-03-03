import { render, screen } from '../../utils/test-utils';
import { HomePage } from '../../pages';

describe('HomePage', () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  it('should render the home page', () => {
    const title = screen.getByText('Hello world!');
    expect(title).toBeDefined();
  });
});
