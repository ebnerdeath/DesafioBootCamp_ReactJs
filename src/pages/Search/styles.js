import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

export const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  input {
    margin-top: 20px;
    padding-left: 10px;
    height: 50px;
    width: 80%;
    border-radius: 3px;
    border: 0;
    font-size: 15px;
    background: #2e2c39;
    color: #8e8e93;
    letter-spacing: 0;
    text-align: left;
  }
`;

export const Title = styled.p`
  padding-left: 10%;
  padding-top: 10px;
  font-weight: bold;
`;

export const List = styled.ul`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  flex-flow: row wrap;

  li {
    width: 320px;
    height: 200px;
    margin: 20px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    img {
      display: flex;
      border-radius: 10px 10px 0 0;
      height: 120px;
      width: 320px;
      margin-bottom: 20px;
    }
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  strong {
    padding-left: 10px;
    color: #222222;
  }

  p {
    padding-left: 10px;
    color: #999999;
  }

  button {
    margin-right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: 0;
    background: #e5556e;
  }
`;
