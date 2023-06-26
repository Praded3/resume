import styled from '@emotion/styled';

export const Wrapp = styled.div`
    display: flex;
    flex-direction: row-reverse;
    background-color: #fff;
    width: 1200px;
    margin: 0 auto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media screen and (max-width: 767px){
        flex-direction: column;
    }
`