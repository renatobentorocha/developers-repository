import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as UsersActions } from '../../store/ducks/Users';

import './styles.css';

Modal.setAppElement(document.getElementById('root'));

class AddUser extends Component {
  state = {
    userInput: '',
  };

  showError = () => {
    toast.error(this.props.error, {
      position: toast.POSITION.TOP_LEFT,
    });

    this.props.clearUsersError();
  };

  componentDidUpdate() {
    if (this.props.error) this.showError();
  }

  handleInputChange = e => this.setState({ userInput: e.target.value });

  handleFormSubmit = e => {
    e.preventDefault();

    const { loading } = this.props;

    if (loading) return;

    const { userInput } = this.state;

    if (!userInput) return;

    const {
      addUserRequest,
      modal: { cordinates },
    } = this.props;

    console.log(cordinates);

    addUserRequest(userInput, cordinates);
    this.setState({ userInput: '' });
  };

  handleHideModal = () => {
    const { hideModal } = this.props;
    hideModal();
    this.setState({ userInput: '' });
  };

  render() {
    const { modal, loading } = this.props;
    const { userInput } = this.state;
    return (
      <Modal
        isOpen={modal.visible}
        onRequestClose={this.handleHideModal}
        contentLabel="Add User Modal"
        className="modal-container"
        overlayClassName="modal-overlay"
      >
        <h2>Adicionar novo usuário</h2>
        <form onSubmit={this.handleFormSubmit} className="form">
          <input
            placeholder="Usuário do Github"
            value={userInput}
            onChange={this.handleInputChange}
          />
          <div className="buttons-container">
            <button type="button" onClick={this.handleHideModal}>
              Cancelar
            </button>
            <button type="submit">
              {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Salvar'}
            </button>
          </div>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  loading: state.users.loading,
  error: state.users.error,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ModalActions, ...UsersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddUser);
