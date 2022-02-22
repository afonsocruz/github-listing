import { useState, useEffect } from 'react';
import { IGithubUser } from "../../interfaces"
import LinkedInImage from '../../assets/images/in.png';
import * as S from './styles';

export const Card = ({ data }: any) => {
    const [user, setUser] = useState<IGithubUser>()

    useEffect(() => {
        setUser(data);
    }, [data])

    return (
        <S.Container>
            <S.Card>
                {user &&
                    <>
                        <S.CardTop>
                            <S.UserAvatar src={user?.avatar_url} alt={user?.name + '' + user?.bio} />
                            <S.UserName>
                                {user?.name}
                            </S.UserName>
                            <S.UserLocation>
                                {user?.location}
                            </S.UserLocation>
                            <S.UserCompany>
                                {user?.company}
                            </S.UserCompany>
                        </S.CardTop>
                        <S.CardBottom>
                            <S.UserBio>
                                {user?.bio}
                            </S.UserBio>
                            <S.UserSocialInteraction>
                                <S.UserFollowers>
                                    Followers: <strong>{user?.followers}</strong>
                                </S.UserFollowers>
                                <span>|</span>
                                <S.UserFollowing>
                                    Following: <strong>{user?.following}</strong>
                                </S.UserFollowing>
                            </S.UserSocialInteraction>
                            <S.LinkedInLink href={user?.blog} target='_blank'>
                                <S.LinkedInLogo src={LinkedInImage} alt='linkedin transparent logo' />
                            </S.LinkedInLink>
                        </S.CardBottom>
                    </>
                }
            </S.Card>
        </S.Container>
    )
}