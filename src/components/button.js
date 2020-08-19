import styled from 'styled-components';

export const ButtonContainer = styled.button`
font-size: 1.5 rem;
background-color: gold;
border: 0.2rem solid gold;
border-color: ${props => props.cart? "crimson" : "green"};
color: ${props => props.cart? "crimson" : "green"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.3s ease-in-out;
&:hover{
    color: ${props => props.cart? "gold" : "gold"};
    border-color: ${props => props.cart? "gold" : "gold"};
    background-color: ${props => props.cart? "crimson" : "green"};
}
&:focus{
    outline: none;
}
`;