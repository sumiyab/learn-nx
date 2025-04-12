import styled from '@emotion/styled';
import { ReviewFeatureList } from '@bghoard/review/feature-list';
/* eslint-disable-next-line */
export interface ReviewFeatureDetailsProps {}

const StyledReviewFeatureDetails = styled.div`
  color: pink;
`;

export function ReviewFeatureDetails(props: ReviewFeatureDetailsProps) {
  return (
    <StyledReviewFeatureDetails>
      <h1>Welcome to ReviewFeatureDetails</h1>
    </StyledReviewFeatureDetails>
  );
}

export default ReviewFeatureDetails;
