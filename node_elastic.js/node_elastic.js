const { Client } = require('@elastic/elasticsearch');
// const config = require('config');
// const elasticConfig = config.get('elastic');

const client = new Client({
    node: 'http://elastic2:9200',
});

async function searchElastic(searchTerm, startDate = null, endDate = null) {
    const query = {
        index: 'documents_idx',
        q: searchTerm,
    };

    if (startDate || endDate) {
        const dateRange = {};
        if (startDate) {
            dateRange.gte = startDate;
        }
        if (endDate) {
            dateRange.lte = endDate;
        }
        query.body = {
            query: {
                range: {
                    entryDate: dateRange
                }
            }
        }
    }
}


module.exports = {
    searchElastic
}
// Search.jsx (Manejo de la búsqueda):
// jsx
// Copy code
// import React, { useEffect, useContext, useState } from 'react';
// import { GlobalContext } from '../../context/GlobalState';
// import SearchResults from './SearchResults'; // Importa el componente de resultados

// const Search = () => {
//     const { searchDocs } = useContext(GlobalContext);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [startDate, setStartDate] = useState('');
//     const [endDate, setEndDate] = useState('');
//     const [searchResults, setSearchResults] = useState([]);

//     const handleSubmit = (event) => {
//         event.stopPropagation();
//         event.preventDefault();
//         console.log("Lo que quiero buscar es: ", searchTerm);
//         let response = searchDocs(searchTerm, startDate, endDate);
//         setSearchResults(response); // Actualiza los resultados de búsqueda
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 {/* Formulario de búsqueda */}
//             </form>

//             {/* Componente para mostrar los resultados */}
//             <SearchResults results={searchResults} />
//         </div>
//     )
// }

// export default Search;
// SearchResults.jsx (Visualización de resultados):
// jsx
// Copy code
// import React from 'react';

// const SearchResults = ({ results }) => {
//     return (
//         <div>
//             {/* Muestra los resultados aquí */}
//             {results.map((result, index) => (
//                 <div key={index}>
//                     {/* Renderiza cada resultado */}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default SearchResults;