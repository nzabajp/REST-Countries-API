import { useEffect, useState } from "react"
import styled from "styled-components"

const Scroll = styled.button`
    opacity: ${({scrollPos}) => scrollPos < 100 && 0};
    z-index: ${({scrollPos}) => scrollPos < 100 && -1};
    border-radius: 50%;
    aspect-ratio: 1/1;
    padding: 1.5em;
    cursor: pointer;
    position: fixed;
    bottom: 5%;
    right: 10%;
    transition: opacity .5s;
    display: flex;
    border: none;
    background-color: lightgrey;
    font-weight: 800;
`

const ScrollToTop = () => {
    const [scrollPos, setScrollPos] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            setScrollPos(e.target.documentElement.scrollTop)
        })

        return () => {
            window.removeEventListener("scroll", (e) => {
                setScrollPos(e.target.documentElement.scrollTop)
            })
        }
    }, [])

    return (
        <Scroll 
            scrollPos={scrollPos}
            onClick={() => window.scrollTo({top: 0})}
            aria-label="Scroll to top"
        >
            <i className="ri-arrow-up-s-line"></i>
        </Scroll>
    )
}

export default ScrollToTop