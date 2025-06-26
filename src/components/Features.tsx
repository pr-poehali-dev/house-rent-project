import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Users",
      title: "Вместимость до 8 гостей",
      description: "Удобные спальные места для большой компании",
    },
    {
      icon: "Sparkles",
      title: "Современный интерьер",
      description:
        "Минималистичный дизайн, панорамные окна, встроенная техника",
    },
    {
      icon: "Wifi",
      title: "Технологичность",
      description: "Кондиционер, климат-контроль, высокоскоростной интернет",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Основные преимущества
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Каждая деталь продумана для вашего максимального комфорта и
            незабываемого отдыха
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Icon
                  name={feature.icon as any}
                  size={32}
                  className="text-green-600"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
