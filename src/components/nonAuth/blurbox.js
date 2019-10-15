import styled from 'styled-components'

export const BlurBox = styled.div`
display: flex;
flex-direction: column;
top: 15%;
left: 30%;
width: 40%;
position: absolute;
z-index: 99;
background-color: hsla(213, 20%, 36%, 0.7);
padding-bottom: 2.5%;

h1 {
    margin-bottom: 0;
}

.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: white;
}

.MuiFormLabel-root{
    color: white;
}

.MuiInput-underline:before,
.MuiInput-underline:after,
.MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom: none;
}
`