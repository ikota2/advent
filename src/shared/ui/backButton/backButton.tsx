import { useNavigate } from 'react-router';

import classes from './backButton.module.css';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={classes.buttonContainer}>
      <button
        type="button"
        className={`${classes.backButton} ${classes.pushCombined}`}
        onClick={handleBack}
      >
        ←
      </button>
    </div>
  );
};

export default BackButton;
