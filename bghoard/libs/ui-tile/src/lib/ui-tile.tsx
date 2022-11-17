import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UiTileProps {}

const StyledUiTile = styled.div`
  color: pink;
`;

export function UiTile(props: UiTileProps) {
  return (
    <StyledUiTile>
      <h1>Welcome to UiTile!</h1>
    </StyledUiTile>
  );
}

export default UiTile;
