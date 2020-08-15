import styled from 'styled-components';

export const ButtonContainer = styled.button`
font-size: 1.5 rem;
background-color: gold;
border: 0.2rem solid green;
color: green;
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
transition: all 0.3s ease-in-out;
&:hover{
    color: gold;
    border-color: gold;
    background-color: green;
}
&:focus{
    outline: none;
}
`;