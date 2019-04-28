import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconRight from 'react-icons/lib/md/keyboard-arrow-right';
import MeetUpsActions from '../../store/ducks/meetups';
import Navbar from '../../components/Navbar';
import ImageMeetUp from '../../assets/meetup.png';

import {
  Container, Title, List, ContainerCard,
} from './styles';

class Main extends Component {
  static propTypes = {
    meetUpsRequestSubscript: PropTypes.func.isRequired,
    meetUpsRequestNotSubscript: PropTypes.func.isRequired,
    meetUpsRequestRecommended: PropTypes.func.isRequired,
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

  render() {
    const { dataSubscript, dataNotSubscript, dataRecommended } = this.props;
    return (
      <Fragment>
        <Navbar />
        <Container>
          <Title>Inscriçoes</Title>
          <List>
            {dataSubscript.map(meetupSubscript => (
              <li key={meetupSubscript.id}>
                <img src={ImageMeetUp} alt="MeetUp" />
                <ContainerCard>
                  <div>
                    <strong>{meetupSubscript.title}</strong>
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
                    <strong>{meetupNotSubscript.title}</strong>
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
                      <strong>{meetupRecommended.title}</strong>
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
)(Main);
