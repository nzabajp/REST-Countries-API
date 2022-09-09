import styled from 'styled-components'

//Styles
const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 2em;
    box-shadow: var(--box-shadow);
    background-color: var(--element);

    & p {
        font-size: .9rem;

        @media (min-width: 600px) {
            font-size: unset;
        }
    }

    & > div {
        display: flex;
        align-items: center;
        gap: .5em;
        cursor: pointer;
        font-weight: 600;
    }
`

const Heading = styled.h1`
    font-size: 1.1rem;

    @media (min-width: 600px) {
        font-size: 1.5rem;
    }
`

//Component
const Header = ({darkMode, setDarkMode}) => {

    return (
        <HeaderContainer darkMode={darkMode}>
            <Heading>Where in the world?</Heading>
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