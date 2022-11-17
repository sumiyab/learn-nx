import { render } from '@testing-library/react';

import ReviewReviewDataAccessGames from './review-review-data-access-games';

describe('ReviewReviewDataAccessGames', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReviewReviewDataAccessGames />);
    expect(baseElement).toBeTruthy();
  });
});
