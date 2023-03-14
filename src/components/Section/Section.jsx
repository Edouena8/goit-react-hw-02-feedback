import PropTypes from 'prop-types';
import {SectionWrap, SectionTitle} from './Section.styled';

const Section = ({title, children}) => (
    <SectionWrap>
        <SectionTitle>{title}</SectionTitle>
        {children}
    </SectionWrap>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default Section; 