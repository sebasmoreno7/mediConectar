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

export default function DoctorProfile() {
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
                <p className="text-muted mb-1">Médico Especialista</p>
                <p className="text-muted mb-4">Área de Especialización, Ciudad</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>Seguir</MDBBtn>
                  <MDBBtn outline className="ms-1">Mensaje</MDBBtn>
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
                    <MDBCardText className="text-muted">Dr. Juan Pérez</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Correo Electrónico</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">juan.perez@example.com</MDBCardText>
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
                        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Citas</span> Próximas Citas Médicas</MDBCardText>
                        <div>
                            <h6 className="text-primary">Próxima Semana</h6>
                            <ul className="list-unstyled">
                            <li>
                                <strong>Fecha:</strong> 10 de octubre de 2023
                                <br />
                                <strong>Hora:</strong> 10:00 AM
                                <br />
                                <strong>Prioritaria:</strong> Sí
                            </li>
                            <li>
                                <strong>Fecha:</strong> 12 de octubre de 2023
                                <br />
                                <strong>Hora:</strong> 2:30 PM
                                <br />
                                <strong>Prioritaria:</strong> Sí
                            </li>
                            <li>
                                <strong>Fecha:</strong> 14 de octubre de 2023
                                <br />
                                <strong>Hora:</strong> 4:15 PM
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
                        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Citas</span> Anteriores Citas Médicas</MDBCardText>
                        <div>
                            <h6 className="text-primary">Historial</h6>
                            <ul className="list-unstyled">
                            <li>
                                <strong>Fecha:</strong> 10 de septiembre de 2023
                                <br />
                                <strong>Hora:</strong> 11:30 AM
                                <br />
                                <strong>Prioritaria:</strong> Sí
                            </li>
                            <li>
                                <strong>Fecha:</strong> 08 de septiembre de 2023
                                <br />
                                <strong>Hora:</strong> 6:30 PM
                                <br />
                                <strong>Prioritaria:</strong> Sí
                            </li>
                            <li>
                                <strong>Fecha:</strong> 05 de septiembre de 2023
                                <br />
                                <strong>Hora:</strong> 2:15 PM
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
