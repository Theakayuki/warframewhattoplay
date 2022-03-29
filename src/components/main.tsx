import Picker from './Picker';
import styled from 'styled-components';

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
    box-sizing: content-box;
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
    }
`;

const Main = () => {
    return (
        <StyledMain>
            <div id='main-content'>
                <h1>What Warframe to play?</h1>
                <Picker />
            </div>
        </StyledMain>
    );
};

export default Main;
