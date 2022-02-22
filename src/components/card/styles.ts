import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75vh;
`;

export const Card = styled.section`
    width: 320px;
    border-radius: 8px;
    -webkit-box-shadow: 0px 0px 14px -9px rgba(255,255,255,0.14); 
    box-shadow: 0px 0px 14px -9px rgba(255,255,255,0.14);
`;

export const CardTop = styled.div`
    background-color: #29f068;
    height: 260px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const CardBottom = styled.div`
    background-color: #303633;
    height: 260px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const UserAvatar = styled.img`
    width: 70px;
    border-radius: 100px;
`;

export const UserName = styled.h1`
    font-size: 18px;
    color: #383d3b;
`;

export const UserLocation = styled.span`
    font-size: 16px;
    color: #383d3b;
    text-align: center;
`

export const UserCompany = styled.h3`
    font-size: 14px;
    color: #383d3b;
    text-align: center;
`;

export const UserBio = styled.p`
    font-size: 16px;
    color: #FFF;
    text-align: center;
    margin: 0px;
`;

export const UserSocialInteraction = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    span {
        color: #fff;
        margin: 0px 16px;
    }
`;

export const UserFollowers = styled.h3`
    font-size: 16px;
    color: #fff;
    text-align: center;
    font-weight: 300;
`;

export const UserFollowing = styled.h3`
    font-size: 16px;
    color: #fff;
    text-align: center;
    font-weight: 300;
`;

export const LinkedInLink = styled.a`
    text-decoration: none;
`

export const LinkedInLogo = styled.img`
    width: 35px;
`   