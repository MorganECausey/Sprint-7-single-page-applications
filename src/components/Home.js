import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    background-image: url('');
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    display: flex;
    flex-direction: center;
    padding: 10%;
    border: double 8px red;
    `;

    function Home(props) {
        return (
            <div className="home-wrapper">
                <header>
                    <h1>Bloomtech Eats</h1>
                    <div className="nav">
                        <Link to="/"><button>Home</button></Link>
                        <button>Help</button>
                    </div>
                </header>
                <StyledWrapper className="buy-pizza">
                    <h1>Your favorite food, delivered while coding</h1>
                    <Link to="/pizza"><button id="order-pizza">Pizza!</button></Link>
                </StyledWrapper>
            </div>
        )
    }