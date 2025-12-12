import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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
      image: 'https://cdn.poehali.dev/projects/b8212f2e-bfd7-4fbd-be4d-2bd09e145690/files/e082c8b1-3d9d-45c1-b425-1e195cb3b439.jpg'
    },
    {
      id: 2,
      title: 'Modern Apartment Interior',
      category: 'Interior',
      image: 'https://cdn.poehali.dev/projects/b8212f2e-bfd7-4fbd-be4d-2bd09e145690/files/834d2175-3e6d-42d1-8a51-5b27e06a3ac0.jpg'
    },
    {
      id: 3,
      title: 'Commercial Office Building',
      category: 'Exterior',
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
              <Card key={item.id} className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-neon-cyan/30 hover:border-neon-cyan transition-all duration-500 cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-neon-magenta text-sm uppercase tracking-wider mb-2">{item.category}</span>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
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
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text">
            Контакты
          </h2>
          <Card className="bg-card/50 backdrop-blur-sm border-neon-purple/30 p-12">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-neon-cyan">Ваше имя</label>
                <Input
                  type="text"
                  placeholder="Иван Иванов"
                  className="bg-black/50 border-neon-cyan/30 focus:border-neon-cyan text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-neon-cyan">Email</label>
                <Input
                  type="email"
                  placeholder="ivan@example.com"
                  className="bg-black/50 border-neon-cyan/30 focus:border-neon-cyan text-white placeholder:text-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-neon-cyan">Сообщение</label>
                <Textarea
                  placeholder="Расскажите о вашем проекте..."
                  rows={6}
                  className="bg-black/50 border-neon-cyan/30 focus:border-neon-cyan text-white placeholder:text-gray-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-neon-cyan to-neon-magenta hover:shadow-2xl hover:shadow-neon-cyan/50 transition-all duration-300 text-lg py-6"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить сообщение
              </Button>
            </form>
            <div className="mt-12 flex justify-center gap-6">
              <Button variant="outline" size="icon" className="border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10">
                <Icon name="Mail" size={24} />
              </Button>
              <Button variant="outline" size="icon" className="border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10">
                <Icon name="Instagram" size={24} />
              </Button>
              <Button variant="outline" size="icon" className="border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10">
                <Icon name="Linkedin" size={24} />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500 relative z-10">
        <p>&copy; 2024 SERGEEVICH. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
