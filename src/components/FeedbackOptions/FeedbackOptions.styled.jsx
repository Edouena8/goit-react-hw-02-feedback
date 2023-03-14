import styled from '@emotion/styled';

export const FeedbackList = styled.ul`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const FeedbackBtn = styled.button`
    padding: 5px 10px;
    background-color: hotpink;
    font-size: 20px;
    border-radius: 10px;
    color: black;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        color: white;

        transform: scale(1.1) ;
        -webkit-transform: scale(1.1) ;
        -moz-transform: scale(1.1) ;
        transition-duration: 500ms
    }
`;