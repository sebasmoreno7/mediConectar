import React from "react";
import '../App.css';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function AdministradorProfile() {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              {/* ... (breadcrumbs) */}
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Administrador</p>
                <p className="text-muted mb-4">Área de Administración</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Aceptar</MDBBtn>
                  <MDBBtn outline className="ms-1">Cancelar</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  {/* ... (redes sociales o enlaces) */}
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Nombre Completo</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Ad. Wilmar Capera</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Correo Electrónico</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">wilmar.capera@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  {/* ... (otras informaciones médicas) */}
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
                <MDBCol md="6">
                    <MDBCard className="mb-4 mb-md-0">
                        <MDBCardBody>
                        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Historial</span> Próximas Citas Médicas</MDBCardText>
                        <div>
                            <h6 className="text-primary">Resumen de citas</h6>
                            <ul className="list-unstyled">
                            <li>
                                <strong>Fecha:</strong> 15 de octubre de 2023
                                <br />
                                <strong>Hora:</strong> 8:00 AM
                                <br />
                                <strong>Medicina general:</strong> Sí
                            </li>
                            <li>
                                <strong>Fecha:</strong> 16 de octubre de 2023
                                <br />
                                <strong>Hora:</strong> 4:30 PM
                                <br />
                                <strong>Prioritaria:</strong> Sí
                            </li>
                            <li>
                                <strong>Fecha:</strong> 17 de octubre de 2023
                                <br />
                                <strong>Hora:</strong> 5:20 PM
                                <br />
                                <strong>Prioritaria:</strong> Sí
                            </li>
                            </ul>
                        </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>


                <MDBCol md="6">
                    <MDBCard className="mb-4 mb-md-0">
                        <MDBCardBody>
                        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Historial</span> Anteriores Citas Médicas</MDBCardText>
                        <div>
                            <h6 className="text-primary">Resumen de Citas</h6>
                            <ul className="list-unstyled">
                            <li>
                                <strong>Fecha:</strong> 05 de septiembre de 2023
                                <br />
                                <strong>Hora:</strong> 11:20 AM
                                <br />
                                <strong>Prioritaria:</strong> Sí
                            </li>
                            <li>
                                <strong>Fecha:</strong> 04 de septiembre de 2023
                                <br />
                                <strong>Hora:</strong> 7:30 AM
                                <br />
                                <strong>Medicina general:</strong> Sí
                            </li>
                            <li>
                                <strong>Fecha:</strong> 03 de septiembre de 2023
                                <br />
                                <strong>Hora:</strong> 3:30 PM
                                <br />
                                <strong>Prioritaria:</strong> Sí
                            </li>
                            </ul>
                        </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}