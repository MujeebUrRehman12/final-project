import Image from "next/image";

const FeatureHighlights = () => {
  const features = [
    {
      id: 1,
      icon: "/image/i1.svg", 
      title: "High Quality",
      description: "Crafted from top materials",
    },
    {
      id: 2,
      icon: "/image/i2.svg", 
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      id: 3,
      icon: "/image/i3.svg", 
      title: "Free Shipping",
      description: "Orders over $150",
    },
    {
      id: 4,
      icon: "/image/i4.svg", 
      title: "24/7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <div className="bg-[#FAF3EA] py-8 px-4 mb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center space-y-4">
            {/* Icon */}
            <div className="w-12 h-12">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={48}
                height={48}
                className="mx-auto"
              />
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
            {/* Description */}
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureHighlights;