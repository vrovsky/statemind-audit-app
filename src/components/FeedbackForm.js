import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { notification } from "antd";
import { ThumbsUp } from "lucide-react";

const FeedbackForm = () => {
  const { client, auditName } = useParams();
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    notification.open({
      message: "Feedback Submitted",
      description: "Thank you for your feedback!",
      icon: <ThumbsUp />,
      duration: 100,
    });
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
      </div>
    </div>
  );
};

export default FeedbackForm;
