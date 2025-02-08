import React, { useState } from 'react';
import { Cards } from './Components/Cards';
import { NavBar } from './Components/NavBar';
import { Footer } from './Components/Footer';
import './App.css';

function App() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!query.trim()) return;

        setLoading(true);
        setResults([]);

        try {
            const response = await fetch("http://localhost:5000/hola", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query }),
            });

            const data = await response.json();
            setResults(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="App">
            <h1>Web Scraper</h1>
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Introduzca su busqueda"
                    style={{ padding: '10px', width: '300px', marginRight: '10px' }}
                />
                <button onClick={handleSearch} disabled={loading}>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </div>

            {loading && <p>Loading...</p>}
            <NavBar/>
            <div className='card-Container'>
                {results.length > 0 ? (
                        <Cards results={results}/>   
                ) : (
                    <></>
                )}
            </div>
            <Footer/>
        </div>
    );
}

export default App;
