import { render } from '@testing-library/react';

import UiTile from './ui-tile';

describe('UiTile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiTile />);
    expect(baseElement).toBeTruthy();
  });
});
