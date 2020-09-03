import styled from 'styled-components';

export const ButtonContainer = styled.button`
font-size: 1.5 rem;
background-color: black;
border: 0.2rem solid;
border-color: ${props => props.cart ? "greenyellow" : "cyan"};
color: ${props => props.cart ? "greenyellow" : "cyan"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.3s ease-in-out;
&:hover{
    color: black;
    border-color: black;
    background-color: ${props => props.cart ? "greenyellow" : "cyan"};
}
&:focus{
    outline: none;
}
`;