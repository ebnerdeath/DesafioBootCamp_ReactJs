import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-icons/lib/md/camera-alt';
import { toastr } from 'react-redux-toastr';
import MeetUpsActions from '../../store/ducks/meetups';
import Navbar from '../../components/Navbar';
import {
  Container, Form, InputImage, ContainerCheckbox,
} from './styles';
import CheckBox from '../../components/CheckBox';
import api from '../../services/api';

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

class NewMeetUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      date_event: '',
      file_id: null,
      location: '',
      id_category: -1,
      checkedItems: new Map(),
    };

    this.handleInputChangeCheckbox = this.handleInputChangeCheckbox.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { file_id, checkedItems } = this.state;
    const { meetUpsPostRequest } = this.props;

    let arrTemp = [];
    let idCategory = -1;

    // iteramos pelo array checkedItems
    for (const check of checkedItems) {
      console.log(check[1] && `ID: ${check[0]}`);
      arrTemp = check[1] ? [...arrTemp, { pref_id: check[0] }] : [...arrTemp];
      if (check[1]) {
        idCategory = check[0];
      }
    }

    // Validamos se o array estiver vazio não deixamos o usuário continuar
    if (arrTemp.length < 1) {
      toastr.error('Erro', 'Informe a categoria!');
      return;
    }

    const obj = this.state;
    obj.id_category = idCategory;

    const formData = new FormData();
    formData.append('file', file_id);

    // console.log(formData);

    api({
      method: 'post',
      url: '/files',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
      .then((response) => {
        // handle success
        obj.file_id = response.data.id;

        console.log(obj);

        meetUpsPostRequest(obj);
      })
      .catch((response) => {
        // handle error
        console.log(response);
      });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleInputChangeFile = (e) => {
    const file = e.target.files[0];
    this.setState({ file_id: file });
  };

  handleInputChangeCheckbox(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;

    this.setState({ checkedItems: new Map() });

    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }));
  }

  render() {
    const {
      title, description, date_event, location,
    } = this.state;

    const { loading } = this.props;

    return (
      <Fragment>
        <Navbar />
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <label htmlFor="title">Título</label>
            <input
              type="title"
              id="title"
              name="title"
              placeholder="Digite o título do meetup"
              value={title}
              onChange={this.handleInputChange}
            />
            <label htmlFor="text">Descrição</label>
            <input
              type="description"
              id="description"
              name="description"
              placeholder="Descreva seu meetup"
              value={description}
              onChange={this.handleInputChange}
            />
            <label htmlFor="date_event">Data/hora</label>
            <input
              type="date"
              id="date_event"
              name="date_event"
              placeholder="Quando o meetup vai acontecer?"
              value={date_event}
              onChange={this.handleInputChange}
            />

            <InputImage>
              <label htmlFor="file_id">
                <Icon size={30} color="gray" />
              </label>
              <input
                id="file_id"
                name="file_id"
                // value={file_id}
                onChange={this.handleInputChangeFile}
                type="file"
              />
            </InputImage>

            <label htmlFor="location">Localização</label>
            <input
              type="location"
              id="location"
              name="location"
              placeholder="Onde seu meetup irá acontecer?"
              value={location}
              onChange={this.handleInputChange}
            />

            <label htmlFor="location">Tema do seu meetup</label>
            <ContainerCheckbox>
              {checkboxes.map(item => (
                <label key={item.key}>
                  <CheckBox
                    name={item.name}
                    checked={this.state.checkedItems.get(item.name)}
                    onChange={this.handleInputChangeCheckbox}
                  />
                  {item.label}
                </label>
              ))}
            </ContainerCheckbox>

            <button type="submit">{loading ? 'Aguarde...' : 'Salvar'}</button>
          </Form>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.meetups.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetUpsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewMeetUp);
