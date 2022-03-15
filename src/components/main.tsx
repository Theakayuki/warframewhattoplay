import styled from 'styled-components';

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    #main-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;

        h1 {
            font-size: 2rem;
            font-weight: 300;
            color: var(--color-light-blue);
        }

        #main-display {
            width: 900px;
            height: 548px;
            background-color: var(--color-black);
            box-shadow: inset 0 0 0 8px var(--color-white);
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h2 {
                font-size: 2rem;
                font-weight: 400;
                color: var(--color-white);
            }
            button {
                background-color: var(--color-white);
                color: var(--color-black);
                border: none;
                border-radius: 10px;
                padding: 20px 40px;
                font-size: 1.2rem;
            }
        }
    }
`;

const Main = () => {
    return (
        <StyledMain>
            <div id='main-content'>
                <h1>What Warframe to play?</h1>
                <div id='main-display'>
                    <h2>Let me choose</h2>
                    <button>Start!</button>
                </div>
            </div>
        </StyledMain>
    );
};

export default Main;
