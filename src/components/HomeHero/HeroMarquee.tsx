import React from 'react';
import type { IconType } from 'react-icons';
import { FaAws, FaJava } from 'react-icons/fa';
import {
  SiApachekafka,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiElasticsearch,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiGithubactions,
  SiGit,
  SiGo,
  SiGraphql,
  SiJavascript,
  SiKotlin,
  SiKubernetes,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiSpring,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWebpack,
} from 'react-icons/si';
import styles from './HeroMarquee.module.css';

const techIcons: Record<string, { Icon: IconType; color: string }> = {
  "PHP": { Icon: SiPhp, color: "#777BB4" },
  "JavaScript": { Icon: SiJavascript, color: "#F7DF1E" },
  "TypeScript": { Icon: SiTypescript, color: "#3178C6" },
  "Python": { Icon: SiPython, color: "#3776AB" },
  "MySQL": { Icon: SiMysql, color: "#4479A1" },
  "PostgreSQL": { Icon: SiPostgresql, color: "#4169E1" },
  "MongoDB": { Icon: SiMongodb, color: "#47A248" },
  "Redis": { Icon: SiRedis, color: "#DC382D" },
  "React": { Icon: SiReact, color: "#61DAFB" },
  "React Native": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
  "Vue.js": { Icon: SiVuedotjs, color: "#4FC08D" },
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  "Express.js": { Icon: SiExpress, color: "#FFFFFF" },
  "NestJS": { Icon: SiNestjs, color: "#E0234E" },
  "Laravel": { Icon: SiLaravel, color: "#FF2D20" },
  "Django": { Icon: SiDjango, color: "#44B78B" },
  "Flutter": { Icon: SiFlutter, color: "#02569B" },
  "Swift": { Icon: SiSwift, color: "#F05138" },
  "Kotlin": { Icon: SiKotlin, color: "#7F52FF" },
  "Java": { Icon: FaJava, color: "#F89820" },
  "Spring Boot": { Icon: SiSpring, color: "#6DB33F" },
  "Go": { Icon: SiGo, color: "#00ADD8" },
  ".NET": { Icon: SiDotnet, color: "#512BD4" },
  "GraphQL": { Icon: SiGraphql, color: "#E10098" },
  "Socket.io": { Icon: SiSocketdotio, color: "#FFFFFF" },
  "GitHub": { Icon: SiGithub, color: "#FFFFFF" },
  "Docker": { Icon: SiDocker, color: "#2496ED" },
  "Kubernetes": { Icon: SiKubernetes, color: "#326CE5" },
  "Nginx": { Icon: SiNginx, color: "#009639" },
  "AWS": { Icon: FaAws, color: "#FF9900" },
  "Git": { Icon: SiGit, color: "#F05032" },
  "GitHub Actions": { Icon: SiGithubactions, color: "#2088FF" },
  "Kafka": { Icon: SiApachekafka, color: "#FFFFFF" },
  "RabbitMQ": { Icon: SiRabbitmq, color: "#FF6600" },
  "Elasticsearch": { Icon: SiElasticsearch, color: "#00BFB3" },
  "Firebase": { Icon: SiFirebase, color: "#FFCA28" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  "Vite": { Icon: SiVite, color: "#646CFF" },
  "Webpack": { Icon: SiWebpack, color: "#8DD6F9" },
};

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

const defaultMarqueeItems = [
  "PHP",
  "JavaScript",
  "TypeScript",
  "Python",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "React",
  "React Native",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Express.js",
  "NestJS",
  "Laravel",
  "Django",
  "Flutter",
  "Swift",
  "Kotlin",
  "Java",
  "Spring Boot",
  "Go",
  ".NET",
  "GraphQL",
  "Socket.io",
  "GitHub",
  "Docker",
  "Kubernetes",
  "Nginx",
  "AWS",
  "Git",
  "GitHub Actions",
  "Kafka",
  "RabbitMQ",
  "Elasticsearch",
  "Firebase",
  "Tailwind CSS",
  "Vite",
  "Webpack",
];

import { useTranslation } from 'react-i18next';

export default function HeroMarquee() {
  const { t } = useTranslation();
  const tItems = t('hero.marquee', { returnObjects: true });
  const marqueeItems: string[] = Array.isArray(tItems) ? tItems : defaultMarqueeItems;
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        {[...marqueeItems, ...marqueeItems].map((item, i) => {
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
