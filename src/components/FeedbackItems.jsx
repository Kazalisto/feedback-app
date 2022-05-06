import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import Card from "./shared/Card"
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItems({item}) {  
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className="close">
          <FaTimes onClick={()=> deleteFeedback(item.id)}
          color='purple'/>
        </button>
        <button className="edit">
          <FaEdit onClick={()=> editFeedback(item)} color='purple'/>
        </button>
        <div className="text display">{item.text}</div>
        
    </Card>
  )
}

FeedbackItems.propTypes = {
  item: PropTypes.object.isRequired
}
export default FeedbackItems