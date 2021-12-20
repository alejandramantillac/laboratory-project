import React from "react";
import { List, Button, Icon, Modal, notification } from "antd";
import { Link } from "react-router-dom";
import { getAccessTokenApi } from "../../../../api/auth";
import { deleteAgendaApi } from "../../../../api/agenda";

import "./AgendasList.scss";

const { confirm } = Modal;

export default function AgendasList(props) {
  const { agendas, setReloadAgendas, editAgenda } = props;

  const deleteAgenda = agenda => {
    const accessToken = getAccessTokenApi();

    confirm({
      title: "Eliminando agenda",
      content: `¿Estás seguro de eliminar el agendamiento ${agenda.title}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deleteAgendaApi(accessToken, agenda._id)
          .then(response => {
            const typeNotification =
              response.code === 200 ? "success" : "warning";
            notification[typeNotification]({
              message: response.message
            });
            setReloadAgendas(true);
          })
          .catch(() => {
            notification["error"]({
              message: "Error del servidor."
            });
          });
      }
    });
  };

  return (
    <div className="agendas-list">
      <List
        dataSource={agendas.docs}
        renderItem={agenda => (
          <Agenda agenda={agenda} deleteAgenda={deleteAgenda} editAgenda={editAgenda} />
        )}
      />
    </div>
  );
}

function Agenda(props) {
  const { agenda, deleteAgenda, editAgenda } = props;

  return (
    <List.Item
      actions={[
        <Link to={`/internal-agenda/${agenda.url}`} target="_blank">
          <Button type="primary">
            <Icon type="eye" />
          </Button>
        </Link>,
        <Button type="primary" onClick={() => editAgenda (agenda)}>
          <Icon type="edit" />
        </Button>,
        <Button type="danger" onClick={() => deleteAgenda(agenda)}>
          <Icon type="delete" />
        </Button>
      ]}
    >
      <List.Item.Meta title={agenda.title} />
    </List.Item>
  );
}