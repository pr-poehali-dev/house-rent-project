import Icon from "@/components/ui/icon";

const Pricing = () => {
  const includedItems = [
    "Проживание в доме",
    "Пользование баней",
    "Доступ ко всем удобствам на территории",
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-green-50 to-emerald-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Стоимость и условия
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Прозрачная цена с включением всех основных удобств
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <div className="text-6xl md:text-7xl font-bold text-green-600 mb-4">
                30 000 ₽
              </div>
              <p className="text-xl text-gray-600">за сутки проживания</p>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                В цену включено:
              </h3>
              {includedItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-green-500 flex-shrink-0"
                  />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <button className="w-full bg-green-600 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105">
                Забронировать сейчас
              </button>
              <button className="w-full border-2 border-green-600 text-green-600 py-4 px-8 rounded-xl text-lg font-semibold hover:bg-green-600 hover:text-white transition-all">
                Задать вопрос
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
