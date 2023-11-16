import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const ActionButton = ({ text }) => {
  return (
    <div>
      <Button fullWidth variant="contained">
        {text}
      </Button>
    </div>
  );
};

ActionButton.propTypes = { text: PropTypes.string };

export default ActionButton;
