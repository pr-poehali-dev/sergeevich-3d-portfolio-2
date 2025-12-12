import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{url: string; title: string; category: string} | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const portfolio = [
    {
      id: 1,
      title: 'Luxury Residential Complex',
      category: 'Exterior',
      description: 'Современный жилой комплекс премиум-класса с панорамным остеклением',
      details: '3ds Max, V-Ray, Photoshop',
      image: 'https://cdn.poehali.dev/projects/b8212f2e-bfd7-4fbd-be4d-2bd09e145690/files/e082c8b1-3d9d-45c1-b425-1e195cb3b439.jpg'
    },
    {
      id: 2,
      title: 'Modern Apartment Interior',
      category: 'Interior',
      description: 'Минималистичный интерьер с акцентом на натуральные материалы',
      details: 'Corona Renderer, 3ds Max',
      image: 'https://cdn.poehali.dev/projects/b8212f2e-bfd7-4fbd-be4d-2bd09e145690/files/834d2175-3e6d-42d1-8a51-5b27e06a3ac0.jpg'
    },
    {
      id: 3,
      title: 'Commercial Office Building',
      category: 'Exterior',
      description: 'Офисный центр класса А с современной архитектурой',
      details: 'V-Ray, SketchUp, Photoshop',
      image: 'https://cdn.poehali.dev/projects/b8212f2e-bfd7-4fbd-be4d-2bd09e145690/files/9814d9a3-99f1-41a9-b962-d18e650b98a1.jpg'
    }
  ];

  const services = [
    {
      icon: 'Building2',
      title: 'Архитектурная визуализация',
      description: 'Фотореалистичные 3D-рендеры экстерьеров зданий любой сложности'
    },
    {
      icon: 'Home',
      title: 'Визуализация интерьеров',
      description: 'Детальная проработка внутренних пространств с учетом освещения и материалов'
    },
    {
      icon: 'Palette',
      title: '3D-моделирование',
      description: 'Создание точных цифровых моделей для архитектурных проектов'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px] smoke-animation" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-80 h-80 bg-neon-magenta/20 rounded-full blur-[120px] smoke-animation" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-neon-purple/20 rounded-full blur-[120px] smoke-animation" style={{ animationDelay: '6s' }} />
        <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-neon-cyan/15 rounded-full blur-[100px] smoke-animation" style={{ animationDelay: '9s' }} />
        
        {[...Array(8)].map((_, i) => (
          <div
            key={`smoke-${i}`}
            className="smoke-particle absolute w-64 h-64 bg-white/5 rounded-full blur-[80px]"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}

        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-neon-cyan/40 to-transparent neon-line" style={{ animationDelay: '0s' }} />
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-neon-magenta/40 to-transparent neon-line" style={{ animationDelay: '1s' }} />
        <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-transparent via-neon-purple/40 to-transparent neon-line" style={{ animationDelay: '2s' }} />
        
        <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent neon-line" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-magenta/30 to-transparent neon-line" style={{ animationDelay: '1.5s' }} />
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">SERGEEVICH</div>
            <div className="hidden md:flex gap-8">
              {['home', 'portfolio', 'about', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wider transition-all duration-300 hover:text-neon-cyan ${
                    activeSection === section ? 'text-neon-cyan neon-glow' : 'text-gray-400'
                  }`}
                >
                  {section === 'home' ? 'Главная' : section === 'portfolio' ? 'Портфолио' : section === 'about' ? 'Обо мне' : section === 'services' ? 'Услуги' : 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
        <div className="text-center">
          <h1 className="text-8xl md:text-9xl font-black gradient-text mb-6 tracking-tight">
            SERGEEVICH
          </h1>
          <p className="text-xl md:text-2xl text-neon-cyan/80 mb-8 font-light tracking-wide">
            3D Artist · Architectural Visualization
          </p>
          <Button
            onClick={() => scrollToSection('portfolio')}
            className="bg-gradient-to-r from-neon-cyan to-neon-purple hover:shadow-2xl hover:shadow-neon-cyan/50 transition-all duration-300 text-lg px-8 py-6 neon-border border border-neon-cyan"
          >
            Смотреть портфолио
          </Button>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text">
            Портфолио
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item) => (
              <Card 
                key={item.id} 
                onClick={() => setSelectedImage({url: item.image, title: item.title, category: item.category})}
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-neon-cyan/30 hover:border-neon-magenta hover:shadow-2xl hover:shadow-neon-magenta/30 transition-all duration-500 cursor-pointer hover:scale-105"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neon-magenta/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-neon-magenta text-xs uppercase tracking-widest mb-2 block neon-glow">{item.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 text-sm mb-2 leading-relaxed">{item.description}</p>
                    <p className="text-neon-cyan text-xs uppercase tracking-wide">{item.details}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text">
            Обо мне
          </h2>
          <Card className="bg-card/50 backdrop-blur-sm border-neon-purple/30 p-12">
            <p className="text-xl leading-relaxed text-gray-300 mb-6">
              Меня зовут <span className="text-neon-cyan font-semibold">SERGEEVICH</span>, и я специализируюсь на создании 
              фотореалистичной архитектурной визуализации. Моя основная экспертиза — это 3D-рендеринг 
              экстерьеров зданий и интерьеров.
            </p>
            <p className="text-xl leading-relaxed text-gray-300 mb-6">
              Каждый проект для меня — это возможность превратить архитектурную концепцию в живое, 
              детализированное изображение, которое помогает клиентам визуализировать будущее пространство.
            </p>
            <p className="text-xl leading-relaxed text-gray-300">
              Работаю с передовыми технологиями 3D-моделирования и рендеринга для достижения 
              максимального фотореализма и атмосферности каждого проекта.
            </p>
          </Card>
        </div>
      </section>

      <section id="services" className="min-h-screen py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text">
            Услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-neon-cyan/30 hover:border-neon-magenta transition-all duration-500 p-8 hover:shadow-2xl hover:shadow-neon-magenta/20 group"
              >
                <div className="mb-6 text-neon-cyan group-hover:text-neon-magenta transition-colors duration-300">
                  <Icon name={service.icon} size={48} className="neon-glow" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text">
            Контакты
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-neon-cyan/10 via-card/50 to-neon-purple/10 backdrop-blur-sm border-neon-cyan/50 p-8 hover:border-neon-magenta transition-all duration-500 hover:shadow-2xl hover:shadow-neon-cyan/30">
              <h3 className="text-3xl font-bold mb-6 gradient-text">Свяжитесь со мной</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-neon-cyan/20 rounded-lg border border-neon-cyan/50 group-hover:bg-neon-cyan/30 transition-colors">
                    <Icon name="Mail" size={24} className="text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:sergeevich@example.com" className="text-xl text-white hover:text-neon-cyan transition-colors">
                      sergeevich@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-neon-magenta/20 rounded-lg border border-neon-magenta/50 group-hover:bg-neon-magenta/30 transition-colors">
                    <Icon name="Phone" size={24} className="text-neon-magenta" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Телефон</p>
                    <a href="tel:+79991234567" className="text-xl text-white hover:text-neon-magenta transition-colors">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-neon-purple/20 rounded-lg border border-neon-purple/50 group-hover:bg-neon-purple/30 transition-colors">
                    <Icon name="MapPin" size={24} className="text-neon-purple" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Локация</p>
                    <p className="text-xl text-white">Москва, Россия</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-neon-cyan/20">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Соцсети</p>
                <div className="flex gap-4">
                  <a href="https://instagram.com/sergeevich" target="_blank" rel="noopener noreferrer" className="p-4 bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 rounded-lg border border-neon-cyan/30 hover:border-neon-magenta hover:scale-110 hover:shadow-lg hover:shadow-neon-magenta/50 transition-all duration-300">
                    <Icon name="Instagram" size={28} className="text-neon-magenta" />
                  </a>
                  <a href="https://t.me/sergeevich" target="_blank" rel="noopener noreferrer" className="p-4 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-lg border border-neon-purple/30 hover:border-neon-cyan hover:scale-110 hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300">
                    <Icon name="Send" size={28} className="text-neon-cyan" />
                  </a>
                  <a href="https://linkedin.com/in/sergeevich" target="_blank" rel="noopener noreferrer" className="p-4 bg-gradient-to-br from-neon-magenta/20 to-neon-purple/20 rounded-lg border border-neon-magenta/30 hover:border-neon-purple hover:scale-110 hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300">
                    <Icon name="Linkedin" size={28} className="text-neon-purple" />
                  </a>
                  <a href="https://behance.net/sergeevich" target="_blank" rel="noopener noreferrer" className="p-4 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-lg border border-neon-cyan/30 hover:border-neon-purple hover:scale-110 hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300">
                    <Icon name="Palette" size={28} className="text-neon-cyan" />
                  </a>
                </div>
              </div>
            </Card>
            <Card className="bg-gradient-to-br from-neon-magenta/10 via-card/50 to-neon-cyan/10 backdrop-blur-sm border-neon-magenta/50 p-8 hover:border-neon-cyan transition-all duration-500 hover:shadow-2xl hover:shadow-neon-magenta/30">
              <h3 className="text-3xl font-bold mb-6 gradient-text">Обсудить проект</h3>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-neon-cyan uppercase tracking-wider">Ваше имя</label>
                  <Input
                    type="text"
                    placeholder="Иван Иванов"
                    className="bg-black/50 border-neon-cyan/40 focus:border-neon-cyan focus:ring-2 focus:ring-neon-cyan/50 text-white placeholder:text-gray-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-neon-magenta uppercase tracking-wider">Email</label>
                  <Input
                    type="email"
                    placeholder="ivan@example.com"
                    className="bg-black/50 border-neon-magenta/40 focus:border-neon-magenta focus:ring-2 focus:ring-neon-magenta/50 text-white placeholder:text-gray-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-neon-purple uppercase tracking-wider">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    className="bg-black/50 border-neon-purple/40 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/50 text-white placeholder:text-gray-500 transition-all resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple hover:shadow-2xl hover:shadow-neon-magenta/70 transition-all duration-300 text-lg py-6 font-bold hover:scale-105 neon-border border border-neon-magenta"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500 relative z-10">
        <p>&copy; 2024 SERGEEVICH. All rights reserved.</p>
      </footer>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 bg-neon-magenta/20 hover:bg-neon-magenta/40 border border-neon-magenta rounded-lg transition-all duration-300 hover:scale-110 neon-border group"
          >
            <Icon name="X" size={28} className="text-neon-magenta group-hover:rotate-90 transition-transform duration-300" />
          </button>
          <div className="max-w-7xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="mb-6 text-center">
              <span className="text-neon-magenta text-sm uppercase tracking-widest neon-glow">{selectedImage.category}</span>
              <h3 className="text-4xl font-bold gradient-text mt-2">{selectedImage.title}</h3>
            </div>
            <div className="relative rounded-lg overflow-hidden border-2 border-neon-cyan/50 shadow-2xl shadow-neon-cyan/30">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;