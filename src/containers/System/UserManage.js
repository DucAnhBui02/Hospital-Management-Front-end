import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllUsers,
  createNewUser,
  deleteUser,
  editUserServices,
} from "../../services/userServices";
import "./UserManage.scss";
import ModalUser from "./ModalUser";
import ModalEditUser from "./ModalEditUser";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUsers: false,
      isOpenModalEditUsers: false,
      userEdit: {},
    };
  }

  async componentDidMount() {
    await this.getAllUserFromData();
  }

  getAllUserFromData = async () => {
    let respone = await getAllUsers("ALL");
    if (respone && respone.errCode === 0) {
      this.setState({
        arrUsers: respone.users,
      });
    }
  };

  handleAddUser = () => {
    this.setState({
      isOpenModalUsers: true,
    });
  };

  toggleUsers = () => {
    this.setState({
      isOpenModalUsers: !this.state.isOpenModalUsers,
    });
  };

  toggleEditUsers = () => {
    this.setState({
      isOpenModalEditUsers: !this.state.isOpenModalEditUsers,
    });
  };

  createNewUser = async (data) => {
    try {
      let respone = await createNewUser(data);
      if (respone && respone.errCode !== 0) {
        alert(respone.errMessage);
      } else {
        await this.getAllUserFromData();
        this.setState({
          isOpenModalUsers: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleDeleteUser = async (user) => {
    try {
      let respone = await deleteUser(user.id);
      if (respone && respone.errCode === 0) {
        await this.getAllUserFromData();
      } else {
        alert(respone.errMessage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleEditUser = async (data) => {
    try {
      this.setState({
        isOpenModalEditUsers: true,
        userEdit: data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  doEditUser = async (user) => {
    try {
      let respone = await editUserServices(user);
      console.log(respone);
      if (respone && respone.errCode === 0) {
        this.setState({
          isOpenModalEditUsers: false,
        });
        await this.getAllUserFromData();
      } else {
        alert(respone.errMessage);
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <>
        <div className="text-center">Manage users</div>
        <div className="mx-1">
          <ModalUser
            isOpen={this.state.isOpenModalUsers}
            toggleForm={this.toggleUsers}
            createNewUser={this.createNewUser}
          />
          {this.state.isOpenModalEditUsers && (
            <ModalEditUser
              isOpen={this.state.isOpenModalEditUsers}
              toggleForm={this.toggleEditUsers}
              currentUser={this.state.userEdit}
              editUser={this.doEditUser}
            />
          )}
          <button
            className="btn btn-primary px-3"
            onClick={() => this.handleAddUser()}
          >
            <i className="fas fa-plus "></i>Add new user
          </button>
        </div>
        <div className="user-table mx-1 mt-3">
          <table id="customers">
            <tbody>
              <tr>
                <th>Email</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
              {arrUsers &&
                arrUsers.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>
                        <button
                          className="btn-edit"
                          onClick={() => this.handleEditUser(item)}
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button
                          className="btn-delete"
                          onClick={() => this.handleDeleteUser(item)}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
