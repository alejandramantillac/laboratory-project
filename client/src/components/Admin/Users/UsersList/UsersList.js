import React, { useState } from 'react';
import { Switch, List, Avatar, Button, Icon } from 'antd';
import NoAvatar from '../../../../assets/img/png/no-avatar.png';

import './UsersList.scss';

export default function UsersList(props) {
    const { usersActive, usersInactive } = props;
    const  [viewUsersActives, setViewUsersActives]  = useState(true);

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

            {viewUsersActives ? <UsersActive usersActive={usersActive}  /> : <UsersInactive usersInactive={usersInactive} />}
        </div>
    );
}

function UsersActive(props) {
    const { usersActive } = props;

    return (
        <List
            className='users-active'
            itemLayout='horizontal'
            dataSource={usersActive}
            renderItem={user => (
                <List.Item
                    actions={[
                        <Button 
                        type='primary' 
                        onClick = {() => console.log('Editar Usuario')}
                        >
                            <Icon type='edit' />
                        </Button>,
                        <Button 
                        type='danger' 
                        onClick = {() => console.log('Desactivar Usuario')}
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
                        avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
                        title={`
                            ${user.fullname ? user.fullname : "..."} 
                        `}
                        description={user.email}
                    />
                </List.Item>
            )}
        />
    );
}

function UsersInactive(props) {
    const { usersInactive } = props;
    
    return (
        <List
            className='users-active'
            itemLayout='horizontal'
            dataSource={usersInactive}
            renderItem={user => (
                <List.Item
                    actions={[
                        <Button 
                        type='primary' 
                        onClick = {() => console.log('Activar Usuario')}
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
                        avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
                        title={`
                            ${user.fullname ? user.fullname : "..."} 
                        `}
                        description={user.email}
                    />
                </List.Item>
            )}
        />
    );
}






