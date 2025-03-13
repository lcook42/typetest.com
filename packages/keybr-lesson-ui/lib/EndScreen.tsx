import type { ReactNode } from 'react';

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

export default EndScreen;
