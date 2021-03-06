import React from 'react';
import logo from 'assets/logo.svg';
import './Intro.css';
import { connect } from 'react-redux';
import { levelUp } from '_actions/levelChange';
import { levelDown } from '_actions/levelChange';

const mapStateToProps = state => ({ level: state.level });
// const mapDispatchToProps = dispatch => ({ dispatch: (action) => dispatch(action) });

export class _Intro extends React.Component {
  render() {
    const { level, dispatch } = this.props;
    return (
      <div className="App">
        <main style={{ display: 'flex', flexDirection: 'column' }}>
          <div>Level: {level}</div>
          <div>
            <button onClick={() => { dispatch(levelUp()) }}>
              Level up
            </button>
          </div>
          <div>
            <button
              onClick={() => { dispatch(levelDown()) }}>
              Level down
            </button>
          </div>
        </main>
      </div>
    )
  }
}

export const Intro = connect((mapStateToProps))(_Intro);

