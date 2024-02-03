import { useState } from 'react';

const Player = ({ symbol, initialName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prevState) => {
      return !prevState;
    });
  };

  const handlePlayerChange = (event) => {
    console.log(event);
    setPlayerName(event.target.value);
  };

  return (
    <li>
      <span className='player'>
        <span className='player-name'>
          {isEditing ? (
            <input
              type='text'
              required
              value={playerName}
              onChange={handlePlayerChange}
            />
          ) : (
            playerName
          )}
        </span>
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;
