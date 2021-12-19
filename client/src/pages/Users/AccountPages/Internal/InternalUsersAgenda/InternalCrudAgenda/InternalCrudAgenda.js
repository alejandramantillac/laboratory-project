import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap';

import './InternalCrudAgenda.css'

const data = [
    { id: 1, paciente: 'Diego', fecha: '19/12/2021'},
    { id: 2, paciente: 'Diana', fecha: '20/12/2021'},
    { id: 3, paciente: 'Julián', fecha: '18/12/2021'},
    { id: 4, paciente: 'Juan', fecha: '27/12/2021'},
    { id: 5, paciente: 'Vanessa', fecha: '30/12/2021'},
    { id: 6, paciente: 'Melissa', fecha: '23/12/2021'},
    { id: 7, paciente: 'José', fecha: '25/12/2021'},
]

class InternalCrudAgenda extends React.Component {
    state = {
      data: data,
      modalActualizar: false,
      modalInsertar: false,
      form: {
        id: "",
        paciente: "",
        fecha: "",
      },
    };
  
    mostrarModalActualizar = (dato) => {
      this.setState({
        form: dato,
        modalActualizar: true,
      });
    };
  
    cerrarModalActualizar = () => {
      this.setState({ modalActualizar: false });
    };
  
    mostrarModalInsertar = () => {
      this.setState({
        modalInsertar: true,
      });
    };
  
    cerrarModalInsertar = () => {
      this.setState({ modalInsertar: false });
    };
  
    editar = (dato) => {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo[contador].paciente = dato.paciente;
          arreglo[contador].fecha = dato.fecha;
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    };
  
    eliminar = (dato) => {
      var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
      if (opcion == true) {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
          if (dato.id == registro.id) {
            arreglo.splice(contador, 1);
          }
          contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
      }
    };
  
    insertar= ()=>{
      var valorNuevo= {...this.state.form};
      valorNuevo.id=this.state.data.length+1;
      var lista= this.state.data;
      lista.push(valorNuevo);
      this.setState({ modalInsertar: false, data: lista });
    }
  
    handleChange = (e) => {
      this.setState({
        form: {
          ...this.state.form,
          [e.target.name]: e.target.value,
        },
      });
    };
  
    render() {
      
      return (
        <>
          <Container>
          <br />
            <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
            <br />
            <br />
            <Table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>paciente</th>
                  <th>fecha</th>
                  <th>Acción</th>
                </tr>
              </thead>
  
              <tbody>
                {this.state.data.map((dato) => (
                  <tr key={dato.id}>
                    <td>{dato.id}</td>
                    <td>{dato.paciente}</td>
                    <td>{dato.fecha}</td>
                    <td>
                      <Button
                        color="primary"
                        onClick={() => this.mostrarModalActualizar(dato)}
                      >
                        Editar
                      </Button>{" "}
                      <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
  
          <Modal isOpen={this.state.modalActualizar}>
            <ModalHeader>
             <div><h3>Editar Registro</h3></div>
            </ModalHeader>
  
            <ModalBody>
              <FormGroup>
                <label>
                 Id:
                </label>
              
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.form.id}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                  paciente: 
                </label>
                <input
                  className="form-control"
                  name="paciente"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.paciente}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                  fecha: 
                </label>
                <input
                  className="form-control"
                  name="fecha"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.fecha}
                />
              </FormGroup>
            </ModalBody>
  
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => this.editar(this.state.form)}
              >
                Editar
              </Button>
              <Button
                color="danger"
                onClick={() => this.cerrarModalActualizar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
  
  
  
          <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
             <div><h3>Insertar paciente</h3></div>
            </ModalHeader>
  
            <ModalBody>
              <FormGroup>
                <label>
                  Id: 
                </label>
                
                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.data.length+1}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                  paciente: 
                </label>
                <input
                  className="form-control"
                  name="paciente"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <label>
                  fecha: 
                </label>
                <input
                  className="form-control"
                  name="fecha"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>
  
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => this.insertar()}
              >
                Insertar
              </Button>
              <Button
                className="btn btn-danger"
                onClick={() => this.cerrarModalInsertar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
        </>
      );
    }
  }

  export default InternalCrudAgenda;