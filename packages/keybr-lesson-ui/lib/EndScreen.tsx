import type { ReactNode } from 'react';
import PropTypes from 'prop-types';

type EndScreenProps = {
  typingSpeed: number;
  accuracy: number;
  onStartOver: () => void;
};

const EndScreen: React.FC<EndScreenProps> = ({ typingSpeed, accuracy, onStartOver }) => {
  return (
    <div className="end-screen">
      <h2>Typing Test Completed</h2>
      <div className="statistics">
        <p>Typing Speed: {typingSpeed} WPM</p>
        <p>Accuracy: {accuracy}%</p>
      </div>
      <button onClick={onStartOver}>Start Over</button>
    </div>
  );
};

EndScreen.propTypes = {
  typingSpeed: PropTypes.number.isRequired,
  accuracy: PropTypes.number.isRequired,
  onStartOver: PropTypes.func.isRequired,
};

export default EndScreen;
