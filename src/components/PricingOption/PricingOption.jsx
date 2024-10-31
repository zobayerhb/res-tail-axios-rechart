import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PricingOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className="bg-green-400 rounded-md p-5 flex flex-col">
      <h1 className="font-extrabold text-3xl text-center">{price}</h1>
      <h4 className="font-medium text-xl mt-4 text-center">{name}</h4>
      <div className="flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="w-full bg-green-300 font-bold hover:bg-green-800 hover:text-white duration-100 py-3 rounded-md">
        Buy Now
      </button>
    </div>
  );
};

PricingOption.propTypes = {
  option: PropTypes.object.isRequired,
};

export default PricingOption;
