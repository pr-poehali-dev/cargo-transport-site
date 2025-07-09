import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Truck",
      title: "Междугородние перевозки",
      description: "Доставка грузов по всей России с гарантией сроков",
    },
    {
      icon: "Package",
      title: "Логистические услуги",
      description: "Комплексные решения для оптимизации поставок",
    },
    {
      icon: "Warehouse",
      title: "Складские услуги",
      description: "Современные складские комплексы с системой учета",
    },
  ];

  const fleet = [
    {
      type: "Фуры",
      capacity: "20 тонн",
      count: "15 единиц",
    },
    {
      type: "Газели",
      capacity: "3 тонны",
      count: "8 единиц",
    },
    {
      type: "Тентованные",
      capacity: "10 тонн",
      count: "12 единиц",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Грузоперевозки по всей России
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Надежные транспортные решения для вашего бизнеса. Междугородние
            перевозки, логистика и складские услуги.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Phone" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                О компании
              </h2>
              <p className="text-gray-600 mb-6">
                Мы работаем на рынке грузоперевозок уже более 10 лет,
                предоставляя качественные транспортные услуги по всей России.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    <Icon name="Check" size={16} className="mr-1" />
                    Гарантия сроков
                  </Badge>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    <Icon name="Shield" size={16} className="mr-1" />
                    Страхование грузов
                  </Badge>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800"
                  >
                    <Icon name="Clock" size={16} className="mr-1" />
                    Работаем 24/7
                  </Badge>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/img/ddde6d8a-616f-4daf-894b-4b6034b2b428.jpg"
                alt="Междугородние грузоперевозки"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Парк техники
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/img/fcf4b516-b100-4c4f-b79e-6d6fec1cfbc3.jpg"
                alt="Парк техники компании"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/img/20bd849d-cbcd-4579-86d1-cd45a5ef3516.jpg"
                alt="Складские услуги"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {fleet.map((vehicle, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Truck" size={40} className="text-white" />
                  </div>
                  <CardTitle>{vehicle.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      Грузоподъемность: {vehicle.capacity}
                    </p>
                    <p className="text-gray-600">Количество: {vehicle.count}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Свяжитесь с нами
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-blue-600" />
                  <span className="text-gray-600">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-blue-600" />
                  <span className="text-gray-600">info@cargo-company.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-blue-600" />
                  <span className="text-gray-600">
                    Москва, ул. Транспортная, 15
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-blue-600" />
                  <span className="text-gray-600">Круглосуточно</span>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Быстрый расчет стоимости</CardTitle>
                <CardDescription>
                  Оставьте заявку и мы перезвоним в течение 5 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Откуда
                    </label>
                    <div className="border rounded-md p-2 bg-gray-50">
                      <span className="text-gray-500">Город отправления</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Куда
                    </label>
                    <div className="border rounded-md p-2 bg-gray-50">
                      <span className="text-gray-500">Город назначения</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Телефон
                  </label>
                  <div className="border rounded-md p-2 bg-gray-50">
                    <span className="text-gray-500">+7 (___) ___-__-__</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Send" className="mr-2" size={16} />
                  Получить расчет
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">КарgoЛогистик</h3>
              <p className="text-gray-400">
                Надежные грузоперевозки по всей России
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Междугородние перевозки</li>
                <li>Логистические услуги</li>
                <li>Складские услуги</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Парк техники</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@cargo-company.ru</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 КарgoЛогистик. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
