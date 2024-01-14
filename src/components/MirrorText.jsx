import PropTypes from 'prop-types'
import styled from 'styled-components'

const Text = styled.h1`
    text-align: center;
    margin-top: 0;
    margin-bottom: -2vmax;
`;

const MirroredText = styled.h1`
    margin-top: -4.5vmax;
    margin-bottom: 0;
    text-align: center;
    transform: scaleX(-1) rotate(180deg);
    opacity: 0.1;
    pointer-events: none;
    user-select: none;
`;

const MirrorText = ({ text }) => {

    return <div>
        <Text>{ text }</Text>
        <MirroredText>{ text }</MirroredText>
    </div>
}

MirrorText.propTypes = {
    text: PropTypes.string
}

export default MirrorText