import React from 'react';
import './ProgressBar.css';

interface Props {
  isComplete: boolean;
}

export const ProgressBar = (props: Props) => {
  const { isComplete } = props;
  return (
    <div>
      <div className="progressBar">{!isComplete && <span>Progress...</span>}</div>
    </div>
  );
};
