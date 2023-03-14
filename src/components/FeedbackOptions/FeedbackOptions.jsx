import React from "react";
import PropTypes from 'prop-types';
import { FeedbackBtn, FeedbackList } from "./FeedbackOptions.styled";

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
       <FeedbackList>
            {options.map(option => (
                <li key={option}>
                    <FeedbackBtn
                        type="button" 
                        className="FeedbackOption__btn"
                        onClick={() => onLeaveFeedback(option)}
                    >{option.charAt(0).toUpperCase() + option.substr(1)}</FeedbackBtn>
                </li>
            ))}
       </FeedbackList>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;