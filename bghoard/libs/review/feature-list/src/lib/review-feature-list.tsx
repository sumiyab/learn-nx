import styled from '@emotion/styled';
import '@bghoard/shared/ui-tile';
/* eslint-disable-next-line */
export interface ReviewFeatureListProps {}

const StyledReviewFeatureList = styled.div`
  color: pink;
`;

export function ReviewFeatureList(props: ReviewFeatureListProps) {
  return (
    <StyledReviewFeatureList>
      <h1>Welcome to ReviewFeatureList</h1>
    </StyledReviewFeatureList>
  );
}

export default ReviewFeatureList;
