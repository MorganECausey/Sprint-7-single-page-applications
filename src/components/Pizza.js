import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
//import dependancies

//define style components for the select element of the page
const StyledSelect = styled.select`
    max-width: 20rem;
    width: 15rem;
    background-color: black;
    margin-left: 1rem;
    neight: 2rem;
`;


//define a styled componenet for the div for the name
const StyledName = styled.div`
    input{
        color: white;
        background-color: black;
    }
`;

//functional element for the pizza form, takes props as an argument
function Pizza(props) {
    const {
        values, submit, change, disabled, errors, reset
    } = props;
    //destructure props to extract specific properties

    const history = useHistory()//history object for routing
        const routeToConfirm = () => {
            history.push('/confirmation')
        }
//function to navigate ti the confirmation page

//function to handle form submission, include a prevent for default form submission behavior
    const onSubmit = evt => {
        evt.preventDefault()
        submit()//call the submit function from props
        reset()//call the reset function from props
        routeToConfirm()//navigate to the confirmation page
    }

    //function to handle input changes
    const onChange = evt => {
        const {name, value, checked, type} = evt.target; //extract properties from the input element
        const valueToUse = type === "checkbox" ? checked : value //determine the value based on the input type
        change(name, valueToUse) //call the change function from props to update the state
    }

    //UI code in JSX, include a size, sauce, topping, extra cheese, gluten free, and special instructions
    return(
        <div className="pizza">
            <header>
                <h1>Bloomtech Eats</h1>
                <div className="nav-links">
                    <Link to="/"><button onClick={reset}>Home</button></Link>
                    <button>Help</button>
                </div>
            </header>
            <form className="pizza-form" id="pizza-form" onSubmit={onSubmit}>
                <div className="pizza-container">
                    <h3>Build your Own Pizza</h3>
                    <div className="name"><label><h3>Enter the name for the order</h3></label></div>
                    <StyledName className="name-wrapper">
                        <input
                        id="name-input"
                        type="text"
                        name="customer"
                        placeholder="enter name"
                        onChange={onChange}
                        value={values.customer}
                        />
                    </StyledName>

                    <div className="size">
                        <label for="size-select"><h3>Size Choices</h3></label>
                        <p>Required</p>
                    </div>
                    <div className="select-wrapper">
                        <StyledSelect
                        id="size-dropdown"
                        onChange={onChange}
                        className="size-select"
                        name="size"
                        value={values.size}
                        >
                            <option value="">Select a size</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </StyledSelect>
                    </div>

                    <div className="sauce">
                        <h3>Sauce Choices</h3>
                        <p>Required</p>
                    </div>
                    <div className="sauce-wrapper">
                        <label>
                            <input
                            type="radio"
                            name="sauce"
                            value="Original Recipe"
                            onChange={onChange}
                            checked={values.sauce === "Original Recipe"}
                            />
                            Original Recipe</label>
                            <label>
                            <input
                            type="radio"
                            name="sauce"
                            value="Garlic Ranch"
                            onChange={onChange}
                            checked={values.sauce === "Garlic Ranch"}
                            />
                            Garlic Ranch</label>
                            <label>
                            <input
                            type="radio"
                            name="sauce"
                            value="BBQ"
                            onChange={onChange}
                            checked={values.sauce === "BBQ"}
                            />
                            BBQ Sauce</label>
                            <label>
                            <input
                            type="radio"
                            name="sauce"
                            value="Buffalo"
                            onChange={onChange}
                            checked={values.sauce === "Buffalo"}
                            />
                            Buffalo Sauce</label>
                    </div>
                    <div className="toppings">
                        <h3>Add your Toppings</h3>
                    </div>
                    <div className="toppings-wrapper">
                        <div className="left-panel">
                            <label>
                                <input
                                type='checkbox'
                                name='pepperoni'
                                checked={values.pepperoni}
                                onChange={onChange}
                                />
                            Pepperoni</label>
                            <label>
                                <input
                                type='checkbox'
                                name='sausage'
                                checked={values.sausage}
                                onChange={onChange}
                                />
                            Sausage</label>
                            <label>
                                <input
                                type='checkbox'
                                name='bacon'
                                checked={values.bacon}
                                onChange={onChange}
                                />
                            Bacon</label><label>
                                <input
                                type='checkbox'
                                name='ham'
                                checked={values.ham}
                                onChange={onChange}
                                />
                            Ham</label>
                            <label>
                                <input
                                type='checkbox'
                                name='extraCheese'
                                checked={values.extraCheese}
                                onChange={onChange}
                                />
                            Extra Cheese</label>
                        </div>
                        </div>
                        <div className="subs">
                            <h3>Choice of Subsitutes</h3>
                            <p>Up to 1 choice</p>
                        </div>
                        <div className="subs-wrapper">
                            <input
                            name="gluten"
                            type='checkbox'
                            checked={values.gluten}
                            onChange={onChange}
                            />
                            <label for="gluten">Gluten Free Crust (+ $1.00)</label>
                        </div>
                        <div className="special-wrapper">
                            <input
                            id="special-text"
                            name="special"
                            type="text"
                            placeholder="Anything else you'd like to add"
                            onChange={onChange}
                            value={values.special}
                            />
                        </div>
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                    <div>{errors.customer}</div>
                    <button className="submit" id="order-button" disabled={disabled}>submit</button>
                
            </div>
            </form>
        </div>
    )
}

export default Pizza;