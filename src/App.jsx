import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes, Link } from 'react-router-dom';
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import About from './pages/about';
import SignIn from './pages/signIn';
import SignUp from './pages/SignUp';
import CardDetail from './pages/CardDetail';





function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [searchQuery, setSearchQuery] = useState('');
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(9);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  useEffect(() => {
    (async () => {
      const res = await axios.get('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards');
      setCards(res.data);
    })();
  }, []);


  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
    setCurrentPage(1);
  };

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchQuery)
  );

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };


  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  console.log(theme)

  return (

    <>

      <NavBar toggleTheme={toggleTheme} onSearch={handleSearch} />


      <Routes>
        <Route path="/" element={
          <div>
            <h1>t-card</h1>
            <div className='cards'>
              {currentCards.map(card => (
                <Link to={`/CardDetail/${card.id}`} key={card.id}>
                  <div className='card'>
                    <img src={card.image.url} alt={card.title} />
                    <h2>{card.title}</h2>
                    <p>{card.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="pagination">
              <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
              <span>{`Page ${currentPage} of ${totalPages}`}</span>
              <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
          </div>
        } />

        <Route path="/about" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path='/cardDetail' element={<CardDetail cards={cards} />} />
      </Routes>

      <Footer />
    </>
  );
}



export default App
