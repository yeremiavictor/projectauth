import { useState } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {auth} from './config/firebase'
import './App.css';

function App() {

  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser)
  })

  const register = async () => {
    try{
      const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        )
      console.log(user)
    } catch (err){
      console.log(err.message)
    }
  }


  const login = async () => {
    try{
      const user = await signInWithEmailAndPassword(
          auth,
          loginEmail,
          loginPassword
        )
      console.log(user)
    } catch (err){
      console.log(err.message)
    }
  }


  const logout = async () => {
    await signOut(auth)
  }



  return (
    <div className="App">
      <div>
        <h3>Register User</h3>
        <input
          placeholder="Email"
          onChange={(event) => {
            setRegisterEmail(event.target.value)
          }}/>
          
        <input 
          placeholder="Password"
          onChange={(event) => {
            setRegisterPassword(event.target.value)
          }}/>

        <button onClick={register}>Create User</button>
      </div>



      <div>
        <h3>Login User</h3>
        <input 
          placeholder="Email"
          onChange={(event) => {
          setLoginEmail(event.target.value)
        }}/>

        <input          
          placeholder="Password"
          onChange={(event) => {
            setLoginPassword(event.target.value)
        }}/>

        <button onClick={login}>Login</button>
      </div>


      <div>
        <h3>User Logged In</h3>
        {user?.email}
        <button onClick={logout}>Sign Out</button>
      </div>


    </div>
  );
}

export default App;
