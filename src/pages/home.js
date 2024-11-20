import React, { useState } from 'react';
import GoBoard from '../components/GoBoard.jsx';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import './home.css';

const Home = () => {
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState('');
  const [isAIThinking, setAIIsThinking] = useState(false);
  const [capturedBlack, setCapturedBlack] = useState(0);
  const [capturedWhite, setCapturedWhite] = useState(0);
  const [showInstructions, setShowInstructions] = useState(true);

  const handleGameEnd = () => {
    setGameOver(true);
    const blackCount = capturedBlack;
    const whiteCount = capturedWhite;
    setWinner(blackCount > whiteCount ? 'Black' : 'White');
  };

  const updateCapturedStones = (color, count) => {
    if (color === 'black') {
      setCapturedBlack(prev => prev + count);
    } else if (color === 'white') {
      setCapturedWhite(prev => prev + count);
    }
  };

  const resetGame = () => {
    setGameOver(false);
    setWinner('');
    setCapturedBlack(0);
    setCapturedWhite(0);
    window.location.reload(); // Reloads to reset game state
  };

  return (
    <div className="home-container">
      {/* Info Section */}
      {showInstructions && (
        <div className="info-section">
          <h1 className="title">🚀 Alpha Go Lite V0.0.1</h1>
          <div className="instructions">
            <p><strong>How to play</strong></p>
            <ul>
              <li>Place black or white stones on the board's grid intersections to surround more territory than your opponent.</li>
              <li>Capture enemy stones by completely surrounding them.</li>
              <li>The game ends when both players pass consecutively, signaling no further moves can increase territory.</li>
              <li>The player with the most territory wins.</li>
            </ul>
          </div>
        </div>
      )}

      {/* Toggle Instructions Button */}
      <button
        className="toggle-instructions"
        style={{
          // modify based on whether instructions are shown
          left: showInstructions ? '280px' : '20px',

        }}
        onClick={() => setShowInstructions(!showInstructions)}
      >
        {showInstructions ? <CloseOutlinedIcon /> : <InfoOutlinedIcon />}
      </button>

      {/* Game Section */}
      <div className="game-section"
      style={{
        marginLeft: showInstructions ? '300px' : '0px',
      }}
      >
        <h2 className="subtitle">🎮 Play Go</h2>
        <div className="player-turn">
          <p>{isAIThinking ? 'AI is thinking...' : 'Your turn!'}</p>
        </div>
        <div className="captured-stones">
          <p>Captured Black Stones: {capturedBlack}</p>
          <p>Captured White Stones: {capturedWhite}</p>
        </div>
        <GoBoard
          onGameEnd={handleGameEnd}
          setAIIsThinking={setAIIsThinking}
          updateCapturedStones={updateCapturedStones}
        />
        <div className="captured-stones">
          <p>Captured Black Stones: {capturedBlack}</p>
          <p>Captured White Stones: {capturedWhite}</p>
        </div>
      </div>

      {/* Game Over Popup */}
      {gameOver && (
        <div className="game-over-popup">
          <div className="popup-content">
            <h3>Game Over</h3>
            <p>Winner: {winner}</p>
            <button onClick={resetGame}>Play Again</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
