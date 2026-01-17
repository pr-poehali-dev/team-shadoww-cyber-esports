import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const players = [
  {
    id: 'passl1ne',
    name: 'PASSL1NE',
    role: 'Капитан',
    position: 'Entry Fragger',
    stats: { kills: 1247, winRate: '67%', rating: 1.24 }
  },
  {
    id: 'reiser',
    name: 'REISER',
    role: 'Player',
    position: 'AWPer',
    stats: { kills: 1189, winRate: '65%', rating: 1.21 }
  },
  {
    id: 'fal',
    name: 'FAL',
    role: 'Player',
    position: 'Rifler',
    stats: { kills: 1156, winRate: '64%', rating: 1.18 }
  },
  {
    id: 'mmeshurra',
    name: 'MMESHURRA',
    role: 'Player',
    position: 'Support',
    stats: { kills: 1098, winRate: '63%', rating: 1.15 }
  },
  {
    id: 'knight',
    name: 'KNIGHT',
    role: 'Player',
    position: 'IGL',
    stats: { kills: 1045, winRate: '66%', rating: 1.19 }
  },
  {
    id: 'coach',
    name: 'PASSL1NE',
    role: 'Coach',
    position: 'Head Coach',
    stats: { tournaments: 24, wins: 16, titles: 3 }
  }
];

const sponsors = [
  { name: 'SkinPass', category: 'Партнёр', logo: '🎮' }
];

const Index = () => {
  const [activePlayer, setActivePlayer] = useState('passl1ne');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div 
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.9)), url(https://cdn.poehali.dev/projects/b8657ca7-4b9c-4394-acc7-e314e104a82a/files/d4b797a5-3505-47f1-8833-2abf9bab8bef.jpg)`
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-7xl md:text-9xl font-bold tracking-wider mb-6 animate-fade-in text-white drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">
            ГОЙДА ГОЙДА ГОЙДА ГОЙДА ГОЙДА ГОЙДА ГОЙДА ГОЙДА ГОЙДА
          </h1>
          <img 
            src="https://cdn.poehali.dev/projects/b8657ca7-4b9c-4394-acc7-e314e104a82a/files/375392e8-b9a0-41e9-9f4c-3e40ada7abcc.jpg" 
            alt="Парадокс" 
            className="w-96 h-96 object-cover rounded-lg mb-6 animate-scale-in border-4 border-primary"
          />
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Парадокс
          </p>
          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#roster" 
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-transform duration-200"
            >
              Состав команды
            </a>
            <a 
              href="#sponsors" 
              className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:scale-105 transition-transform duration-200"
            >
              Партнёры
            </a>
          </div>
        </div>
      </div>

      <section id="roster" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">Наша команда</h2>
        
        <Tabs value={activePlayer} onValueChange={setActivePlayer} className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full mb-8 bg-card">
            {players.map((player) => (
              <TabsTrigger
                key={player.id}
                value={player.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold"
              >
                {player.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {players.map((player) => (
            <TabsContent key={player.id} value={player.id} className="animate-scale-in">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon name="User" size={32} className="text-primary" />
                        <h3 className="text-4xl font-bold text-white">{player.name}</h3>
                      </div>
                      <p className="text-2xl text-muted-foreground mb-2">{player.position}</p>
                      <p className="text-lg text-muted-foreground mb-6">{player.role}</p>
                      
                      <div className="space-y-4">
                        {Object.entries(player.stats).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center border-b border-border pb-3">
                            <span className="text-lg capitalize text-muted-foreground">
                              {key === 'kills' ? 'Убийства' : 
                               key === 'winRate' ? 'Процент побед' : 
                               key === 'rating' ? 'Рейтинг' :
                               key === 'tournaments' ? 'Турниры' :
                               key === 'wins' ? 'Победы' :
                               key === 'titles' ? 'Титулы' : key}
                            </span>
                            <span className="text-2xl font-bold text-primary">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="relative w-64 h-64 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary flex items-center justify-center">
                        <Icon name="User" size={120} className="text-primary/40" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section id="sponsors" className="py-20 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-white">Спонсоры и партнёры</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Компании, которые поддерживают нашу команду
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.map((sponsor, index) => (
              <Card 
                key={sponsor.name}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{sponsor.logo}</div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{sponsor.name}</h3>
                  <p className="text-muted-foreground">{sponsor.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">© 2026 Team Shadoww. Все права защищены.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Twitch" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;