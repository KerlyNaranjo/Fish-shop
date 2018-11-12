import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => (
    <nav className='login'>
        <h2>Inventory Login</h2>
        <p>Inicia sesión para manejar tu inventario de Fish Shop</p>
        <button
            className='github'
            onClick={() => props.authenticate('Github')}
        >
            Login with GitHub
        </button>
        <button
            className='twitter'
            onClick={() => props.authenticate('Twitter')}
        >
            Login with GitHub
        </button>
        <button
            className='facebook'
            onClick={() => props.authenticate('Facebook')}
        >
            Login with GitHub
        </button>
    </nav>
);

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
}

export default Login;
