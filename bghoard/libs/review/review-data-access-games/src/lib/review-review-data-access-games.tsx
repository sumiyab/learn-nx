import styled from '@emotion/styled';
import { ReviewUtilFormatters } from '@bghoard/review/util-formatters';
import { ReviewFeatureDetails } from '@bghoard/review/feature-details';
/* eslint-disable-next-line */
export interface ReviewReviewDataAccessGamesProps {}

const StyledReviewReviewDataAccessGames = styled.div`
  color: pink;
`;

export function ReviewReviewDataAccessGames(
  props: ReviewReviewDataAccessGamesProps
) {
  return (
    <StyledReviewReviewDataAccessGames>
      <h1>Welcome to ReviewReviewDataAccessGames</h1>
    </StyledReviewReviewDataAccessGames>
  );
}

export default ReviewReviewDataAccessGames;
