import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReviewUtilFormattersProps {}

const StyledReviewUtilFormatters = styled.div`
  color: pink;
`;

export function ReviewUtilFormatters(props: ReviewUtilFormattersProps) {
  return (
    <StyledReviewUtilFormatters>
      <h1>Welcome to ReviewUtilFormatters</h1>
    </StyledReviewUtilFormatters>
  );
}

export default ReviewUtilFormatters;
