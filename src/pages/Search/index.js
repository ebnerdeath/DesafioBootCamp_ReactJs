import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconRight from 'react-icons/lib/md/keyboard-arrow-right';
import MeetUpsActions from '../../store/ducks/meetups';
import Navbar from '../../components/Navbar';
import ImageMeetUp from '../../assets/meetup.png';

import {
  Container, Input, Title, List, ContainerCard,
} from './styles';

class Search extends Component {
  static propTypes = {
    meetUpsRequestSubscript: PropTypes.func.isRequired,
    meetUpsRequestNotSubscript: PropTypes.func.isRequired,
    meetUpsRequestRecommended: PropTypes.func.isRequired,
    meetUpsRequestPerTitle: PropTypes.func.isRequired,
  };

  state = {
    search: '',
  };

  componentDidMount() {
    const {
      meetUpsRequestSubscript,
      meetUpsRequestNotSubscript,
      meetUpsRequestRecommended,
    } = this.props;

    meetUpsRequestSubscript();
    meetUpsRequestNotSubscript();
    meetUpsRequestRecommended();
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const { search } = this.state;

      const { meetUpsRequestPerTitle } = this.props;

      meetUpsRequestPerTitle(search);
    }
  };

  render() {
    const { search } = this.state;
    const { dataSubscript, dataNotSubscript, dataRecommended } = this.props;
    return (
      <Fragment>
        <Navbar />
        <Container>
          <Input>
            <input
              type="text"
              placeholder="Busque pelo titulo do MeetUp e pressione [ENTER] para pesquisar"
              name="search"
              value={search}
              onChange={this.handleInputChange}
              onKeyDown={this.handleKeyDown}
            />
          </Input>
          <Title>Inscriçoes</Title>
          <List>
            {dataSubscript.map(meetupSubscript => (
              <li key={meetupSubscript.id}>
                <img src={ImageMeetUp} alt="MeetUp" />
                <ContainerCard>
                  <div>
                    <strong>
                      {meetupSubscript.id}
                      {' '}
-
                      {meetupSubscript.title}
                    </strong>
                    <p>120 membros</p>
                  </div>
                  <div>
                    <a href="/">
                      <button type="button">{<IconRight size={20} color="white" />}</button>
                    </a>
                  </div>
                </ContainerCard>
              </li>
            ))}
          </List>

          <Title>Próximos meetups</Title>
          <List>
            {dataNotSubscript.map(meetupNotSubscript => (
              <li key={meetupNotSubscript.id}>
                <img src={ImageMeetUp} alt="MeetUp" />
                <ContainerCard>
                  <div>
                    <strong>
                      {meetupNotSubscript.id}
                      {' '}
-
                      {meetupNotSubscript.title}
                    </strong>
                    <p>120 membros</p>
                  </div>
                  <div>
                    <a href="/">
                      <button type="button">{<IconRight size={20} color="white" />}</button>
                    </a>
                  </div>
                </ContainerCard>
              </li>
            ))}
          </List>

          <Title>Recomendados</Title>
          <List>
            {dataRecommended ? (
              dataRecommended.map(meetupRecommended => (
                <li key={meetupRecommended.id}>
                  <img src={ImageMeetUp} alt="MeetUp" />
                  <ContainerCard>
                    <div>
                      <strong>
                        {meetupRecommended.id}
                        {' '}
-
                        {meetupRecommended.title}
                      </strong>
                      <p>120 membros</p>
                    </div>
                    <div>
                      <a href="/">
                        <button type="button">{<IconRight size={20} color="white" />}</button>
                      </a>
                    </div>
                  </ContainerCard>
                </li>
              ))
            ) : (
              <h3>Nenhum MeetUp Encontrado!</h3>
            )}
          </List>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loadingSubscript: state.meetups.loadingSubscript,
  loadingNotSubscript: state.meetups.loadingNotSubscript,
  loadingRecommended: state.meetups.loadingRecommended,
  dataSubscript: state.meetups.dataSubscript,
  dataNotSubscript: state.meetups.dataNotSubscript,
  dataRecommended: state.meetups.dataRecommended,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetUpsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
