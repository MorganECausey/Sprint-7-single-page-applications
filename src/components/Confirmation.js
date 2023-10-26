import React from "react";
import { Link } from "react-router-dom";
import Orders from './Orders';
import styled from "styled-components";

function Confirmation(props) {
    const {orders, clear} = props

    return (
        <StyledDiv className="confirmation-wrapper">
            <header>
                <h1>Bloomtech Eats</h1>
                <div className="nov-links">
                    <Link to="/"><button>Home</button></Link>
                    <button>Help</button>
                </div>
            </header>
            <div className="order-success">
                <h2>Success! Your order is on the way!</h2>
            </div>
            <div className="reset-button"><button onClick={clear}>Clear Orders</button></div>
            <div className="order-details">
                {orders.map(order =>{
                    return (
                        
                    )
                })}
            </div>
        </StyledDiv>
    )
}