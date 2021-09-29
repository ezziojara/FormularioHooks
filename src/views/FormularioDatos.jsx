import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const FormularioDatos = (props) => {

    const { datos, setDatos } = props;

    const cambioEstados = (e) => {

        setDatos({...datos, [e.target.name]:e.target.value});
        // console.log("Formulario" + JSON.stringify(datos));
    }

    return(
        <Card>
        <Card.Body>
            <Card.Title>Agregar Datos</Card.Title>
            <Card.Text>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control type="text" placeholder="ingresar nombre" name="name" value={datos.name} onChange={cambioEstados}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellido:</Form.Label>
                    <Form.Control type="text" placeholder="ingresa apellido" name="lastName" value={datos.lastName} onChange={cambioEstados} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="ingresa email" name="email" value={datos.email} onChange={cambioEstados} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control type="password" placeholder="ingresa contraseña" name="password" value={datos.password} onChange={cambioEstados} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Confirmar Contraseña:</Form.Label>
                    <Form.Control type="password" placeholder="ingresa contraseña" name="confirmPassword"  value={datos.confirmPassword} onChange={cambioEstados} />
                </Form.Group>
            </Form>

            </Card.Text>
        </Card.Body>
        </Card>
    );
}

export default FormularioDatos;