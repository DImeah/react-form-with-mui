import PropTypes from "prop-types";

const FormWrapper = ({ headingText, children, directionText }) => {
  return (
    <form
      className="shadow-md hover:shadow-2xl max-w-lg space-y-6 p-4 transition duration-300 ease-in-out"
      action=""
    >
      <h1 className="font-bold text-3xl">{headingText}</h1>
      {children}
      <p className="text-center">{directionText}</p>
    </form>
  );
};

FormWrapper.propTypes = {
  headingText: PropTypes.string,
  children: PropTypes.array,
  directionText: PropTypes.string,
};

export default FormWrapper;
