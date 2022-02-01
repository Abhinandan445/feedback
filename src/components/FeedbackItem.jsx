import React,  {useContext} from "react";
import Card from "./shared/Card";
import propTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackConext from "../context/FeedbackContext";


function FeedbackItem({ item }) {

  const { deleteFeedback, editFeedback } = useContext(FeedbackConext);


  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color = 'purple'/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: propTypes.object.isRequired,
};

export default FeedbackItem;
