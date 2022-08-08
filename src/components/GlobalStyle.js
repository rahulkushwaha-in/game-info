import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    html{
        &::-webkit-scrollbar{
            width: 0.4rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
    }
    body{
        font-family:'Montserrat', sans-serif;
        width: 100%;
    }
    h2{
        font-size: 2rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #ff7676;
    }
    h3{
        font-size: 1.1rem;
        color: #333;
        padding: 0.5rem 0rem;

    }
    p{
        font-size:1rem;
        line-height: 200%;
        color: #333;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }



`;

export default GlobalStyle;
