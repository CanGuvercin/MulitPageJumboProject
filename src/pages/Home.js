import { Link, useNavigate } from 'react-router-dom';

function HomePage() {

    const navigate = useNavigate();
    function handleNavigation() {
        navigate('/products');  
    }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>.
      </p>
      <p>
        <button onClick={handleNavigation}>Click ulan</button>
      </p>
    </>
  );
}

export default HomePage;
