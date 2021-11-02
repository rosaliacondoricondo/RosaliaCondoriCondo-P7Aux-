import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

const NewPet = () => {
    const petNameHandler = (event) => {
        console.log(event.target.value);
    }
    return (
        <React.Fragment>
            <Card>
            <form>
                <label>Correo electronico</label>
                <input type="email" onChange={petNameHandler} placeholder="@gmail.com" />
                <input type="email" onChange={petNameHandler} placeholder="@hotmail.com" />
                <input type="email" onChange={petNameHandler} placeholder="@yahoo.com" />
                
                <label>Contraseña</label>
                <input type="password" pattern="[A-Za-z]{8,}"/>
                <Button>Crear</Button>
            </form>
            </Card>
        </React.Fragment>
        
    );
   
};

export default NewPet;
