import React, { useState, useEffect } from 'react';
import { Switch, List, Avatar, Button, Icon, notification } from 'antd';
import NoAvatar from '../../../../assets/img/png/no-avatar.png';
import Modal from '../../../Modal/Modal';
import EditUserForm from '../EditUserForm';
import { getAvatarApi, activateUserApi } from '../../../../api/user';
import { getAccessTokenApi } from '../../../../api/auth';

import './UsersList.scss';

export default function UsersList(props) {
    const { usersActive, usersInactive, setReloadUsers } = props;
    const [viewUsersActives, setViewUsersActives] = useState(true);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    return (
        <div className='list-users'>
            <div className='list-users__switch'>
                <Switch
                    defaultChecked
                    onChange={() => setViewUsersActives(!viewUsersActives)}
                />
                <span>
                    {viewUsersActives ? 'Usuarios Activos' : 'Usuarios Inactivos'}
                </span>
            </div>

            {viewUsersActives ? (
            <UsersActive
                usersActive={usersActive}
                setIsVisibleModal={setIsVisibleModal}
                setModalTitle={setModalTitle}
                setModalContent={setModalContent}
                setReloadUsers={setReloadUsers}
            />
            ) : (
                <UsersInactive usersInactive={usersInactive} setReloadUsers={setReloadUsers} />
            )}

            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
            >
                {modalContent}
            </Modal>
        </div>
    );
}

function UsersActive(props) {
    const {
        usersActive,
        setIsVisibleModal,
        setModalTitle,
        setModalContent,
        setReloadUsers
    } = props;

    const editUser = user => {
        setIsVisibleModal(true);
        setModalTitle(`Editar ${user.fullname}`);    
        setModalContent(<EditUserForm user={user} setIsVisibleModal={setIsVisibleModal} setReloadUsers={setReloadUsers} />);
    };

    return (
        <List
          className="users-active"
          itemLayout="horizontal"
          dataSource={usersActive}
          renderItem={user => (
            <UserActive
              user={user}
              editUser={editUser}
              setReloadUsers={setReloadUsers}
            />
          )}
        />
      );
    }

function UserActive(props) {
    const { user, editUser, setReloadUsers } = props;
    const [avatar, setAvatar] = useState(null);
  
    useEffect(() => {
      if (user.avatar) {
        getAvatarApi(user.avatar).then(response => {
          setAvatar(response);
        });
      } else {
        setAvatar(null);
      }
    }, [user]);

    const desactivateUser = () => {
        const accesToken = getAccessTokenApi();
    
        activateUserApi(accesToken, user._id, false)
          .then(response => {
            notification["success"]({
              message: response
            });
            setReloadUsers(true);
          })
          .catch(err => {
            notification["error"]({
              message: err
            });
          });
      };    

    return (
        <List.Item
        actions={[
            <Button 
            type='primary' 
            onClick = {() => editUser(user)}
            >
                <Icon type='edit' />
            </Button>,
            <Button 
            type='danger' 
            onClick = {desactivateUser}
            >
                <Icon type='stop' />
            </Button>,
            <Button 
            type='danger' 
            onClick = {() => console.log('Eliminar Usuario')}
            >
                <Icon type='delete' />
            </Button>
        ]}
    >
        <List.Item.Meta
            avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
            title={`
                ${user.fullname ? user.fullname : "..."} 
            `}
            description={user.email}
        />
    </List.Item>
    )
}

function UsersInactive(props) {
    const { usersInactive, setReloadUsers } = props;
    
    return (
        <List
            className='users-active'
            itemLayout='horizontal'
            dataSource={usersInactive}
            renderItem={user => <UserInactive user={user} setReloadUsers={setReloadUsers} />}
        />
    );
}

function UserInactive(props) {
const { user, setReloadUsers } = props;
const [avatar, setAvatar] = useState(null);

useEffect(() => {
  if (user.avatar) {
    getAvatarApi(user.avatar).then(response => {
      setAvatar(response);
    });
  } else {
    setAvatar(null);
  }
}, [user]);

const activateUser = () => {
    const accesToken = getAccessTokenApi();

    activateUserApi(accesToken, user._id, true)
      .then(response => {
        notification["success"]({
          message: response
        });
        setReloadUsers(true);
      })
      .catch(err => {
        notification["error"]({
          message: err
        });
      });
  };

    return (
        <List.Item
        actions={[
            <Button 
            type='primary' 
            onClick = {activateUser}
            >
                <Icon type='check' />
            </Button>,
            <Button 
            type='danger' 
            onClick = {() => console.log('Eliminar Usuario')}
            >
                <Icon type='delete' />
            </Button>
        ]}
    >
        <List.Item.Meta
            avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
            title={`
                ${user.fullname ? user.fullname : "..."} 
            `}
            description={user.email}
        />
        </List.Item>
    )
}