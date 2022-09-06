import styled from 'styled-components'

//Styles
const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 2em;
    box-shadow: var(--box-shadow);
    background-color: var(--element);

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
const Header = ({darkMode, setDarkMode}) => {

    return (
        <HeaderContainer darkMode={darkMode}>
            <h3>Where in the world?</h3>
            <div onClick={setDarkMode}>
                {darkMode ?
                    <i className="ri-moon-fill"></i> :
                    <i className="ri-moon-line"></i>
                }
                <p>Dark Mode</p>
            </div>
        </HeaderContainer>
    )
}

export default Header