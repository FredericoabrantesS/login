import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import  './css/Home.css'


type User = {
  nome: string
  email: string
  imagem: string
}


type GoogleUser = {
  name: string
  email: string
  picture: string
}

function Home() {
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  function login(credentialResponse: any) {
    if (!credentialResponse.credential) return

    const decoded = jwtDecode<GoogleUser>(credentialResponse.credential)
      
    

    const userData: User = {
      nome: decoded.name,
      email: decoded.email,
      imagem: decoded.picture
      
    }

    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  function logout() {
    googleLogout()
    localStorage.removeItem("user")
    setUser(null)
  }

 
return (
  <>
    
    <header className="header">
      <div className="header-content">
      

      <div className="nav">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/sobre")}>Sobre</button>

        {user && (
          <>
            <button onClick={() => navigate("/cadastro")}>Cadastro</button>
            <button onClick={logout} className="danger">Sair</button>
          </>
        )}
        </div>
      </div>
    </header>

    
    <div className="conteudo">

      <section className="section">
        <div className="card">
          <h1>O que é este sistema?</h1>
          <p>
            Esta aplicação permite que o usuário realize autenticação com uma conta Google e efetue um cadastro básico, utilizando automaticamente os dados fornecidos durante o login.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Como funciona?</h2>
          <p>1. Faça login com sua conta Google.</p>
          <p>2. Seus dados serão carregados automaticamente.</p>
          <p>3. Complete o cadastro.</p>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Acessar</h2>

          {!user ? (
            <>
              <p>Faça login para acessar o cadastro.</p>
              <GoogleLogin onSuccess={login} />
              
            </>
          ) : (
            <>
              <img src={user.imagem} className="avatar" />
              <h3>{user.nome}</h3>
              <p>{user.email}</p>
            </>
          )}
        </div>
      </section>

    </div>
  </>
)
} 
export default Home