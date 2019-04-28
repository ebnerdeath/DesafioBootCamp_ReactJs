import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';
import SignUpActions from '../../../store/ducks/signup';

import logo from '../../../assets/logo.svg';
import { Container, Form } from './styles';

class SignUp extends Component {
  static propTypes = {
    signUpRequest: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    email: '',
    password: '',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;

    const user = {};
    user.username = name;
    user.email = email;
    user.password = password;

    const { signUpRequest } = this.props;

    if (!name || !email || !password) {
      toastr.error('Erro', 'Preencha os campos para inserção!');
    }

    signUpRequest(user);
  };

  render() {
    const { name, email, password } = this.state;
    const { loading } = this.props;
    return (
      <Container>
        <img src={logo} alt="MeetApp" />
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            value={name}
            onChange={this.handleInputChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={this.handleInputChange}
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Sua senha secreta"
            value={password}
            onChange={this.handleInputChange}
          />
          <button type="submit">{loading ? 'Aguarde...' : 'Criar conta'}</button>
          <a href="/">Já tenho conta</a>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.signup.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(SignUpActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
