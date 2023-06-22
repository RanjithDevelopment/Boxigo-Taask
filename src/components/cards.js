import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FaArrowAltCircleRight, FaHome, FaCubes, FaMapMarkedAlt, FaCalendarAlt, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import "../css/cardStyles.css";
const Cards = () => {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        async function getData() {
            const apiResponse = await axios.get("http://test.api.boxigo.in/sample-data/");
            setApiData(apiResponse.data.Customer_Estimate_Flow
            );
        }
        getData();
    }, [])
    return (
        <>
            <div className='container'>
                <h1>My Moves</h1>
                <div className='row'>
                    {apiData.map((data) => {
                     
                       const from = data.from_address;
                       const to = data.to_address;
                        return (
                            <>
                            <div className='card-container'>
                                <div className='col'>
                                    <div className='top-content'>
                                        <div className='from'>
                                            <h3>
                                                From
                                            </h3>
                                            <p>{`${from.firstName},${from.fromAddress},`}</p>
                                            <p>{`${from.fromCity},${from.fromLacality},`}</p>
                                            <p>{`${from.fromState},${from.pincode}`}</p>

                                        </div>
                                        <div className='arrow'>
                                            <FaArrowAltCircleRight className='icon' />
                                        </div>
                                        <div className='to'>
                                            <h3> To </h3>
                                            <p>{`${to.firstName},${to.toAddress},`}</p>
                                            <p>{`${to.toCity},${to.toLocality},`}</p>
                                            <p>{`${to.toState},${to.pincode}`}</p>
                                        </div>
                                        <div className='last'>
                                            <h3>Request#</h3>
                                            <p>{data.estimate_id}</p>

                                        </div>
                                    </div>
                                    <div className='bottom-content'>
                                        <div className='content'>
                                            <FaHome className='icon' /> <p> {data.property_size}</p>
                                        </div>
                                        <div className='content'>
                                            <FaCubes className='icon' /><p>{data.total_items} </p>
                                        </div>
                                        <div className='content'>
                                            <FaMapMarkedAlt className='icon' /><p> {data.distance}</p>
                                        </div>
                                        <div className='content'>
                                            <FaCalendarAlt className='icon' /><p>{data.date_created}</p>
                                        </div>
                                        <div className='content'>
                                            <FaCheckCircle className='icon' /><p> is flexible </p>
                                        </div>
                                        <div className='content'>
                                            <button className='btn btn-lite'>View More Details</button>
                                        </div>
                                        <div className='content'>
                                            <button className='btn btn-red'>Awaiting Quotes</button>
                                        </div>
                                    </div>
                                    <div className='disclaimer'>
                                        <FaExclamationTriangle className='icon' />
                                        <p>Please Update your move Data before two days of shifting</p>
                                    </div>
                                </div>

                            </div>
                            <hr/>
                            </>
                        )
                    })}

 
                </div>
            </div>
        </>
    )
}

export default Cards




