import styled from 'styled-components';

export const Pricing = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
`;

export const PricingCard = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #ccc;
    text-align: center;

    &:hover {
        box-shadow: 3px 3px 5px #ccc;
        transform: translateY(-2px);
    }
`;

export const PricingTitle = styled.h2`
    text-align: center;
    font-weight: 300;
`;

export const PricingFeatures = styled.ul`
    text-align: left;
    margin-bottom: 60px;
`;

export const Price = styled.span`
    text-align: center;
    font-size: 54px;
    margin-top: 30px;
    margin-bottom: 60px;
`;
