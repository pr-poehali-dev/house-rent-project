import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Home" size={24} className="text-green-500" />
              <h3 className="text-lg font-bold">Подворье Хранители долины</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Современный хай-тек дом для незабываемого отдыха в окружении
              природы. Комфорт, технологии и уют в одном месте.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <div className="space-y-2">
              <a
                href="#features"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Особенности
              </a>
              <a
                href="#amenities"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Удобства
              </a>
              <a
                href="#pricing"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Цены
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">+7 (999) 123-45-67</p>
              <p className="text-gray-400">info@podvorie-dolina.ru</p>
              <p className="text-gray-400">Московская область</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Подворье Хранители долины. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
