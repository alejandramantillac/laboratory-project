import React, { useState, useEffect } from "react";
import { Button, notification } from "antd";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import Modal from "../../../../../components/Modal";
import AgendasList from "../../../../../components/Users/InternalUsersAgenda/AgendasList";
import Pagination from "../../../../../components/Pagination";
import AddEditAgendaForm from "../../../../../components/Users/InternalUsersAgenda/AddEditAgendaForm";
import { getAgendasApi } from "../../../../../api/agenda";

import "./InternalUsersAgenda.scss";

function InternalUsersAgenda(props) {
  const { location, history } = props;
  const [agendas, setAgendas] = useState(null);
  const [reloadAgendas, setReloadAgendas] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const { page = 1 } = queryString.parse(location.search);

  useEffect(() => {
    getAgendasApi(12, page)
      .then(response => {
        if (response?.code !== 200) {
          notification["warning"]({
            message: response.message
          });
        } else {
          setAgendas(response.agendas);
        }
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor."
        });
      });
    setReloadAgendas(false);
  }, [page, reloadAgendas]);

  const addAgenda = () => {
    setIsVisibleModal(true);
    setModalTitle("Creando nueva agenda");
    setModalContent(
      <AddEditAgendaForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadAgendas={setReloadAgendas}
        agenda={null}
      />
    );
  };

  const editAgenda = agenda => {
    setIsVisibleModal(true);
    setModalTitle("Editar agenda");
    setModalContent(
      <AddEditAgendaForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadAgendas={setReloadAgendas}
        agenda={agenda}
      />
    );
  };

  if (!agendas) {
    return null;
  }

  return (
    <div className="blog">
      <div className="blog__add-agenda">
        <br />
        <Button type="primary" onClick={addAgenda}>
          Nueva agenda
        </Button>
      </div>
      <AgendasList
        agendas={agendas}
        setReloadAgendas={setReloadAgendas}
        editAgenda={editAgenda}
      />
      <Pagination agendas={agendas} location={location} history={history} />
      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
        width="75%"
      >
        {modalContent}
      </Modal>
    </div>
  );
}

export default withRouter(InternalUsersAgenda);