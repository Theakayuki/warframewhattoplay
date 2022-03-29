import { useEffect, useState } from 'react';

import styled from 'styled-components';

const StyledPicker = styled.div`
    width: 900px;
    /* max-height: 548px; */
    background-color: var(--color-black);
    box-shadow: inset 0 0 0 8px var(--color-white);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;

    h2 {
        font-size: 2rem;
        font-weight: 400;
        color: var(--color-white);
        margin: 0;
    }
    h3 {
        font-size: 1.5rem;
        font-weight: 400;
        color: var(--color-white);
        margin: 0;
        margin-top: 1rem;
    }
    img {
        width: 250px;
        height: 250px;
        margin: 1rem 0;
    }
    button {
        margin: 1rem 0;
        background-color: var(--color-white);
        color: var(--color-black);
        border: none;
        border-radius: 10px;
        padding: 20px 40px;
        font-size: 1.2rem;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
            background-color: var(--color-background);
            color: var(--color-white);
        }
    }
    p {
        color: var(--color-white);
        margin: 0;
        padding: 0;
    }
    .warframe_card {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        box-sizing: border-box;

        .item_container {
            width: 33%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 1rem;
            padding: 2rem;
        }
        .center {
            border-right: 1px solid var(--color-white);
            border-left: 1px solid var(--color-white);
            padding: 0;
        }
        .description {
            margin-top: 1rem;
            text-align: center;
        }
    }
    @media (max-width: 900px) {
        width: 375px;
        box-sizing: content-box;
        padding: 0;
        h2 {
            font-size: 1.5rem;
            padding-top: 1rem;
        }
        button {
            margin-bottom: 1rem;
        }

        .warframe_card {
            margin: 10px 0;
            flex-direction: column;
            box-sizing: content-box;
            .item_container {
                min-width: 80%;
                margin: 0;
                padding: 0;

                &:last-child {
                    margin-bottom: 1rem;
                }
            }
            .center {
                order: -1;
            }
        }
    }
`;

const Picker = () => {
    //setup fetch query for api endpoint https://api.warframestat.us/warframes
    const [items, setItems] = useState([] as any[]);
    const [randomItem, setRandomItem] = useState(0);
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        const data = await fetch('https://api.warframestat.us/warframes/');
        const itemData = await data.json();
        // filter the data to only include the items we want
        const filteredData = itemData
            .filter((item: any) => {
                return item.category === 'Warframes' && item.productCategory === 'Suits';
            })
            .filter((item: any) => {
                return item.name.includes('Prime') === false;
            });
        setItems(filteredData);
        console.log(itemData[0].category);
    };

    const [pressed, setPressed] = useState(false);
    const handleClick = () => {
        if (pressed === false) {
            setPressed(true);
            setRandomItem(Math.floor(Math.random() * items.length));
        } else {
            setRandomItem(Math.floor(Math.random() * items.length));
        }
    };
    return (
        <StyledPicker>
            {!pressed ? (
                <>
                    <h2>Let me choose</h2>
                    <button onClick={handleClick}>Start!</button>
                </>
            ) : (
                <>
                    <h2>Your Warframe Today is </h2>
                    <div className='warframe_card'>
                        <div className='item_container'>
                            <p className='description'>
                                <b>Description:</b> {items[randomItem].description}
                            </p>
                        </div>
                        <div className='item_container center'>
                            <h3>{items[randomItem].name}</h3>
                            <img
                                src={
                                    'https://cdn.warframestat.us/img/' + items[randomItem].imageName
                                }
                                alt={items[randomItem].name}
                            />
                            <button onClick={handleClick}>Again!</button>
                        </div>
                        <div className='item_container'>
                            <h3>Stats</h3>
                            <p>Armor: {items[randomItem].armor}</p>
                            <p>Health: {items[randomItem].health}</p>
                            <p>Shield: {items[randomItem].shield}</p>
                            <p>Energy: {items[randomItem].power}</p>
                        </div>
                    </div>
                </>
            )}
        </StyledPicker>
    );
};

export default Picker;
