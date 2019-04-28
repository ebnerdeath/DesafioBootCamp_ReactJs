import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';

import PreferencesActions from '../../store/ducks/preferences';
import CheckBox from '../../components/CheckBox';

import { Container, Form, Button } from './styles';

const checkboxes = [
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

class Preferences extends Component {
  static propTypes = {
    postPreferencesRequest: PropTypes.func.isRequired,
  };

  // Construtor do componente
  constructor(props) {
    super(props);

    this.state = {
      // username: '',
      checkedItems: new Map(),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // Evento que é executado quando o componente é totalmente carregado
  componentDidMount() {}

  // Evento que é acionado quando o botão continuar é pressionado
  handleSubmit = (e) => {
    e.preventDefault();
    // Capturamos a função das props
    const { postPreferencesRequest } = this.props;

    // Capturamos o perfil do usuário do local storage
    const { user } = this.props;

    // Capturamos o status dos checkbox do state
    const { checkedItems } = this.state;

    let arrTemp = [];
    const arrApi = {};

    // iteramos pelo array checkedItems
    for (const check of checkedItems) {
      arrTemp = check[1] ? [...arrTemp, { user_id: user.id, pref_id: check[0] }] : [...arrTemp];
    }

    // Validamos se o array estiver vazio não deixamos o usuário continuar
    if (arrTemp.length < 1) {
      toastr.error('Erro', 'Informe pelo menos 1 preferência!');
      return;
    }

    arrApi.preferences = arrTemp;
    postPreferencesRequest(arrApi);
  };

  // Evento que é acionado quando o valor de algum checkbox é modificado
  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }));
  }

  render() {
    const { user } = this.props;
    return (
      <Container>
        <h1>{`Olá, ${user.username || null}`}</h1>
        <p>
          Parece que e seu primeiro acesso por aqui,
          <br />
          {' '}
comece escolhendo algumas preferências
          <br />
          para selecionarmos os melhores meetups
          <br />
          {' '}
pra você:
        </p>
        <h3>Preferências</h3>

        <Form>
          {checkboxes.map(item => (
            <label key={item.key}>
              <CheckBox
                name={item.name}
                checked={this.state.checkedItems.get(item.name)}
                onChange={this.handleChange}
              />
              {item.label}
            </label>
          ))}
          <Button type="submit" onClick={this.handleSubmit}>
            Continuar
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(PreferencesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Preferences);
