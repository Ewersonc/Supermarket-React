import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import Cookies from 'js-cookie';

function Login() {
    const navigation = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendRequest = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const json = await response.json();

            if (!response.ok) {
                alert(json.message || 'Falha no login.');
                return;
            }

            Cookies.set('token', json.token);

            navigation('/home');

        } catch (error) {
            console.error("Erro no login:", error);
            alert("Erro ao fazer login.");
        }
    };

    const cadastroUser = () => {
        navigation('/cadastro');
    };

    return (
        <div className="loginPage">
            <div className="loginContainer">

                <div className="esquerdaContainer">
                    <div className="formContainer">
                        <div className="tituloP">
                            <h1>Bem-vindo de volta, acesse sua conta!</h1>
                            <div className="icons">
                                <i className="fa-brands fa-google"></i>
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-square-x-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                            <p>Use sua conta de e-mail:</p>
                        </div>

                        <form onSubmit={sendRequest}>
                            <div className="formGrup">
                                <i className="fa-solid fa-user"></i>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text"
                                    required
                                    placeholder="Usuário"
                                />
                            </div>

                            <div className="formGrup">
                                <i className="fa-solid fa-lock"></i>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    required
                                    placeholder="Senha"
                                />
                            </div>

                            <a target="_blank" rel="noopener noreferrer" href="https://pbs.twimg.com/media/GrRTK-LWMAAkq9s.jpg">Esqueceu sua senha?</a>

                            <button type="submit">Entrar</button>
                        </form>
                    </div>
                </div>

                <div className="direitaContainer">
                    <div className="direitaForm">
                        <div className="tituloP">
                            <h1>Olá, Bem-vindo!</h1>
                            <p>Crie sua conta e <br /> comece sua jornada conosco</p>
                        </div>

                        <button onClick={cadastroUser}>Inscreva-se</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;
