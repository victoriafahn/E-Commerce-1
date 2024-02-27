
import CartWidget from './CartWidget';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
background-color: #333; 
`;

const Logo = styled.img`
height: 50px; 
`;

const NavBar = () => {
return (
    <NavbarContainer>
        <Logo src="./resources/flor.png"/>
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </NavbarContainer>
    );
};

export default NavBar;
