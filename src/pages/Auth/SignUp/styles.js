import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
`;

export const Form = styled.form`
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  label {
    flex: 1;
    font-size: 16px;
    font-weight: bold;
    font-family: inherit;
    margin-left: 22px;
  }
  input {
    flex: 1;
    height: 45px;
    margin-bottom: 20px;
    padding: 0 20px;
    background: transparent;
    border: 0;
    font-size: 20px;
    color: #ffffff;
    border-radius: 3px;
    opacity: 0.5;
  }
  button {
    height: 55px;
    padding: 0 20px;
    background: #e5556e;
    color: #fff;
    border: 0;
    border-radius: 50px;
    font-size: 16px;
    font-weight: bold;
    margin-left: 20px;
    margin-right: 20px;
    &:hover {
      background: #af3147;
    }
  }
  a {
    flex: 1;
    margin-top: 30px;
    text-decoration: none;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    opacity: 0.6;
  }
`;
