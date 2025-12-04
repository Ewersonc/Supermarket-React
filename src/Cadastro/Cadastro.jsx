import './Cadastro.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Cadastro = () => {
  const navigation = useNavigate();

  useEffect(() => {
    document.title = "Página de Cadastro";
  }, []);

  
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          cpf,
          email,
          password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Erro ao cadastrar.");
        return;
      }

      alert("Cadastro realizado com sucesso!");
      navigation('/login');
    } catch (error) {
      console.error("Erro no cadastro:", error);
      alert("Não foi possível conectar ao servidor.");
    }
  };

  return (
    <div className='CadastroPag'>
      <div className='cadastroContainer'>
        <form className='formCadastro' onSubmit={handleSubmit}>

          <h1>Crie sua conta</h1>

          <div className='formGroupCadastro'>

            <input
              type='text'
              placeholder='Nome Completo'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type='number'
              placeholder='CPF'
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />

            <input
              type='email'
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type='password'
              placeholder='Senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type='password'
              placeholder='Confirme sua Senha'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

          </div>

          <button type='submit'>Cadastrar</button>
          <button type='button' onClick={() => navigation('/login')}>Voltar</button>

        </form>
      </div>
    </div>
  );
};

export default Cadastro;
