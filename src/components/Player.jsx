import { useState } from 'react';

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((prevState) => {
      return !prevState;
    });
  };
  return (
    <li>
      <span className='player'>
        <span className='player-name'>
          {isEditing ? <input type='text' required value={name} /> : name}
        </span>
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;
