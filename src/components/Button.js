import styled, { css } from 'styled-components';

export const Button = styled.button`
    padding: 10px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid #CCCCCC;
    font-size: 16px;
    margin-left:1
    
    

    ${(props) =>
        props.primary &&
        css`
            background-color: #081F42;
            color: white;
        `}
`;
