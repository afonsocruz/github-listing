import { Header } from '../../components/header';
import { Card } from '../../components/card';
import { Footer } from '../../components/footer';
import { useEffect, useState } from 'react';

import { IGithubUser } from '../../interfaces';

export const Home = ({ data }: any) => {
    const [user, setUser] = useState<IGithubUser>();

    useEffect(() => {
        setUser(data);
    }, [data])

    return (
        <>
            {user ?
                <>
                    <Header profileLink={user.blog} repoLink={user.html_url} data={data} avatar={user.avatar_url} />
                    <Card data={data} />
                    <Footer />
                </>
                :
                <h1>Something wrong has just happened</h1>
            }
        </>
    )
};