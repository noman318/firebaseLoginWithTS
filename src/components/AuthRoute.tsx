import React, { useState,PropsWithChildren, useEffect } from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

// interface AuthPageProps {children}
 
const AuthRoute: React.FunctionComponent<PropsWithChildren> = (props) => {
    const {children} = props
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    const AuthCheck = onAuthStateChanged(auth,(user)=>{
        if(user){
            setLoading(false)
        }else{
            console.log('unauhorized')
            navigate('/login')
        }
    })
    useEffect(()=>{
        AuthCheck()
        return () => AuthCheck()
    },[auth,AuthCheck])
     if(loading) return <p>loading ...</p>
    return ( 
        <>{children}</>
     );
}
 
export default AuthRoute;