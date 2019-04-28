import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  background: #e5556e;
  padding: 20px 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Menu = styled.button`
  padding: 0 10px 0;
  border: 0;
  background: transparent;
  margin: 0 0 8px;
  font-size: 16px;

  a {
    font-weight: bold;
    text-decoration: none;
    color: #fff;
  }

  img {
    margin-right: 30px;
    width: 20px;
    height: 20px;
  }

  &:hover {
    border-radius: 30%;
  }
`;

export const MenuIcon = styled.button`
  padding: 0 10px 0;
  border: 0;
  background: transparent;
  margin: 0 0 8px;
  font-size: 16px;

  a {
    font-weight: bold;
    text-decoration: none;
    color: #fff;
  }

  img {
    margin-right: 30px;
    width: 20px;
    height: 20px;
  }

  &:hover {
    border-radius: 30%;
  }
`;
