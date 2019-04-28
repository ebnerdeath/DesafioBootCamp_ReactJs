import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  h1 {
    color: white;
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    flex: 1;
    font-size: 16px;
    line-height: 28px;
    text-align: left;
    opacity: 0.8;
  }
  h3 {
    flex: 1;
    font-size: 16px;
    text-align: left;
    margin-top: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 300px;
  padding-top: 20px;
  flex-direction: column;
  line-height: 40px;
  label {
    font-size: 18px;
  }
  input {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin: 10px;
  }
`;

export const Button = styled.button`
  margin-top: 30px;
  margin-bottom: 30px;
  flex: 1;
  width: 100%;
  height: 55px;
  padding: 0 20px;
  background: #e5556e;
  color: #fff;
  border: 0;
  border-radius: 50px;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background: #af3147;
  }
`;

export const checkboxes = [
  {
    name: '1',
    key: '1',
    label: 'Front-End',
  },
  {
    name: '2',
    key: '2',
    label: 'Back-End',
  },
  {
    name: '3',
    key: '3',
    label: 'Mobile',
  },
  {
    name: '4',
    key: '4',
    label: 'DevOps',
  },
  {
    name: '5',
    key: '5',
    label: 'Gestão e Marketing',
  },
];
