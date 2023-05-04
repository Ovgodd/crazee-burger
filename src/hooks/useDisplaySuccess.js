import { useState } from "react";

export const useSuccessMessage = (timeDelay = 2000) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const displaySuccess = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, timeDelay);
  };

  return { isSubmitted, displaySuccess };
};
