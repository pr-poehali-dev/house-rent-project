import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Подворье
            <br />
            <span className="text-green-400">Хранители долины</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Два уникальных дома для незабываемого отдыха
            <br />
            Выберите свой идеальный вариант проживания
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105">
              Забронировать сейчас
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Виртуальный тур
            </button>
          </div>

          {/* Секция с двумя домами */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 mb-16">
            {/* Хай-тек дом */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Icon name="Zap" size={48} className="text-green-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Дом в стиле хай-тек</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Современный комфорт для вашей компании. Просторный дом 100 кв.м
                для отдыха до 8 гостей с панорамными окнами и умными
                технологиями.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={16} className="text-green-400" />
                  <span>До 8 гостей</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Home" size={16} className="text-green-400" />
                  <span>100 кв.м</span>
                </div>
              </div>
            </div>

            {/* A-frame дом */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Icon name="Triangle" size={48} className="text-green-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Дом в стиле A-frame</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Уютный дом с треугольной крышей площадью 90 кв.м. Оригинальный
                дизайн, панорамные окна и продуманная планировка для 6 гостей.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={16} className="text-green-400" />
                  <span>До 6 гостей</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Home" size={16} className="text-green-400" />
                  <span>90 кв.м</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Icon
                name="Waves"
                size={40}
                className="text-green-400 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Баня + бассейн</h3>
              <p className="text-gray-300">
                Современная баня 70 кв.м с бассейном
              </p>
            </div>
            <div className="text-center">
              <Icon
                name="Trees"
                size={40}
                className="text-green-400 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Территория</h3>
              <p className="text-gray-300">
                Беседка, мангал, ландшафтный дизайн
              </p>
            </div>
            <div className="text-center">
              <Icon
                name="Banknote"
                size={40}
                className="text-green-400 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">30 000 ₽</h3>
              <p className="text-gray-300">За сутки проживания любого дома</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
