import {createGlobalStyle} from 'styled-components'



export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --body-background: #0e0e0e;
    --color-logo: #ff5b50;
    --card-color: #252525;
    --text-color: #fff;
    --subtitle-color: #5a5757;
    --black-text: #000;
    --color-input: #0D0D0D;
}

@media (max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
}

@media (max-width: 720px) {
    html {
        font-size: 87.5%;  
    }
}

body {
    color: var(--text-color);
}

body, input, textarea {
    font: 400 1rem "Montserrat", sans-serif;
}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}
`
