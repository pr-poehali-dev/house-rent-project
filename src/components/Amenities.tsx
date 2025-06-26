import Icon from "@/components/ui/icon";

const Amenities = () => {
  const amenities = [
    {
      icon: "Waves",
      title: "Современная баня 70 кв.м",
      description:
        'Система вентиляции "двойное дыхание", просторная зона отдыха',
    },
    {
      icon: "Droplets",
      title: "Бассейн",
      description: "Кристально чистая вода для освежающего плавания",
    },
    {
      icon: "TreePine",
      title: "Большая беседка",
      description:
        "Открытое пространство для времяпровождения на свежем воздухе",
    },
    {
      icon: "ChefHat",
      title: "Мангальная зона",
      description: "Все необходимое для приготовления блюд на открытом огне",
    },
    {
      icon: "Flower",
      title: "Ландшафтный дизайн",
      description: "Продуманное озеленение и благоустройство территории",
    },
    {
      icon: "Car",
      title: "Парковка",
      description: "Удобное место для размещения автомобилей",
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Территория комплекса
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Целый ряд удобств для вашего комфортного отдыха в окружении природы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                  <Icon
                    name={amenity.icon as any}
                    size={24}
                    className="text-green-600"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
