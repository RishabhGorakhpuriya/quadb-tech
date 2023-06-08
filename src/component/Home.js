import React, { useEffect, useState } from 'react'
// import { data } from '../data'
import { Link } from 'react-router-dom'
const Home = () => {
    const [results, setResults] = useState([]);
    const fetchData = async () => {
        const url = `https://api.tvmaze.com/search/shows?q=all`;
        const data = await fetch(url);
        const parsedData = await data.json()
        setResults(parsedData)
        // console.log(parsedData)
    }
    useEffect(() => {
        // eslint-disable-next-line 
        fetchData();
    })
    return (
        <div className='container'>
            <div className="row">
                {results ? results.map((item) => {
                    return (
                            <div className="col-md-4 my-5">
                                <div className="card" key={item.show.id}>
                                    <div style={{ display: 'flex', position: 'absolute', }}>
                                        <span className="badge bg-danger" style={{ borderRadius: '5px', color: "yellow" }} ><i className="fa-solid fa-star"></i>{item.show.rating.average ? item.show.rating.average : "0.0"}</span>
                                    </div>
                                    <img src={item.show.image.original} className="card-img-top" alt="..." />
                                    <div className="card-body m-3">
                                        <h5 className="card-title ">{item.show.name}</h5>
                                        <p className="card-text">Language : {item.show.language}</p>
                                        <p className="card-text">Realse : {item.show.premiered}</p>
                                        <Link to={`movie/${item.show.id}`} className="btn btn-dark">Go somewhere</Link>
                                    </div>

                                </div>
                            </div>
                    )
                }) : ""}
            </div>
        </div>
    )
}

export default Home


// {movie ? movie.map((item) => {
//     return (
//         <Link to={`/movie/${item.show.id}`}>
//             <div className="col-md-4 my-5" key={item.id}>
//                 <div className="card">
//                     <div style={{ display: 'flex', position: 'absolute', }}>
//                         <span className="badge bg-danger" style={{ borderRadius: '5px', color: "yellow" }} ><i className="fa-solid fa-star"></i>{item.show.rating.average ? item.show.rating.average : "0.0"}</span>
//                     </div>
//                     <img src={item.show.image.medium} className="card-img-top" alt="..." />
//                     <div className="card-body m-3">
//                         <h5 className="card-title ">{item.show.name}</h5>
//                         <p className="card-text">Language : {item.show.language}, {item.show.genres}</p>
//                         <p className="card-text">Realse : {item.show.premiered}</p>
//                         <Link to="movie/:id" className="btn btn-dark">Go somewhere</Link>
//                     </div>
//                 </div>
//             </div>
//         </Link>
//     )
// }): ""}