import React from 'react';
import styled from 'styled-components';
//imports

//create a div element using back ticks. Use CSS syntax
const StyledDiv = styled.div`
    border: 1px solid black;
    border-radius: 25px;
    background-color: rgba(128, 128, 128, 0.5);
    
    h2 {
        text-align: center;
    }

    .specifics {
        margin: 1rem;
    }
`;

//create a constants array of the pissa toppings from the App file
const constants = ["pepperoni", "sausage", "bacon", "ham", "extraCheese"]

//create a function of Orders that takes the object Details as a prop
function Orders({details}) {
//create a JSX element
//map over the toppings to see if any toppings were selected
    return (
        <StyledDiv key={details.id} className="orderContainer">
            <h2>Order Number: {details.id}</h2>
            <div className="specifics">
                <p>Name: {details.customer}</p>
                <p>Size: {details.size}</p>
                <p>Sauce: {details.sauce}</p>
            <div>
            <p>Toppings:</p>
                    <ul>
                    {constants.map((topping,idx) => {
                        if(details[topping] === true){
                            return(
                                <li key={idx}>{topping}</li>
                            )
                        }
                    })}
                </ul>
            </div>
            <p>{details.gluten ? "Gluten Free Crust" : "Regular Crust"}</p>
            <p>Special Instructions</p>
            <p>{details.special || "None"}</p>
            </div>
        </StyledDiv>
    )
//create a special instructions section that checks if special details are empty
}

export default Orders;