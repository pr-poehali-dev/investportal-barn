import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Промышленный технопарк "Барнаульский"',
      area: '50 га',
      investment: '2.5 млрд ₽',
      status: 'Активный',
      category: 'Промышленность'
    },
    {
      id: 2,
      title: 'Логистический комплекс на трассе М-52',
      area: '25 га',
      investment: '1.8 млрд ₽',
      status: 'В разработке',
      category: 'Логистика'
    },
    {
      id: 3,
      title: 'Агропромышленный кластер',
      area: '75 га',
      investment: '3.2 млрд ₽',
      status: 'Активный',
      category: 'Агропром'
    }
  ];

  const sites = [
    {
      id: 1,
      name: 'Площадка в Индустриальном районе',
      area: '12 га',
      price: '450 ₽/м²',
      infrastructure: 'Полная',
      available: true
    },
    {
      id: 2,
      name: 'Участок на ул. Попова',
      area: '5 га',
      price: '380 ₽/м²',
      infrastructure: 'Частичная',
      available: true
    },
    {
      id: 3,
      name: 'Территория в районе ЖБИ-3',
      area: '30 га',
      price: '320 ₽/м²',
      infrastructure: 'Полная',
      available: true
    }
  ];

  const auctions = [
    {
      id: 1,
      date: '25 ноября 2025',
      object: 'Земельный участок 8 га, пр-т Калинина',
      startPrice: '24 млн ₽',
      type: 'Открытый аукцион'
    },
    {
      id: 2,
      date: '10 декабря 2025',
      object: 'Помещение 2500 м², ул. Попова',
      startPrice: '15 млн ₽',
      type: 'Электронный аукцион'
    }
  ];

  const support = [
    {
      title: 'Налоговые льготы',
      description: 'Снижение ставки налога на имущество до 0% на 5 лет',
      icon: 'PiggyBank'
    },
    {
      title: 'Субсидирование процентной ставки',
      description: 'Возмещение до 50% затрат на уплату процентов по кредитам',
      icon: 'TrendingDown'
    },
    {
      title: 'Земельные преференции',
      description: 'Предоставление участков без проведения торгов',
      icon: 'MapPin'
    },
    {
      title: 'Инфраструктурная поддержка',
      description: 'Подключение к коммуникациям за счет города',
      icon: 'Building2'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Building2" className="text-primary" size={32} />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Инвестпортал Барнаула</h1>
                <p className="text-sm text-gray-600">Город возможностей для бизнеса</p>
              </div>
            </div>
            <Button className="hover:scale-105 transition-transform">
              <Icon name="FileText" className="mr-2" size={18} />
              Подать заявку
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:60px_60px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 text-base px-4 py-2">
              Официальный инвестиционный портал
            </Badge>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Инвестируйте в будущее Барнаула
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Полное сопровождение инвестиционных проектов на всех этапах. Удобный доступ к площадкам, документам и мерам поддержки.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="hover:scale-105 transition-transform shadow-lg">
                <Icon name="Map" className="mr-2" size={20} />
                Интерактивная карта
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:scale-105 transition-transform">
                <Icon name="Download" className="mr-2" size={20} />
                Инвестпрофиль города
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: 'Briefcase', value: '150+', label: 'Активных проектов' },
              { icon: 'MapPin', value: '500+', label: 'Свободных площадок' },
              { icon: 'TrendingUp', value: '15 млрд ₽', label: 'Объем инвестиций 2024' },
              { icon: 'Users', value: '300+', label: 'Действующих инвесторов' }
            ].map((stat, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in border-2 hover:border-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <Icon name={stat.icon as any} className="mx-auto mb-4 text-primary" size={40} />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Инвестиционные проекты</h2>
            <p className="text-gray-600 text-lg">Готовые предложения для реализации</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={project.status === 'Активный' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Icon name="Ruler" size={18} />
                      <span>Площадь: {project.area}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Icon name="DollarSign" size={18} />
                      <span>Инвестиции: {project.investment}</span>
                    </div>
                    <Button className="w-full mt-4 hover:scale-105 transition-transform">
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Свободные площадки</h2>
            <p className="text-gray-600 text-lg">Подберите оптимальную территорию для вашего бизнеса</p>
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="all" className="hover:scale-105 transition-transform">Все</TabsTrigger>
              <TabsTrigger value="ready" className="hover:scale-105 transition-transform">Готовые</TabsTrigger>
              <TabsTrigger value="develop" className="hover:scale-105 transition-transform">Под застройку</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              {sites.map((site, index) => (
                <Card 
                  key={site.id} 
                  className="hover:shadow-lg transition-all duration-300 hover:border-primary cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                          <Icon name="MapPin" className="text-primary" size={20} />
                          {site.name}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Icon name="Maximize" size={16} />
                            <span>{site.area}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Icon name="DollarSign" size={16} />
                            <span>{site.price}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Icon name="Zap" size={16} />
                            <span>{site.infrastructure}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge className="bg-green-500">Доступна</Badge>
                        <Button variant="outline" className="hover:scale-105 transition-transform">
                          <Icon name="Eye" className="mr-2" size={18} />
                          Смотреть на карте
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="ready">
              <div className="text-center text-gray-600 py-8">Фильтр в разработке</div>
            </TabsContent>
            <TabsContent value="develop">
              <div className="text-center text-gray-600 py-8">Фильтр в разработке</div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Предстоящие аукционы</h2>
            <p className="text-gray-600 text-lg">Следите за возможностями приобретения объектов</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {auctions.map((auction, index) => (
              <Card 
                key={auction.id} 
                className="hover:shadow-lg transition-all duration-300 hover:border-primary cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon name="Calendar" className="text-primary" size={24} />
                        <span className="text-lg font-semibold">{auction.date}</span>
                        <Badge variant="outline">{auction.type}</Badge>
                      </div>
                      <h3 className="text-xl mb-2">{auction.object}</h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Icon name="DollarSign" size={18} />
                        <span>Начальная цена: {auction.startPrice}</span>
                      </div>
                    </div>
                    <Button className="hover:scale-105 transition-transform">
                      <Icon name="FileText" className="mr-2" size={18} />
                      Документы
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Меры поддержки инвесторов</h2>
            <p className="text-gray-600 text-lg">Широкий спектр льгот и преференций для вашего бизнеса</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {support.map((item, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon name={item.icon as any} className="text-primary group-hover:text-white transition-colors" size={32} />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                  <Button variant="link" className="mt-4 hover:scale-105 transition-transform">
                    Узнать больше
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 animate-fade-in">
              <Icon name="Mail" className="mx-auto mb-4" size={48} />
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-blue-100 text-lg">Мы ответим на все ваши вопросы и поможем начать инвестиционный проект</p>
            </div>
            <Card className="animate-scale-in">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      className="transition-all focus:scale-105"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      className="transition-all focus:scale-105"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="transition-all focus:scale-105"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте" 
                      rows={4}
                      className="transition-all focus:scale-105"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-transform" size="lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="animate-fade-in hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: '100ms' }}>
                <Icon name="Phone" className="mx-auto mb-2" size={24} />
                <div className="font-semibold">+7 (3852) 56-70-45</div>
              </div>
              <div className="animate-fade-in hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: '200ms' }}>
                <Icon name="Mail" className="mx-auto mb-2" size={24} />
                <div className="font-semibold">invest@barnaul.org</div>
              </div>
              <div className="animate-fade-in hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: '300ms' }}>
                <Icon name="MapPin" className="mx-auto mb-2" size={24} />
                <div className="font-semibold">пр-т Ленина, 18</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Icon name="Building2" size={28} />
              <div>
                <div className="font-bold">Инвестпортал Барнаула</div>
                <div className="text-sm text-gray-400">© 2025 Все права защищены</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
