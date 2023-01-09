import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

export interface IHomePageProps {}

export const Home: React.FunctionComponent<IHomePageProps> = (props) => {
    const auth = getAuth();

    return (
        <div>
            <h2>Home Page (Protected by Firebase!)</h2>
            <button onClick={() => signOut(auth)}>Sign out of Firebase</button>
        </div>
    );
};

;