import React from 'react';
import Card from 'react-bootstrap/Card';

const ImprimirDatos = (props) => {

    const { datos } = props

    return(
        <Card>
        <Card.Body>
            <Card.Title>Datos Ingresados</Card.Title>
            <Card.Text>

                <h6>Nombre:{datos.name}</h6>
                <h6>Apellido:{datos.lastName}</h6>
                <h6>Email:{datos.email}</h6>
                <h6>Contraseña:{datos.password}</h6>
                <h6>Confirmar Contraseña:{datos.confirmPassword}</h6>

            </Card.Text>
        </Card.Body>
        </Card>
    );
}

export default ImprimirDatos;