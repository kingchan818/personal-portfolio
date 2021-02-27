import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    background: '#fff',
    color: '#000',
    borderColor: '#000',
    boxShawdo: '0px 5px 30px rgba(0, 0, 0, 0.288)',
    contactCard: '#000',
};
export const darkTheme = {
    background: '#06090F',
    color: '#fff',
    borderColor: '#fff',
    boxShawdo: '0px 5px 30px rgba(255, 255, 255, 0.212)',
    contactCard: '#fff',
};

export const darkBlueTheme = {
    background: '#15202B',
    color: '#fff',
    borderColor: '#fff',
    boxShawdo: '0px 5px 30px rgba(0, 0, 0, 0.836)',
    contactCard: '#000',
};

export const PinkTheme = {
    background: '#46344e',
    color: '#fff',
    borderColor: '#fff',
    boxShawdo: '0px 5px 30px rgba(0, 0, 0, 0.411)',
    contactCard: '#000',
};

const GlobalStyle = createGlobalStyle`

    *{
        padding:0;
        margin: 0;
        box-sizing:border-box;
        font-size: 3rem;
        font-family: 'Akaya Telivigala', cursive;
        background: ${(props) => props.theme.background};
        color:${(props) => props.theme.color};
        transition: background 0.5s ease-in;
    }


    html{
        font-size: 62.5%
    }



    
`;

export default GlobalStyle;
