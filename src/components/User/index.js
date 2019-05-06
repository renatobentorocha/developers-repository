import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UsersActions } from '../../store/ducks/Users';

class User extends Component {
  state = {
    userInput: '',
  };

  handleUser = e => {
    e.preventDefault();

    this.props.addUserRequest(this.state.userInput);
  };

  render() {
    return (
      <div className="users">
        <form onSubmit={this.handleUser}>
          <input
            type="text"
            value={this.state.userInput}
            onChange={e => {
              this.setState({ userInput: e.target.value });
            }}
          />
          <button type="submit">Enviar</button>
        </form>
        <div>
          <ul>
            {this.props.users.data.map(user => (
              <li key={user.id} className="user">
                <div>
                  <img src={user.avatar} alt="" />
                </div>
                <div>
                  <p>{user.name}</p>
                  <p>{user.login}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
