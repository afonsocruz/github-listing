import * as S from './styles';
import GithubImg from '../../assets/images/github.png'

export const Footer = () => {
    return (
        <S.Footer>
            <S.GithubLink
                href='https://uol.com.br'
                target='_blank'
                rel='noopener noreferrer'
            >
                <S.GithubLogo src={GithubImg} />
            </S.GithubLink>
        </S.Footer>
    )
};