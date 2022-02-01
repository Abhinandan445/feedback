import { v4 as uuid} from 'uuid';
import FeedbackData from '../data/FeedbackData';

const { createContext, useState } = require("react");


const FeedbackConext = createContext();

export const FeedbackProvider = ({ children }) => {

  const [ feedback, setFeedback ] =  useState(FeedbackData);

  const [ feedbackEdit, setFeedbackEdit ] =  useState({
    item: {},
    edit: false,
  });

  //Delete any Feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete!?")) {
      // console.log('app', id)
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //To Add a Feedback  
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid();

    setFeedback([ newFeedback, ...feedback])
    console.log(feedback)
}

  //Updated feedback 
  const updateFeedback = (id, updItem) => {
    console.log(id, updItem)
    setFeedback(feedback.map((item) => item.id === id ? {
      ...item, ...updItem
    }: item))
  }

  //Set item to be updated
  const editFeedback = (item) => {

    setFeedbackEdit({
      item,
      edit: true,
    })
}

  return <FeedbackConext.Provider value={{
    feedback,
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
  }}>{children}</FeedbackConext.Provider>;
};


export default FeedbackConext;