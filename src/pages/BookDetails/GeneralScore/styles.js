import styled from 'styled-components';

export const Container = styled.div`
    .score {
        color: #fff;
        margin: auto;
        width: 220px;
        height: 220px;
        display: flex;
        font-size: 22px;
        margin-top: 30px;
        font-weight: bold;
        text-align: center;
        border-radius: 150px;
        flex-direction: column;
        justify-content: center;
        background-color: ${ props => props.scoreColor };

        .summary-core-value {
            font-size: 98px;
        }
    }

    .score-comment {
        color: #95a5a6;
        font-size: 18px;
        margin-top: 7px;
        font-weight: bold;
        font-style: italic;
        text-align: center;
    }
`;