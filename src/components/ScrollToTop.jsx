import { useEffect, useState } from "react"
import styled from "styled-components"

const Scroll = styled.button`
    display: ${({scrollPos}) => scrollPos < 100 && "none"};
    border: 1px solid red;
    border-radius: 50%;
    aspect-ratio: 1/1;
    padding: 1em;
    cursor: pointer;
    position: fixed;
    bottom: 5%;
    right: 10%;
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
        >
            Top
        </Scroll>
    )
}

export default ScrollToTop