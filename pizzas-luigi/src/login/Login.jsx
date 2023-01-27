import React, {useEffect} from 'react';
import './login.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
// Página principal
    const navigate = useNavigate();

    const enter = () => {
        navigate('/menu')
    };

    const welcome = e => {
        e.preventDefault();
        navigate('/menu')
    };
    // Uso de tecla Enter
    useEffect(() => {
        const keyDown = e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                enter();
            }
        };
        document.addEventListener('keydown', keyDown);

        return () => {
            document.removeEventListener('keydown', keyDown);
        };
    },[]);    

    return (
        <div className='app-login' >
            <div className='validate'>
                <h1>Bienvenido</h1>
                <p>Ingresa tu usuario y contraseña:</p>
                <form onSubmit={welcome}>
                    <fieldset className='login-set'>
                        <label htmlFor="user"> Usuario:
                            <input
                                name='user'
                                type='text'
                                id='user'
                                placeholder='Nombre o Email'
                            />
                        </label>
                        <label htmlFor='password'> Contraseña:
                            <input
                                type='password'
                                name='password'
                                id='password'
                                placeholder='****'
                            />
                        </label>
                    </fieldset>
                </form>
            </div>
            <div className='login-btn'>
                <Button variant="contained" onClick={enter} type="submit" disableElevation>
                    Ingresar
                </Button>
            </div>
        </div>
    )
}
