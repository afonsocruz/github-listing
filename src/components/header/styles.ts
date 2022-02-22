import styled from 'styled-components';

export const Header = styled.section`
    background-color: #303633;
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.img`
    width: 50px;

`;

export const Menu = styled.ul`
    list-style-type: none;
    display: flex;
    padding: 0;
`;

export const ListItem = styled.li`
    list-style-type: none;
    font-size: 16px;
    color: #FFF;
    margin: 0px 8px;
`;

export const Link = styled.a`
    color: #fff;
    text-decoration: none;
`;