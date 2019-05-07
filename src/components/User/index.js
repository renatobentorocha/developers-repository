import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { bindActionCreators } from 'redux';
import { Creators as UsersActions } from '../../store/ducks/Users';
import './styles.css';

import { faTrash } from "@fortawesome/free-solid-svg-icons";

class User extends Component {
  state = {
    userInput: '',
  };

  handleRemove = (e, id) => {
    e.preventDefault();

    this.props.deleteUserRequest(id);
  };


  render() {
    return (
      <div className="users"> 
        
          <ul>
            {this.props.users.data.map(user => (
              <li key={user.id} className="user">
                <div className="avatar">
                  <img src={user.avatar} alt="" />
                </div>
                <div className="userInfo">
                  <p>{user.name}</p>
                  <p>{user.login}</p>
                </div>
                <div className="remove-container">
                  <button onClick={(e) => this.handleRemove(e, user.id)} className="btn-remove">
                    <FontAwesomeIcon icon={faTrash} size="lg" color="#6699ff"/>
                  </button>                  
                </div>                
              </li>
            ))}
          </ul>
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
