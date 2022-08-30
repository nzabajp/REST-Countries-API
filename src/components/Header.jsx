import { useState } from "react"
import styled from 'styled-components'

//Styles
const HeaderContainer = styled.header`
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;

    & > p {
        font-weight: 800;
    }

    & > div {
        display: flex;
        align-items: center;
        gap: .5em;
        cursor: pointer;
        font-weight: 600;
    }
`

//Component
function Header() {
    const [isDark, setIsDark] = useState(false)

    const toggleDark = () => setIsDark(prev => !prev)

    return (
        <HeaderContainer>
            <p>Where in the world?</p>
            <div onClick={toggleDark}>
                {isDark ?
                    <i className="ri-moon-fill"></i> :
                    <i className="ri-moon-line"></i>
                }
                <p>Dark Mode</p>
            </div>
        </HeaderContainer>
    )
}

export default Header