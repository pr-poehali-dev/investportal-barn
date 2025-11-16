import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const MapPage = () => {
  const navigate = useNavigate();
  const [selectedSite, setSelectedSite] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const sites = [
    {
      id: 1,
      name: 'Площадка в Индустриальном районе',
      area: '12 га',
      price: '450 ₽/м²',
      infrastructure: 'Полная',
      category: 'Промышленность',
      coordinates: [53.3606, 83.7636],
      available: true,
      description: 'Готовая площадка с полной инфраструктурой для промышленного производства'
    },
    {
      id: 2,
      name: 'Участок на ул. Попова',
      area: '5 га',
      price: '380 ₽/м²',
      infrastructure: 'Частичная',
      category: 'Коммерция',
      coordinates: [53.3456, 83.7756],
      available: true,
      description: 'Участок в центральной части города, подходит для торговых комплексов'
    },
    {
      id: 3,
      name: 'Территория в районе ЖБИ-3',
      area: '30 га',
      price: '320 ₽/м²',
      infrastructure: 'Полная',
      category: 'Логистика',
      coordinates: [53.3706, 83.7436],
      available: true,
      description: 'Крупная территория для логистических комплексов с выходом на трассу'
    },
    {
      id: 4,
      name: 'Павловский тракт',
      area: '18 га',
      price: '290 ₽/м²',
      infrastructure: 'Полная',
      category: 'Агропром',
      coordinates: [53.3306, 83.7836],
      available: true,
      description: 'Площадка для агропромышленных производств'
    },
    {
      id: 5,
      name: 'Площадка Власихинская',
      area: '8 га',
      price: '410 ₽/м²',
      infrastructure: 'Частичная',
      category: 'Промышленность',
      coordinates: [53.3806, 83.7336],
      available: true,
      description: 'Компактная площадка для малого и среднего бизнеса'
    }
  ];

  const filteredSites = sites.filter(site => {
    const matchesCategory = filterCategory === 'all' || site.category === filterCategory;
    const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         site.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=your_api_key&lang=ru_RU';
    script.async = true;
    script.onload = () => initMap();
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initMap = () => {
    if (typeof window !== 'undefined' && (window as any).ymaps) {
      (window as any).ymaps.ready(() => {
        const map = new (window as any).ymaps.Map('map', {
          center: [53.3606, 83.7636],
          zoom: 11,
          controls: ['zoomControl', 'fullscreenControl']
        });

        filteredSites.forEach((site) => {
          const placemark = new (window as any).ymaps.Placemark(
            site.coordinates,
            {
              balloonContentHeader: `<strong>${site.name}</strong>`,
              balloonContentBody: `
                <div style="padding: 8px;">
                  <p>${site.description}</p>
                  <p><strong>Площадь:</strong> ${site.area}</p>
                  <p><strong>Цена:</strong> ${site.price}</p>
                  <p><strong>Инфраструктура:</strong> ${site.infrastructure}</p>
                </div>
              `,
              balloonContentFooter: `<button onclick="window.selectSite(${site.id})" style="padding: 8px 16px; background: #0EA5E9; color: white; border: none; border-radius: 4px; cursor: pointer;">Подробнее</button>`
            },
            {
              preset: site.available ? 'islands#blueCircleDotIcon' : 'islands#grayCircleDotIcon'
            }
          );

          placemark.events.add('click', () => {
            setSelectedSite(site.id);
          });

          map.geoObjects.add(placemark);
        });
      });
    }
  };

  (window as any).selectSite = (id: number) => {
    setSelectedSite(id);
  };

  useEffect(() => {
    initMap();
  }, [filterCategory, searchQuery]);

  const selectedSiteData = sites.find(s => s.id === selectedSite);

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
                <Icon name="Map" className="text-primary" size={32} />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Интерактивная карта</h1>
                  <p className="text-sm text-gray-600">Инвестиционные площадки Барнаула</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <Card className="animate-fade-in">
              <CardContent className="p-4 space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Поиск площадок</label>
                  <Input
                    placeholder="Введите название..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Категория</label>
                  <Select value={filterCategory} onValueChange={setFilterCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все категории</SelectItem>
                      <SelectItem value="Промышленность">Промышленность</SelectItem>
                      <SelectItem value="Логистика">Логистика</SelectItem>
                      <SelectItem value="Коммерция">Коммерция</SelectItem>
                      <SelectItem value="Агропром">Агропром</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-2 border-t">
                  <div className="text-sm text-gray-600 mb-2">
                    Найдено площадок: <strong>{filteredSites.length}</strong>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3 max-h-[calc(100vh-400px)] overflow-y-auto">
              {filteredSites.map((site, index) => (
                <Card
                  key={site.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg animate-fade-in ${
                    selectedSite === site.id ? 'ring-2 ring-primary shadow-lg' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedSite(site.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-sm">{site.name}</h3>
                      <Badge variant="outline" className="text-xs">{site.category}</Badge>
                    </div>
                    <div className="space-y-1 text-xs text-gray-600">
                      <div className="flex items-center gap-2">
                        <Icon name="Maximize" size={14} />
                        <span>{site.area}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="DollarSign" size={14} />
                        <span>{site.price}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Zap" size={14} />
                        <span>{site.infrastructure}</span>
                      </div>
                    </div>
                    {site.available && (
                      <Badge className="mt-2 bg-green-500 text-xs">Доступна</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <Card className="animate-fade-in">
              <CardContent className="p-0">
                <div id="map" className="w-full h-[600px] rounded-lg bg-gray-200"></div>
              </CardContent>
            </Card>

            {selectedSiteData && (
              <Card className="animate-scale-in">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{selectedSiteData.name}</h2>
                      <Badge variant="outline">{selectedSiteData.category}</Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedSite(null)}
                      className="hover:scale-110 transition-transform"
                    >
                      <Icon name="X" size={20} />
                    </Button>
                  </div>

                  <p className="text-gray-700 mb-6">{selectedSiteData.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Площадь</div>
                      <div className="font-semibold">{selectedSiteData.area}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Цена</div>
                      <div className="font-semibold">{selectedSiteData.price}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Инфраструктура</div>
                      <div className="font-semibold">{selectedSiteData.infrastructure}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Статус</div>
                      <Badge className="bg-green-500">Доступна</Badge>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="flex-1 hover:scale-105 transition-transform">
                      <Icon name="FileText" className="mr-2" size={18} />
                      Запросить документы
                    </Button>
                    <Button variant="outline" className="flex-1 hover:scale-105 transition-transform">
                      <Icon name="Calendar" className="mr-2" size={18} />
                      Записаться на осмотр
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
