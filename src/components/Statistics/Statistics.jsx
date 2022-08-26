import './index.css'
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => { 
    return <ul className='list'>

        <li className='item'>
            Good:
            <p className='item_text'>{good}</p>
        </li>
      

        <li className='item'>
            Neutral:
            <p className='item_text'> {neutral}</p>
        </li>

        <li className='item'>
            Bad:
            <p className='item_text'> {bad}</p>
        </li>

        <li className='item'>
            Total:
            <p className='item_text'> {total}</p>
        </li>
    
        <li className='item'>
            Positive feedback:
            <p className='item_text'>{positivePercentage}%</p>
        </li> 

    </ul>
};



Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}
export default Statistics;