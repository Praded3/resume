import styled from '@emotion/styled';

export const ContactsContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #161D2A;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin: 48px 0 0 40px;
    width: 300px;
`
export const Title = styled.h3`
    color: #161d2a;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 8px;

`
export const Item = styled.a`
    display: inline;
    /* width: 100%; */
    color: #609bf5;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
 
    align-items: center;
    gap: 15px;
    :hover, :focus{
        color: #3F49A5;
    }
`
