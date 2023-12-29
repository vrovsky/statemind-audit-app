import React, { useState } from "react";
import { useParams } from "react-router-dom";

const FeedbackForm = () => {
  const { client, auditName } = useParams();
  const [feedback, setFeedback] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl pb-3">
        Feedback Form for {client} - Project: {auditName}
      </h1>
      <div className="flex flex-col gap-4">
        <textarea
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Type your feedback here..."
          className="p-4 border border-gray-300 rounded-md h-60"
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md w-1/5 self-center transition-all hover:bg-blue-700 hover:shadow-md"
          onClick={handleSubmit}
        >
          Submit Feedback
        </button>
        {isSubmitted && <p>Feedback submitted successfully!</p>}
      </div>
    </div>
  );
};

export default FeedbackForm;
