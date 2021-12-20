import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  Icon,
  Input,
  Button,
  DatePicker,
  notification
} from "antd";
import moment from "moment";
import { Editor } from "@tinymce/tinymce-react";
import { getAccessTokenApi } from "../../../../api/auth";
import { addAgendaApi, updateAgendaApi } from "../../../../api/agenda";

import "./AddEditAgendaForm.scss";

export default function AddEditAgendaForm(props) {
  const { setIsVisibleModal, setReloadAgendas, agenda } = props;
  const [agendaData, setAgendaData] = useState({});

  useEffect(() => {
    if (agenda) {
      setAgendaData(agenda);
    } else {
      setAgendaData({});
    }
  }, [agenda]);

  const processAgenda = e => {
    e.preventDefault();
    const { title, url, user, date } = agendaData;

    if (!title || !url || !user || !date) {
      notification["error"]({
        message: "Todos los campos son obligatorios."
      });
    } else {
      if (!agenda) {
        addAgenda();
      } else {
        updateAgenda();
      }
    }
  };

  const addAgenda = () => {
    const token = getAccessTokenApi();

    addAgendaApi(token, agendaData)
      .then(response => {
        const typeNotification = response.code === 200 ? "success" : "warning";
        notification[typeNotification]({
          message: response.message
        });
        setIsVisibleModal(false);
        setReloadAgendas(true);
        setAgendaData({});
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor."
        });
      });
  };

  const updateAgenda = () => {
    const token = getAccessTokenApi();
    updateAgendaApi(token, agenda._id, agendaData)
      .then(response => {
        const typeNotification = response.code === 200 ? "success" : "warning";
        notification[typeNotification]({
          message: response.message
        });
        setIsVisibleModal(false);
        setReloadAgendas(true);
        setAgendaData({});
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor."
        });
      });
  };

  return (
    <div className="add-edit-agenda-form">
      <AddEditForm
        agendaData={agendaData}
        setAgendaData={setAgendaData}
        agenda={agenda}
        processAgenda={processAgenda}
      />
    </div>
  );
}

function AddEditForm(props) {
  const { agendaData, setAgendaData, agenda, processAgenda } = props;

  return (
    <Form className="add-edit-agenda-form" layout="inline" onSubmit={processAgenda}>
      <Row gutter={24}>
        <Col span={8}>
          <Input
            prefix={<Icon type="font-size" />}
            placeholder="Titulo"
            value={agendaData.title}
            onChange={e => setAgendaData({ ...agendaData, title: e.target.value })}
          />
        </Col>
        <Col span={8}>
          <Input
            prefix={<Icon type="link" />}
            placeholder="url"
            value={agendaData.url}
            onChange={e =>
              setAgendaData({
                ...agendaData,
                url: transformTextToUrl(e.target.value)
              })
            }
          />
        </Col>
        <Col span={8}>
          <Input
            prefix={<Icon type="font-size" />}
            placeholder="user"
            value={agendaData.user}
            onChange={e => setAgendaData({ ...agendaData, user: e.target.value })}
          />
        </Col>
        <br />
        <br />
        <Col span={8}>
          <DatePicker
            style={{ width: "100%" }}
            format="DD/MM/YYYY HH:mm:ss"
            placeholder="Fecha de publicación"
            value={agendaData.date && moment(agendaData.date)}
            onChange={(e, value) =>
              setAgendaData({
                ...agendaData,
                date: moment(value, "DD/MM/YYYY HH:mm:ss").toISOString()
              })
            }
          />
        </Col>
      </Row>
      <br />
      <Button type="primary" htmlType="submit" className="btn-submit">
        {agenda ? "Actualizar agenda" : "Crear agenda"}
      </Button>
    </Form>
  );
}

function transformTextToUrl(text) {
  const url = text.replace(" ", "-");
  return url.toLowerCase();
}