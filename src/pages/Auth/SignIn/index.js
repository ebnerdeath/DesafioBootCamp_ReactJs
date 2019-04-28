import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../../../store/ducks/auth';

import logo from '../../../assets/logo.svg';
import { Container, Form } from './styles';

class SignIn extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  state = {
    email: 'ebner.suporte@hotmail.com',
    password: '123456',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { signInRequest } = this.props;

    // função (Action Redux)
    signInRequest(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { loading } = this.props;
    return (
      <Container>
        <img src={logo} alt="MeetApp" />

        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu E-mail"
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
          <button type="submit">{loading ? 'Aguarde...' : 'Entrar'}</button>
          <a href="/signup">Criar conta grátis</a>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
