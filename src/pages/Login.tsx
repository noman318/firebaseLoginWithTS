import React, { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

export interface ILoginProps  {}

export const Login:React.FunctionComponent<ILoginProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(false);
  const [authing, setAuthing] = useState(false)
  const signInWithGoogle =async ()=>{
    setAuthing(true)

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res)=>{
        console.log('res', res.user.uid)
        navigate('/')
      })
      .catch((error)=>{
        console.error(error)
        setAuthing(false)
      })
  }
  return (
    <div>
     <h2>Login</h2> 
     <button onClick={()=> signInWithGoogle()} disabled={authing} > Sign In with Google</button>
    </div>
  )
}
