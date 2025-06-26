import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Готовы ответить на все ваши вопросы и помочь с бронированием
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center">
                <Icon name="Phone" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Телефон</h3>
                <p className="text-gray-300">+7 (999) 123-45-67</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center">
                <Icon name="Mail" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-gray-300">info@podvorie-dolina.ru</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Адрес</h3>
                <p className="text-gray-300">
                  Московская область, Дмитровский район
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Время работы</h3>
                <p className="text-gray-300">Ежедневно с 9:00 до 21:00</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-primary focus:outline-none transition-colors"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Ваш вопрос или пожелания"
                ></textarea>
              </div>
              <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
