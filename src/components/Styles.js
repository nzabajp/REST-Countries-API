import styled, { keyframes } from "styled-components"

const SectionContainer = styled.main`
    width: 90%;
    margin: 2em auto;
    max-width: 1280px;
`

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const Loading = styled.div`
    animation: ${rotate} 1s linear infinite;
    grid-column: 1/-1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    
    & > * {
        font-size: 100px;
        width: fit-content;
        aspect-ratio: 1/1;
    }
`

export { SectionContainer, Loading }