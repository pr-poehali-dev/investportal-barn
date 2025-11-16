import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Record<string, any> = {
    '1': {
      id: 1,
      title: 'Промышленный технопарк "Барнаульский"',
      area: '50 га',
      investment: '2.5 млрд ₽',
      status: 'Активный',
      category: 'Промышленность',
      description: 'Современный промышленный технопарк с полной инфраструктурой для производственных предприятий различных отраслей.',
      location: 'Индустриальный район, ул. Производственная, 45',
      payback: '4-5 лет',
      jobs: '250+ рабочих мест',
      infrastructure: ['Электроснабжение 10 МВт', 'Газоснабжение', 'Водоснабжение и канализация', 'Дороги и парковки', 'Охрана территории'],
      images: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
        'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800',
        'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800'
      ],
      advantages: [
        'Готовая инфраструктура',
        'Льготные условия аренды',
        'Налоговые преференции',
        'Близость к транспортным узлам'
      ],
      contact: {
        name: 'Иванов Сергей Петрович',
        position: 'Руководитель проекта',
        phone: '+7 (3852) 56-70-45',
        email: 'technopark@barnaul.org'
      }
    },
    '2': {
      id: 2,
      title: 'Логистический комплекс на трассе М-52',
      area: '25 га',
      investment: '1.8 млрд ₽',
      status: 'В разработке',
      category: 'Логистика',
      description: 'Многофункциональный логистический комплекс с современными складскими помещениями класса А.',
      location: 'Трасса М-52, 15 км от МКАД',
      payback: '5-6 лет',
      jobs: '180+ рабочих мест',
      infrastructure: ['Складские помещения 15000 м²', 'Площадки для контейнеров', 'Автомобильные весы', 'Таможенный пост', 'Административные здания'],
      images: [
        'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800',
        'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800',
        'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800'
      ],
      advantages: [
        'Стратегическое расположение',
        'Прямой выход на федеральную трассу',
        'Близость к границе',
        'Низкая конкуренция в регионе'
      ],
      contact: {
        name: 'Петрова Анна Ивановна',
        position: 'Менеджер проекта',
        phone: '+7 (3852) 56-70-46',
        email: 'logistics@barnaul.org'
      }
    },
    '3': {
      id: 3,
      title: 'Агропромышленный кластер',
      area: '75 га',
      investment: '3.2 млрд ₽',
      status: 'Активный',
      category: 'Агропром',
      description: 'Крупнейший агропромышленный кластер региона для переработки сельхозпродукции и производства продуктов питания.',
      location: 'Павловский тракт, 12 км',
      payback: '6-7 лет',
      jobs: '400+ рабочих мест',
      infrastructure: ['Производственные цеха', 'Холодильные камеры', 'Лаборатории', 'Административный корпус', 'Очистные сооружения'],
      images: [
        'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
        'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800',
        'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800'
      ],
      advantages: [
        'Близость к сырьевой базе',
        'Господдержка АПК',
        'Развитая транспортная сеть',
        'Квалифицированные кадры'
      ],
      contact: {
        name: 'Сидоров Алексей Викторович',
        position: 'Директор кластера',
        phone: '+7 (3852) 56-70-47',
        email: 'agro@barnaul.org'
      }
    }
  };

  const project = projects[id || '1'];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Проект не найден</h1>
          <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" onClick={() => navigate('/')} className="hover:scale-105 transition-transform">
                <Icon name="ArrowLeft" className="mr-2" size={20} />
                Назад
              </Button>
              <div className="flex items-center gap-3 ml-4">
                <Icon name="Building2" className="text-primary" size={32} />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Инвестпортал Барнаула</h1>
                  <p className="text-sm text-gray-600">Детали проекта</p>
                </div>
              </div>
            </div>
            <Button className="hover:scale-105 transition-transform">
              <Icon name="FileText" className="mr-2" size={18} />
              Заявка на участие
            </Button>
          </div>
        </div>
      </header>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant={project.status === 'Активный' ? 'default' : 'secondary'} className="text-base px-4 py-1">
                {project.status}
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-1">{project.category}</Badge>
            </div>
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <div className="flex items-center gap-2 text-gray-600 text-lg">
              <Icon name="MapPin" size={20} />
              <span>{project.location}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="animate-fade-in">
                <CardContent className="p-0">
                  <div className="relative h-[500px] bg-gray-900 rounded-lg overflow-hidden">
                    <img 
                      src={project.images[currentImageIndex]} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <Button 
                      variant="secondary" 
                      size="icon" 
                      className="absolute left-4 top-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                      onClick={prevImage}
                    >
                      <Icon name="ChevronLeft" size={24} />
                    </Button>
                    <Button 
                      variant="secondary" 
                      size="icon" 
                      className="absolute right-4 top-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                      onClick={nextImage}
                    >
                      <Icon name="ChevronRight" size={24} />
                    </Button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.images.map((_: any, index: number) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 p-4">
                    {project.images.map((img: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative h-24 rounded-lg overflow-hidden hover:scale-105 transition-transform ${
                          index === currentImageIndex ? 'ring-2 ring-primary' : ''
                        }`}
                      >
                        <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="description" className="animate-fade-in">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Описание</TabsTrigger>
                  <TabsTrigger value="infrastructure">Инфраструктура</TabsTrigger>
                  <TabsTrigger value="advantages">Преимущества</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="infrastructure" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        {project.infrastructure.map((item: string, index: number) => (
                          <li key={index} className="flex items-center gap-3 text-gray-700">
                            <Icon name="CheckCircle2" className="text-green-500" size={20} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="advantages" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.advantages.map((advantage: string, index: number) => (
                          <div key={index} className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                            <Icon name="Star" className="text-primary" size={20} />
                            <span className="font-medium">{advantage}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card className="animate-fade-in sticky top-24">
                <CardHeader>
                  <CardTitle>Основные параметры</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="Maximize" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="text-sm text-gray-600">Площадь</div>
                      <div className="font-semibold text-lg">{project.area}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="DollarSign" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="text-sm text-gray-600">Объем инвестиций</div>
                      <div className="font-semibold text-lg">{project.investment}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="TrendingUp" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="text-sm text-gray-600">Срок окупаемости</div>
                      <div className="font-semibold text-lg">{project.payback}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Icon name="Users" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="text-sm text-gray-600">Рабочие места</div>
                      <div className="font-semibold text-lg">{project.jobs}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Контактное лицо</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="font-semibold text-lg">{project.contact.name}</div>
                    <div className="text-sm text-gray-600">{project.contact.position}</div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Icon name="Phone" size={18} />
                    <a href={`tel:${project.contact.phone}`} className="hover:text-primary transition-colors">
                      {project.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Icon name="Mail" size={18} />
                    <a href={`mailto:${project.contact.email}`} className="hover:text-primary transition-colors">
                      {project.contact.email}
                    </a>
                  </div>
                  <Button className="w-full mt-4 hover:scale-105 transition-transform">
                    <Icon name="MessageCircle" className="mr-2" size={18} />
                    Написать
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
