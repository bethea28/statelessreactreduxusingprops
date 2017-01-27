import { connect } from 'react-redux';
import {ADD_CARD} from '../actions';
import Card from './card';


const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  addCard: () => dispatch(ADD_CARD())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
