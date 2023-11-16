import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

const InputField = ({ label }) => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        color="primary"
        label={label}
        variant="outlined"
        fullWidth
      />
    </div>
  );
};

InputField.propTypes = { label: PropTypes.string };

export default InputField;
