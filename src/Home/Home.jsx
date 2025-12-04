import './Home.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const Home = () => {
  const navigation = useNavigate();

  useEffect(() => {
    document.title = "Home";
  }, []);

  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = Cookies.get("token");

        const response = await fetch("http://localhost:3000/api/product", {
          method: "GET",
          headers: { "Authorization": "Bearer " + token }
        });

        if (!response.ok) {
          console.log("Erro ao buscar produtos:", response.status);
          return;
        }

        const data = await response.json();
        setProducts(data);

      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='Homepage'>

      <nav id='Home-bar'>
        <div id='brand'>
          <img src='https://icons.veryicon.com/png/o/miscellaneous/industry-food-objects/supermarket-4.png' />
          <h2>SuperMarket</h2>
        </div>

        <div id='options'>
          <button>Home</button>
          <button>User</button>
          <button>FAQ</button>
          <button onClick={() => navigation('/login')}>Sair</button>
        </div>

        <div id='user-info'>
          <button>
            <img src='https://www.shareicon.net/data/2016/05/24/770117_people_512x512.png' />
          </button>

          <p>Usuário</p>
        </div>
      </nav>

      <div className="table-container">
        <h2>Lista de Produtos</h2>

        <table className="zebra-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Em Estoque</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>R$ {product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.inStock ? "Sim" : "Não"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Home;
