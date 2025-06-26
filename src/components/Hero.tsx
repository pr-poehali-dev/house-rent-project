import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Дом в стиле <span className="text-primary">хай-тек</span>
            <br />
            для незабываемого отдыха
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Современный комфорт для вашей компании.
            <br />
            Просторный дом 100 кв.м для отдыха до 8 гостей.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105">
              Забронировать сейчас
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Виртуальный тур
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Icon
                name="Users"
                size={40}
                className="text-primary mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">до 8 гостей</h3>
              <p className="text-gray-300">Комфортные спальные места</p>
            </div>
            <div className="text-center">
              <Icon
                name="Home"
                size={40}
                className="text-primary mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">100 кв.м</h3>
              <p className="text-gray-300">Просторный дом</p>
            </div>
            <div className="text-center">
              <Icon
                name="Banknote"
                size={40}
                className="text-primary mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">30 000 ₽</h3>
              <p className="text-gray-300">За сутки проживания</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
