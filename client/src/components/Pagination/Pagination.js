import React from "react";
import { Pagination as PaginationAntd } from "antd";

import "./Pagination.scss";

export default function Pagination(props) {
  const { agendas, location, history } = props;
  const currentPage = parseInt(agendas.page);

  const onChangePage = newPage => {
    history.push(`${location.pathname}?page=${newPage}`);
  };

  return (
    <PaginationAntd
      defaultCurrent={currentPage}
      total={agendas.total}
      pageSize={agendas.limit}
      onChange={newPage => onChangePage(newPage)}
      className="pagination"
    />
  );
}