import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import '../css/Bookticket.css'
const Bookticket = () => {
  const [detail, setDetail] = useState("")
  const [userInput, setUserInput] = useState({ name: "", email: "", date: "", moviename:`${detail.name}`});

  const { id } = useParams();
  const fetchData = async () => {
    const url = `https://api.tvmaze.com/shows/${id}`;
    const data = await fetch(url);
    const parsedData = await data.json()
    setDetail(parsedData)
  }
  useEffect(() => {
    // eslint-disable-next-line 
    fetchData();
    localStorage.setItem("Username", JSON.stringify(userInput))
  }, [userInput])

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("userInput", JSON.stringify(userInput));
  }
  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value})
  }
  return (
    <div className='container'>
      <div className="row my-4 d-flex justify-content-center">
        <div className="col-lg-8 col-md-12">
          <div className="contact-wrap w-100 p-3">
            <form id="contactForm" onSubmit={handleSubmit} name="contactForm" className="contactForm">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label className="label" htmlFor="name">Name</label>
                    <input type="text" className="form-control" onChange={handleChange} id="name" value={userInput.name} name="name" placeholder="Name" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label className="label" htmlFor="email">Email</label>
                    <input type="email" className="form-control" onChange={handleChange} id="email" value={userInput.email} name="email" placeholder="Email" />

                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label className="label" htmlFor="subject">Date</label>
                    <input type="date" className="form-control" onChange={handleChange} id="date" value={userInput.date} name="date" placeholder="date" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="form-group">
                    <label className="label" htmlFor="subject">Movie Name</label>
                    <input type="text" className="form-control" id={id} name="moviename" onChange={handleChange} value={detail.name}/>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group my-4">
                    <input type="submit" className="btn btn-sucess" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bookticket
