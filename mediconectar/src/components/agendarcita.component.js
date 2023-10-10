import React, { useState } from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBBtn,
} from "mdb-react-ui-kit";

export default function AgendarCitaProfile() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5">
                <MDBRow className="justify-content-center">
                    <MDBCol md="6">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBCardText className="mb-4">
                                    <span className="text-primary font-italic me-1">Agendar Cita</span>
                                </MDBCardText>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label>Fecha</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Hora</label>
                                        <input
                                            type="time"
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Tipo de Cita</label>
                                        <select
                                            className="form-select"
                                            required
                                        >
                                            <option value="Medicina general">Medicina general</option>
                                            <option value="Prioritaria">Prioritaria</option>
                                        </select>
                                    </div>
                                    <MDBBtn type="submit" color="primary">
                                        Agendar Cita
                                    </MDBBtn>
                                    <p> </p>
                                    <MDBBtn type="button" color="primary">
                                        Volver
                                    </MDBBtn>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
