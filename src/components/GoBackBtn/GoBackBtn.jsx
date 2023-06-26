import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BackBtn } from './GoBackBtn.styled';

const GoBackBtn = ({ location }) => {
  const navigate = useNavigate();
  console.log(location);
  return (
    <BackBtn
      type="button"
      onClick={() => navigate(location.state?.from ?? '/')}
    >
      &larr; Go back
    </BackBtn>
  );
};

GoBackBtn.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default GoBackBtn;
