import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
// import '../css/Details'
// import { data } from '../data'
const Details = () => {
    const [detail, setDetail] = useState("")
    const { id } = useParams();
    const fetchData = async () => {
        const url = `https://api.tvmaze.com/shows/${id}`;
        const data = await fetch(url);
        const parsedData = await data.json()
        setDetail(parsedData)
        // console.log(parsedData)
    }
    useEffect(() => {
        // eslint-disable-next-line 
        // document.title = `${capitaFirstLetter(prop.category)}- News`
        fetchData();
    })
    return (
        <div className='container'>
            <div className="row">
                <div className="card my-5" >
                    <div className="row g-0">
                        <div className="col-md-3">
                            <img src={detail ? detail.image.original : ""} className="img-fluid rounded-start" alt="..." width={'400px'}/>
                        </div>
                        <div className="col-md-8 d-flex">
                            <div className="card-body">
                                <h5 className="card-title">{detail.name}</h5>
                                <p className="card-text"><b>Language :</b> {detail.language}</p>
                                <p className="card-text"><b>Rating :</b>  {detail ? detail.rating.average : "null"}</p>
                               
                                <p><b>Summary :</b>{detail.summary}</p>
                                <p className="card-text"><b>Release Date :</b>{detail.premiered}</p>
                                <Link to={`/bookticket/${id}`} className="btn btn-dark">Book ticket</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
