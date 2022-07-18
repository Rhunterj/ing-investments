import styled from 'styled-components';

export const Row = styled.tr`
  td:nth-child(3), td:nth-child(4) {
    color: ${courseStatus => courseStatus ? 'green' : 'red'}
  }
`