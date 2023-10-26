import React from "react";
import { Link } from "react-router-dom";
import Orders from './Orders';
import styled from "styled-components";
//import dependancies

//define a function that takes props as a parameter
function Confirmation(props) {
    //destructure the orders and clear props from the input parameter
    const {orders, clear} = props
    //return JSX for rendering and confirmation
    return (
        //apply styled components
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
                        <Orders key={order.id} details={order} />
                    )
                })}
            </div>
        </StyledDiv>
    )
}
//define styled components for reset and details
const StyledDiv = styled.div`
    .reset-button{
            align-content: center;
            display: flex;
            justify-content: center;
            margin: 1rem;
    }
    .order-details{
        margin: 0 auto;
        max-width: 30rem;
        position: relative;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 10rem;
        padding-bottom: 3rem
    }
    `;
    //export component as the default
export default Confirmation;