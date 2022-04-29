import * as React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export interface ILoginProps {}

export interface ILoginState {
    [key: string]: any;
    email: string;
    password: string;
    loading: boolean;
    message: string;
    token: string | null;
}

export default class Login extends React.Component<ILoginProps, ILoginState> {
    constructor(props: ILoginProps) {
        super(props);

        this.state = {
            email: '',
            password: '',
            loading: false,
            message: '',
            token: null
        };
    }

    setTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value }
        } = e;
        this.setState({ [name]: value });
    };
    handleSubmit = () => {
        console.log(this.state);
        axios.post('https://reqres.in/api/login', this.state).then((response) => this.setState({ [`token`]: response.data.token }));
    };

    public render() {
        console.log(this.state);
        if (this.state.token == null) {
            return (
                <div className="block_login">
                    <Container fluid>
                        <Row className="mt-5 rb">
                            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-lg bgBlack rounded-lg">
                                {/* shadow-lg p-3 mb-5 bg-white rounded */}
                                <Form>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.setTextInput} value={this.state.email} />
                                        <Form.Text className="text-secondary">We'll never share your email with anyone else.</Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" placeholder="Password" onChange={this.setTextInput} value={this.state.password} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>
                                    <Button variant="primary" className="mx-auto" onClick={() => this.handleSubmit()}>
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        } else {
            return <Navigate to="/" replace={true} />;
        }
    }
}
