import PricingOption from "../PricingOption/PricingOption";

const PricingOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: "$20/month",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "One free guest pass per month",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: "$35/month",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free guest pass every week",
        "Access to group classes",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: "$50/month",
      features: [
        "Access to all equipment",
        "Locker room access",
        "Unlimited guest passes",
        "Access to group classes",
        "Personal trainer session every month",
        "Free smoothie after workout",
      ],
    },
    {
      id: 4,
      name: "Day Pass",
      price: "$10/day",
      features: ["Access to gym equipment", "Locker room access"],
    },
    {
      id: 5,
      name: "Family Membership",
      price: "$80/month",
      features: [
        "Access for up to 4 family members",
        "All gym equipment",
        "Locker room access",
        "Free guest pass every week",
        "Family group classes",
        "Monthly personal trainer session",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-2xl">Best price in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PricingOption key={option.id} option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
