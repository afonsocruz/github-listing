import * as S from './styles';

interface IGithubUser {
    repoLink: string;
    profileLink: string;
    avatar: string;
    data: [];
}

export const Header = ({ repoLink, profileLink, avatar }: IGithubUser) => {
    const menuItems = ['profile', 'repos'];

    return (
        <>
            <S.Header>
                <S.Menu>
                    {menuItems.map(item => (
                        <S.ListItem key={item}>
                            <S.Link
                                href={item === 'profile' ? profileLink : repoLink}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {item}
                            </S.Link>
                        </S.ListItem>
                    ))}
                </S.Menu>
            </S.Header>
        </>
    )
};