import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{9,}$/;
  const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"})

  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
    if (emailRegex.test(e.target.value)) {
      e.target.setCustomValidity("");
    }
  });
 
  const handlePasswordChange = ((e) => {
    setFormValues({...formValues, password: e.target.value})
    if (passwordRegex.test(e.target.value)) {
      e.target.setCustomValidity("");
    }
  });
 
  const handleSelectChange = ((e) => {
    setFormValues({...formValues, favClass: e.target.value})
  });
  // Si se clickea el boton de submit se verifica que el email y el password sean validos
  const clickSubmit = ((e) => {
    e.preventDefault();
    if (emailRegex.test(formValues.email) && passwordRegex.test(formValues.password)) {
      alert(JSON.stringify(formValues))
    } else {
      alert("Formulario no valido");
    }
  });
  return (
    <div>
     <h1>Ejemplo de formularios!</h1>
    
     <Form>
     <Form.Group className="mb-6" controlId="formBasicEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control type="email" 
       placeholder="Enter email"
       onChange= {handleEmailChange} />
       <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password"
        placeholder="Password"
        onChange = {handlePasswordChange}/>
       <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicCheckbox">
       <Form.Label>Favorite Class</Form.Label>
       <Form.Select onChange = {handleSelectChange}>
         <option value="1">ISIS3710</option>
         <option value="2">Programación con tecnologias web</option>
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
