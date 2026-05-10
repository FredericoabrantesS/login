import { useState, useEffect } from "react"
import "./css/Cadastro.css"
import {  googleLogout } from '@react-oauth/google'

import { useNavigate } from "react-router-dom"


type FormData = {
  nome: string
  email: string
  telefone: string
  uf: string
}

type UserStorage = {
  nome: string
  email: string
  imagem?: string
}

function Cadastro() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    uf: ""
  })

  const [json, setJson] = useState<string | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")

    if (storedUser) {
      const user: UserStorage = JSON.parse(storedUser)

      setForm((prev) => ({
        ...prev,
        nome: user.nome,
        email: user.email
      }))
    }
  }, [])

  function handleChange(
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) {
  const { name, value } = e.target

  setForm((prev) => ({
    ...prev,
    [name]: value
  }))
  
}


  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setJson(JSON.stringify(form, null, 2))
    console.log(form)
  }
const navigate = useNavigate()

function logout() {
  googleLogout()
  localStorage.removeItem("user")
  navigate("/") // volta pra home
}
  return (
    <div className="cadastro-container">

  <div className="cadastro-card">
    <h1>Cadastro</h1>

    <form onSubmit={handleSubmit} className="form">

      <input
        name="nome"
        value={form.nome}
        onChange={handleChange}
        placeholder="Nome"
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        name="telefone"
        value={form.telefone}
        onChange={handleChange}
        placeholder="Telefone" required
      />

      <select name="uf" value={form.uf} onChange={handleChange}>
  <option value="">Selecione o estado</option>
  
  <option value="BA">BA</option>
  <option value="CE">CE</option>
  <option value="DF">DF</option>
  <option value="ES">ES</option>
  <option value="GO">GO</option>
  <option value="MA">MA</option>
  <option value="MT">MT</option>
  <option value="MS">MS</option>
  <option value="MG">MG</option>
  <option value="RJ">RJ</option>
  <option value="RN">RN</option>
  <option value="RS">RS</option>
  <option value="RO">RO</option>
  <option value="RR">RR</option>
  <option value="SC">SC</option>
  <option value="SP">SP</option>
  

</select>

      <button type="submit" className="btn primary">
        Cadastrar
      </button>
     < button onClick={logout} className="btn danger">Sair</button>
          

    </form>

    {json && <pre className="json">{json}</pre>}
  </div>

</div>
  )
}

export default Cadastro