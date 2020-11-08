import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 10vh;

  border: 1px solid black;
`;

export const Logo = styled.div``;

export const Options = styled.div`
  display: flex;
  align-items: center;

  width: 500px;

  > a {
    text-decoration: none;

    & + a {
      margin: 0 50px;
    }

    > p {
      font-size: 15px;
      font-weight: bold;
      color: var(--gray);

      margin-bottom: 5px;
    }

    > div {
      height: 3px;
      width: 30px;
      background-color: var(--trail);
      border-radius: 300px;
    }
  }
`;

export const Search = styled.div``;