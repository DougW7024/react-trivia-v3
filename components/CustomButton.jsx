import PropTypes from "prop-types";

const CustomButton = ({ 
  onClick, 
  children, 
  className = "", 
  disabled = false,
  variant = "primary",
  size = "medium"
}) => {
  const baseStyles = "font-medium rounded-lg transition-all duration-200 focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-400",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
    disabled: "bg-gray-300 text-gray-500 cursor-not-allowed"
  };

  const sizes = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg"
  };

  const buttonClasses = [
    baseStyles,
    disabled ? variants.disabled : variants[variant],
    sizes[size],
    className
  ].join(" ");
    
  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "danger"]),
  size: PropTypes.oneOf(["small", "medium", "large"])
};

export default CustomButton;
