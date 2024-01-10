import { useContext } from 'react';
import styled from 'styled-components';
import CursorContext from '../utils/CursorContext';
import MirrorText from '../components/MirrorText';
import useData from '../data/useData';

const HomeContentDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TitleOverText = styled.h2`
    font-family: 'mashanzheng';
    text-align: center;
    margin-bottom: 3.5vh;
`

const TitleSubText = styled.h4`
    text-align: center;
    margin-top: 3.5vh;
`;

const Home = () => {

    const toggleCursorMode = useContext(CursorContext)
    const { home: homeData } = useData()

    return <>
        <HomeContentDiv>
            <TitleOverText lang='ch'>{homeData.titleOverText}</TitleOverText>
            <MirrorText text={homeData.title}></MirrorText>
            <TitleSubText>{homeData.titleSubText.textOne}<br/>{homeData.titleSubText.textTwo}</TitleSubText>
        </HomeContentDiv>
    </>
}

export default Home