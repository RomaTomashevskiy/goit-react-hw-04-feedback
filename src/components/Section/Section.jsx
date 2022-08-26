import './index.css'

import PropTypes from 'prop-types';

const Section = ({ children, title }) => {
    return <section className='section'>
        <h1 className='title'>{title}</h1>
        {children}
    </section>
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Section;