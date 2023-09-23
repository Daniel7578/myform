import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{9,}$/;
  const [formValues, setFormValues] = useState({ email: '', password: '', favClass: '1' });
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
    if (emailRegex.test(e.target.value)) {
      setIsEmailValid(true);
      e.target.setCustomValidity('');
    }
    else {
      setIsEmailValid(false);
      e.target.setCustomValidity('Invalid email');
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormValues({ ...formValues, password: newPassword });

    if (passwordRegex.test(newPassword)) {
      setIsPasswordValid(true);
      e.target.setCustomValidity('');
    } else {
      setIsPasswordValid(false);
      e.target.setCustomValidity('Invalid password');
    }
  };

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, favClass: e.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    if (emailRegex.test(formValues.email) && isPasswordValid && isEmailValid) {
      alert(JSON.stringify(formValues));
    } else {
      alert('Formulario no válido');
    }
  };

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>

      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
            isInvalid={!isEmailValid}
            isValid={isEmailValid}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Invalid Email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            isInvalid={!isPasswordValid}
            isValid={isPasswordValid}
          />
          <Form.Text className="text-muted">
            Your password should have numbers and letters and should be at least 9 characters long
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Invalid password
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select onChange={handleSelectChange}>
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologías web</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" onClick={clickSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;