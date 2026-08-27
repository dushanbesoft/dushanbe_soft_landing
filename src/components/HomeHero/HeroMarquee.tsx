import React from 'react';
import { techIcons } from './techIcons';
import styles from './HeroMarquee.module.css';

const techUrls: Record<string, string> = {
  "PHP": "https://www.php.net",
  "JavaScript": "https://developer.mozilla.org/docs/Web/JavaScript",
  "TypeScript": "https://www.typescriptlang.org",
  "Python": "https://www.python.org",
  "MySQL": "https://www.mysql.com",
  "PostgreSQL": "https://www.postgresql.org",
  "MongoDB": "https://www.mongodb.com",
  "Redis": "https://redis.io",
  "React": "https://react.dev",
  "React Native": "https://reactnative.dev",
  "Next.js": "https://nextjs.org",
  "Vue.js": "https://vuejs.org",
  "Node.js": "https://nodejs.org",
  "Express.js": "https://expressjs.com",
  "NestJS": "https://nestjs.com",
  "Laravel": "https://laravel.com",
  "Django": "https://www.djangoproject.com",
  "Flutter": "https://flutter.dev",
  "Swift": "https://www.swift.org",
  "Kotlin": "https://kotlinlang.org",
  "Java": "https://www.java.com",
  "Spring Boot": "https://spring.io/projects/spring-boot",
  "Go": "https://go.dev",
  ".NET": "https://dotnet.microsoft.com",
  "GraphQL": "https://graphql.org",
  "Socket.io": "https://socket.io",
  "GitHub": "https://github.com",
  "Docker": "https://www.docker.com",
  "Kubernetes": "https://kubernetes.io",
  "Nginx": "https://nginx.org",
  "AWS": "https://aws.amazon.com",
  "Git": "https://git-scm.com",
  "GitHub Actions": "https://github.com/features/actions",
  "Kafka": "https://kafka.apache.org",
  "RabbitMQ": "https://www.rabbitmq.com",
  "Elasticsearch": "https://www.elastic.co/elasticsearch",
  "Firebase": "https://firebase.google.com",
  "Tailwind CSS": "https://tailwindcss.com",
  "Vite": "https://vitejs.dev",
  "Webpack": "https://webpack.js.org",
};

import { useTranslation } from 'react-i18next';

export default function HeroMarquee({ marqueeItems = [] }: { marqueeItems?: string[] }) {
  const { t } = useTranslation();
  const tItems = t('hero.marquee', { returnObjects: true });
  const finalMarqueeItems = Array.isArray(tItems) && tItems.length > 0 ? tItems : marqueeItems;
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        {[...finalMarqueeItems, ...finalMarqueeItems].map((item, i) => {
          const tech = techIcons[item];
          const url = techUrls[item];
          return (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.marqueeItem}
            >
              {tech && (
                <tech.Icon
                  className={styles.marqueeIcon}
                  style={{ color: tech.color }}
                  aria-hidden="true"
                />
              )}
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
}
