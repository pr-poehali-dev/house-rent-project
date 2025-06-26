import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Home" size={28} className="text-primary" />
            <h1 className="text-xl font-bold text-gray-900">
              Подворье Хранители долины
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Особенности
            </a>
            <a
              href="#amenities"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Удобства
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Цены
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Контакты
            </a>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Забронировать
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Особенности
              </a>
              <a
                href="#amenities"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Удобства
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Цены
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Контакты
              </a>
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors w-fit">
                Забронировать
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
