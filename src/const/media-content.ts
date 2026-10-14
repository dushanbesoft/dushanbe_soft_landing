export interface MediaItem {
  id: string;
  type: 'video' | 'image';
  src: string;
  thumb: string;
  title: string;
  caption: string;
  duration?: string | null;
}

export const mediaGalleryItems: MediaItem[] = [
  {
    "id": "media_1",
    "type": "video",
    "src": "/content/DushanbeSoft/%23website%20%23web%20%23tajikistan%20%23%D0%B2%D0%B5%D0%B1%20%23%D0%B2%D0%B5%D0%B1%D1%81%D0%B0%D0%B8%CC%86%D1%82%20%23dushanbe%20%23radio.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_1.jpg",
    "title": "#website #web #tajikistan #веб #вебсайт #dushanbe #radio",
    "caption": "#website #web #tajikistan #веб #вебсайт #dushanbe #radio",
    "duration": "1:01"
  },
  {
    "id": "media_2",
    "type": "video",
    "src": "/content/DushanbeSoft/1.%20HTML%20%D0%B1%D1%8B%D0%BB%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%20%D0%B2%201989%20%D0%B3%D0%BE%D0%B4%D1%83HTML%20-%20%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B8%CC%86%20%D1%8F%D0%B7%D1%8B%D0%BA%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%82%D0%BA%D0%B8%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B2%D0%B5%D0%B1-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86.%20%D0%92%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B5%20%D0%BE%D0%BD.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_2.jpg",
    "title": "1. HTML был создан в 1989 годуHTML - основной язык разметки д...",
    "caption": "1. HTML был создан в 1989 годуHTML - основной язык разметки для создания веб-страниц. Впервые он",
    "duration": "0:16"
  },
  {
    "id": "media_3",
    "type": "video",
    "src": "/content/DushanbeSoft/Dushanbe-soft%20%E2%80%93%20%D1%8D%D1%82%D0%BE%20%D0%BF%D1%80%D0%BE%D1%84%D0%B5%D1%81%D1%81%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%B8%20%D0%B1%D1%8B%D1%81%D1%82%D1%80%D0%BE%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D0%B2%D0%B0%D1%8E%D1%89%D0%B0%D1%8F%D1%81%D1%8F%20%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F.%20%D0%9D%D0%B0%D1%88%D0%B0%20%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0%20%D0%B8%D0%BC%D0%B5%D0%B5%D1%82%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B8%CC%86%20.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_3.jpg",
    "title": "Dushanbe-soft – это профессиональная и быстроразвивающаяся ком...",
    "caption": "Dushanbe-soft – это профессиональная и быстроразвивающаяся компания. Наша команда имеет большой",
    "duration": "0:38"
  },
  {
    "id": "media_4",
    "type": "video",
    "src": "/content/DushanbeSoft/SMS-%D1%88%D0%BB%D1%8E%D0%B7%20%D0%B4%D0%BB%D1%8F%20OTP-%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2%2C%202FA%20%D0%B8%D0%BB%D0%B8%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%BD%D1%8B%D1%85%20%D1%83%D0%B2%D0%B5%D0%B4%D0%BE%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D0%B8%CC%86.%20%20%D0%94%D0%BB%D1%8F%20%D1%81%D1%82%D0%B0%D1%80%D1%82%D0%B0-%20%D0%A1%D1%80%D0%B0%D0%B7%D1%83%20%D0%BF%D0%BE%D1%81%D0%BB%D0%B5%20%D1%80%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8%20%D0%BC%D1%8B%20%D0%B4.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_4.jpg",
    "title": "SMS-шлюз для OTP-кодов, 2FA или системных уведомлений.  Для с...",
    "caption": "SMS-шлюз для OTP-кодов, 2FA или системных уведомлений.  Для старта- Сразу после регистрации мы д",
    "duration": "0:43"
  },
  {
    "id": "media_5",
    "type": "video",
    "src": "/content/DushanbeSoft/%C2%AB%D0%A2%D0%BE%D0%BF%2010%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BD%D1%8B%D1%85%20%D1%84%D0%B0%D0%BA%D1%82%D0%BE%D0%B2%20%D0%BE%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F1.%20%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82%20%D0%B2%20%D0%BC%D0%B8%D1%80%D0%B5%20%D0%B1%D1%8B%D0%BB%D0%B0%20%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0%20%D0%BF%D0%BE%20%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8%20.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_5.jpg",
    "title": "«Топ 10 интересных фактов о программирования1. Первый програм...",
    "caption": "«Топ 10 интересных фактов о программирования1. Первый программист в мире была женщина по имени",
    "duration": "0:01"
  },
  {
    "id": "media_6",
    "type": "video",
    "src": "/content/DushanbeSoft/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B4%D0%B0%D1%80%D1%8F%20SMM%2C%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%20%D0%BC%D0%BE%D0%B6%D0%B5%D1%82%20%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C%20%D0%BF%D1%80%D1%8F%D0%BC%D1%83%D1%8E%20%D1%81%D0%B2%D1%8F%D0%B7%D1%8C%20%D1%81%20%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%B0%D0%BC%D0%B8%20%D0%B8%20%D0%BE%D1%82%D0%B2%D0%B5%D1%87%D0%B0%D1%82%D1%8C%20%D0%BD%D0%B0%20%D0%B8%D1%85%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%8B%20%D0%B8%D0%BB%D0%B8%20%D0%B4%D0%B0%D0%B2.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_6.jpg",
    "title": "Благодаря SMM, бизнес может установить прямую связь с клиентам...",
    "caption": "Благодаря SMM, бизнес может установить прямую связь с клиентами и отвечать на их вопросы или дав",
    "duration": "0:09"
  },
  {
    "id": "media_7",
    "type": "video",
    "src": "/content/DushanbeSoft/%D0%9D%D0%B0%D1%88%20%D0%BD%D0%BE%D0%B2%D1%8B%D0%B8%CC%86%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B2%D0%B5%D0%B1-%D1%81%D0%B0%D0%B8%CC%86%D1%82%20TTL.TJ%20%D0%BD%D0%B0%20NextJS.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_7.jpg",
    "title": "Наш новый разработанный веб-сайт TTL.TJ на NextJS",
    "caption": "Наш новый разработанный веб-сайт TTL.TJ на NextJS",
    "duration": "0:37"
  },
  {
    "id": "media_8",
    "type": "video",
    "src": "/content/DushanbeSoft/%D0%A0%D0%90%D0%97%D0%A0%D0%90%D0%91%D0%90%D0%A2%D0%AB%D0%92%D0%90%D0%95%D0%9C%D0%9C%D0%9E%D0%91%D0%98%D0%9B%D0%AC%D0%9D%D0%AB%D0%95%20%D0%9F%D0%A0%D0%98%D0%9B%D0%9E%D0%96%D0%95%D0%9D%D0%98%D0%AF%D0%94%D0%9B%D0%AF%20IOS%20%D0%98%20ANDROID%D0%A7%D1%82%D0%BE%D0%B1%D1%8B%20%D0%B2%D1%8B-%E2%AC%86%EF%B8%8F%20%D0%BF%D0%BE%D0%B2%D1%8B%D1%81%D0%B8%D0%BB%D0%B8%20%D0%BF%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D0%B8%20%D0%B8%20%D0%BB%D0%BE%D1%8F%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C%20%D0%BA%D0%BB%D0%B8%D0%B5.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_8.jpg",
    "title": "РАЗРАБАТЫВАЕММОБИЛЬНЫЕ ПРИЛОЖЕНИЯДЛЯ IOS И ANDROIDЧтобы вы-⬆️ ...",
    "caption": "РАЗРАБАТЫВАЕММОБИЛЬНЫЕ ПРИЛОЖЕНИЯДЛЯ IOS И ANDROIDЧтобы вы-⬆️ повысили продажи и лояльность клие",
    "duration": "0:05"
  },
  {
    "id": "media_9",
    "type": "video",
    "src": "/content/DushanbeSoft/%D0%A0%D0%B0%D0%B7%D0%B2%D0%B5%D1%80%D0%BD%D0%B5%D0%BC%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%20%D1%81%20%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%D0%BC%20%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%B0%D0%BC%D0%B8%2C%20%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D0%B0%D0%BC%D0%B8%2C%20%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%BE%D0%BC%2C%20%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%BC%20%D0%BA%D0%B0%D0%B1%D0%B8%D0%BD%D0%B5%D1%82%D0%BE%D0%BC%20%D0%B8%20%D1%81%D0%B2%D1%8F%D0%B6%D0%B5%D0%BC.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_9.jpg",
    "title": "Развернем интернет-магазин с управлением товарами, фильтрами, ...",
    "caption": "Развернем интернет-магазин с управлением товарами, фильтрами, поиском, личным кабинетом и свяжем",
    "duration": "0:12"
  },
  {
    "id": "media_10",
    "type": "video",
    "src": "/content/DushanbeSoft/%D0%A0%D0%BE%D0%B7%D1%8B%D0%B3%D1%80%D1%8B%D1%88%20%D0%BE%D1%82%20Royal%20Baby%20%23%D1%80%D0%BE%D0%B7%D1%8B%D0%B3%D1%80%D1%8B%D1%88%23%D0%B4%D0%B5%D1%82%D0%B8%23%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%B8%D0%B5%23%D1%82%D0%B0%D0%B4%D0%B6%D0%B8%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD%23%D0%BA%D1%83%D0%BB%D0%BE%D0%B1%23%D1%85%D1%83%D1%87%D0%B0%D0%BD%D0%B4%23%D0%BF%D0%BE%D0%BC%D0%B8%D1%80.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_10.jpg",
    "title": "Розыгрыш от Royal Baby #розыгрыш#дети#участие#таджикистан#куло...",
    "caption": "Розыгрыш от Royal Baby #розыгрыш#дети#участие#таджикистан#кулоб#хучанд#помир",
    "duration": "0:47"
  },
  {
    "id": "media_11",
    "type": "video",
    "src": "/content/DushanbeSoft/%D0%A1%D0%9C%D0%9C%20%D0%9F%D0%A0%D0%9E%D0%94%D0%92%D0%98%D0%96%D0%95%D0%9D%D0%98%D0%AF%20%D0%92%D0%A1%D0%95%D0%9C%E2%9C%8C%EF%B8%8F%20%F0%9F%94%B4%D0%A6%D0%95%D0%9B%D0%98%20SMM%20%D0%BF%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%F0%9F%94%B5%20%D0%9F%D0%BE%D0%B2%D1%8B%D1%88%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%83%D0%B7%D0%BD%D0%B0%D0%B2%D0%B0%D0%B5%D0%BC%D0%BE%D1%81%D1%82%D0%B8%20%D0%B1%D1%80%D0%B5%D0%BD%D0%B4%D0%B0%3B%F0%9F%94%B5%20%D0%9F%D1%80%D0%B8%D0%B2%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D0%BE.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_11.jpg",
    "title": "СММ ПРОДВИЖЕНИЯ ВСЕМ✌️ 🔴ЦЕЛИ SMM продвижения-🔵 Повышение узнав...",
    "caption": "СММ ПРОДВИЖЕНИЯ ВСЕМ✌️ 🔴ЦЕЛИ SMM продвижения-🔵 Повышение узнаваемости бренда;🔵 Привлечение по",
    "duration": "0:09"
  },
  {
    "id": "media_12",
    "type": "video",
    "src": "/content/DushanbeSoft/%D0%A1%D0%B0%D0%BB%D0%BE%D0%BC%2C%20%D0%B4%D1%83%CC%84%D1%81%D1%82%D0%BE%D0%BD%21%20%D0%91%D0%BE%20%D0%BA%D0%B0%D0%BC%D0%BE%D0%BB%D0%B8%20%D1%85%D1%83%D1%88%D0%BD%D1%83%D0%B4%D0%B8%CC%84%20%D0%B1%D0%B0%20%D0%BC%D0%B0%D1%8A%D0%BB%D1%83%D0%BC%D0%BE%D1%82%D0%B8%20%D0%A8%D1%83%D0%BC%D0%BE%20%D0%BC%D0%B5%D1%80%D0%B0%D1%81%D0%BE%D0%BD%D0%B5%D0%BC%2C%20%D0%BA%D0%B8%20%D1%88%D0%B8%D1%80%D0%BA%D0%B0%D1%82%D0%B8%20DushanbeSoft%20%D2%B3%D0%B0%D0%BC%D1%87%D1%83%D0%BD%20%D1%82%D0%B0%D2%B3.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_12.jpg",
    "title": "Салом, дӯстон! Бо камоли хушнудӣ ба маълумоти Шумо мерасонем...",
    "caption": "Салом, дӯстон! Бо камоли хушнудӣ ба маълумоти Шумо мерасонем, ки ширкати DushanbeSoft ҳамчун таҳ",
    "duration": "0:14"
  },
  {
    "id": "media_13",
    "type": "video",
    "src": "/content/DushanbeSoft/%D0%A2%D0%B5%D1%85%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0%20%D1%81%D0%B0%D0%B8%CC%86%D1%82%D0%B0%20%E2%80%93%20%D0%BE%D0%B4%D0%BD%D0%BE%20%D0%B8%D0%B7%20%D0%B2%D0%B0%D0%B6%D0%BD%D0%B5%D0%B8%CC%86%D1%88%D0%B8%D1%85%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D0%B8%CC%86%20%D0%BE%D0%B1%D0%B5%D1%81%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B5%D0%B3%D0%BE%20%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D0%B8%2C%20%D0%B0%20%D1%82%D0%B0%D0%BA%D0%B6%D0%B5%20%D0%B5%D0%B3%D0%BE%20%D0%BF%D0%BE%D1%81%D0%B5%D1%89%D0%B0%D0%B5.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_13.jpg",
    "title": "Техподдержка сайта – одно из важнейших условий обеспечения ...",
    "caption": "Техподдержка сайта – одно из важнейших условий обеспечения его безопасности, а также его посещае",
    "duration": "0:12"
  },
  {
    "id": "media_14",
    "type": "video",
    "src": "/content/DushanbeSoft/%E2%9D%A4%EF%B8%8F%D0%A1%D0%BF%D0%B0%D1%81%D0%B8%D0%B1%D0%BE%20%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%B3%D0%B0%D0%BC%20%D0%B8%D0%B7%20%40dushanbe_soft%20%D0%B7%D0%B0%20%D0%BD%D0%B5%D0%BE%D0%B6%D0%B8%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B8%CC%86%20%D0%B8%20%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B8%CC%86%20%D0%BF%D0%BE%D0%B4%D0%B0%D1%80%D0%BE%D0%BA%21%20%F0%9F%8E%89%D0%A1%D0%B0%D0%B8%CC%86%D1%82%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82%20%D0%BD%D0%B0%20%D1%83%D1%80%D0%B0%21%20%D0%A0.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_14.jpg",
    "title": "❤️Спасибо коллегам из @dushanbe_soft за неожиданный и сладкии...",
    "caption": "❤️Спасибо коллегам из @dushanbe_soft за неожиданный и сладкий подарок! 🎉Сайт работает на ура! Р",
    "duration": "0:26"
  },
  {
    "id": "media_15",
    "type": "video",
    "src": "/content/DushanbeSoft/%F0%9F%8C%9F%20%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%2C%20%D0%B4%D1%80%D1%83%D0%B7%D1%8C%D1%8F%21%20%D0%A1%20%D0%B3%D0%BE%D1%80%D0%B4%D0%BE%D1%81%D1%82%D1%8C%D1%8E%20%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D1%8F%D0%B5%D0%BC%20%D0%BD%D0%B0%D1%88%20%D0%BD%D0%BE%D0%B2%D1%8B%D0%B8%CC%86%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%20%E2%80%94%20RoyalBaBy%20%2B%20%D1%82%D0%B5%D0%BB%D0%B5%D0%B3%D1%80%D0%B0%D0%BC-%D0%B1%D0%BE%D1%82%21%20%F0%9F%8E%89%D0%94%D0%BB%D1%8F%20%D0%B7.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_15.jpg",
    "title": "🌟 Привет, друзья! С гордостью представляем наш новый проект —...",
    "caption": "🌟 Привет, друзья! С гордостью представляем наш новый проект — RoyalBaBy + телеграм-бот! 🎉Для з",
    "duration": "0:49"
  },
  {
    "id": "media_16",
    "type": "video",
    "src": "/content/DushanbeSoft/%F0%9F%8C%9F%20%E2%80%9C%D0%A3%D1%81%D0%BF%D0%B5%D1%88%D0%BD%D0%BE%D0%B5%20%D1%81%D0%BE%D1%82%D1%80%D1%83%D0%B4%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%BE%20Dushanbe-Soft%20%D0%B8%20%40lovely.tajikistan%20%21%E2%80%9C%F0%9F%8C%9F%D0%9C%D1%8B%20%D0%B8%D1%81%D0%BA%D1%80%D0%B5%D0%BD%D0%BD%D0%B5%20%D1%80%D0%B0%D0%B4%D1%8B%20%D0%BF%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_16.jpg",
    "title": "🌟 “Успешное сотрудничество Dushanbe-Soft и @lovely.tajikistan ...",
    "caption": "🌟 “Успешное сотрудничество Dushanbe-Soft и @lovely.tajikistan !“🌟Мы искренне рады поделиться н",
    "duration": "1:19"
  },
  {
    "id": "media_17",
    "type": "video",
    "src": "/content/DushanbeSoft/%F0%9F%93%88%20%D0%90%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0-%20%D0%A3%D0%B2%D0%B5%D0%BB%D0%B8%D1%87%D1%8C%D1%82%D0%B5%20%D1%8D%D1%84%D1%84%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D1%81%D1%82%D1%8C%2C%20%D0%BE%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F%21%20%F0%9F%9A%80%F0%9F%94%A7%20%D0%97%D0%B0%D1%87%D0%B5%D0%BC%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_17.jpg",
    "title": "📈 Автоматизация бизнеса- Увеличьте эффективность, освободите в...",
    "caption": "📈 Автоматизация бизнеса- Увеличьте эффективность, освободите время! 🚀🔧 Зачем автоматизировать",
    "duration": "0:08"
  },
  {
    "id": "media_18",
    "type": "video",
    "src": "/content/DushanbeSoft/%F0%9F%93%A9%20%D0%AF%D0%BA%20%D0%BF%D0%B0%D0%B5%CC%88%D0%BC%20%E2%80%94%20%D2%B3%D0%B0%D0%B7%D0%BE%D1%80%D0%BE%D0%BD%20%D0%BC%D1%83%D1%88%D1%82%D0%B0%D1%80%D0%B8%CC%84.%D0%97%D1%83%D0%B4%D0%A1%D0%9C%D0%A1%20%E2%80%94%20%D1%80%D0%B0%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B0%D0%B8%20%D0%BE%D0%BC%D0%BC%D0%B0%D0%B2%D0%B8%D0%B8%20%D0%A1%D0%9C%D0%A1%20%D0%B1%D0%B0%D1%80%D0%BE%D0%B8%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%20%D0%B4%D0%B0%D1%80%20%D1%81%D0%B0%D1%80%D0%BE%D1%81%D0%B0%D1%80%D0%B8%20%D0%A2%D0%BE%D2%B7%D0%B8%D0%BA%D0%B8%D1%81%D1%82%D0%BE%D0%BD.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_18.jpg",
    "title": "📩 Як паём — ҳазорон муштарӣ.ЗудСМС — рассылкаи оммавии СМС б...",
    "caption": "📩 Як паём — ҳазорон муштарӣ.ЗудСМС — рассылкаи оммавии СМС барои бизнес дар саросари Тоҷикистон",
    "duration": "0:56"
  },
  {
    "id": "media_19",
    "type": "video",
    "src": "/content/DushanbeSoft/%F0%9F%94%8D%F0%9F%93%88%20SEO%20%D0%BE%D0%BF%D1%82%D0%B8%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%20%D0%BA%D0%BB%D1%8E%D1%87%20%D0%BA%20%D1%83%D1%81%D0%BF%D0%B5%D1%85%D1%83%20%D0%B2%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%D0%B5%21%D0%95%D1%81%D0%BB%D0%B8%20%D1%82%D1%8B%20%D0%B2%D0%B5%D0%B4%D0%B5%D1%88%D1%8C%20%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%20%D0%B8%D0%BB%D0%B8%20%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%20%D1%85%D0%BE%D1%87%D0%B5%D1%88%D1%8C%20%D0%BF%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%83.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_19.jpg",
    "title": "🔍📈 SEO оптимизация- ключ к успеху в интернете!Если ты ведешь б...",
    "caption": "🔍📈 SEO оптимизация- ключ к успеху в интернете!Если ты ведешь бизнес или просто хочешь продвину",
    "duration": "0:10"
  },
  {
    "id": "media_20",
    "type": "video",
    "src": "/content/DushanbeSoft/%F0%9F%9A%80%20%D0%9D%D0%B0%D1%88%D0%B0%20%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B0%20%E2%80%94%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%82%D1%8C%20%D1%83%D0%BD%D0%B8%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B8%20%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B%2C%20%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%B5%20%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D1%81%D1%82%D1%8C%D1%8E%20%D1%83%D0%B4%D0%BE%D0%B2%D0%BB%D0%B5%D1%82%D0%B2%D0%BE%D1%80.mp4",
    "thumb": "/content/DushanbeSoft/thumbnails/video_thumb_20.jpg",
    "title": "🚀 Наша задача — разработать уникальные и функциональные платфо...",
    "caption": "🚀 Наша задача — разработать уникальные и функциональные платформы, которые полностью удовлетвор",
    "duration": "0:14"
  },
  {
    "id": "media_21",
    "type": "image",
    "src": "/content/DushanbeSoft/%D0%9C%D1%83%D0%B2%D0%B0%D1%84%D1%84%D0%B0%D2%9B%D0%B8%D1%8F%D1%82%D0%B8%20%D0%BD%D0%B0%D0%B2%D0%B8%20%D0%B4%D0%B0%D1%81%D1%82%D0%B0%D0%B8%20Dushanbe-Soft%21%20%D0%9C%D0%BE%20%D0%B1%D0%B0%D1%80%D0%BE%D0%B8%20%D1%80%D0%B0%D1%81%D0%B8%D0%B4%D0%B0%D0%BD%20%D0%B1%D0%B0%20%D2%B3%D0%B0%D0%B4%D0%B0%D1%84%D2%B3%D0%BE%D0%B8%20%D0%B0%D1%81%D0%BB%D0%B8%D0%B8%20%D1%85%D1%83%D0%B4%20%D0%B7%D0%B0%D2%B3%D0%BC%D0%B0%D1%82%D2%B3%D0%BE%D0%B8%20%D1%88%D0%B0%D0%B1%D0%BE%D0%BD%D0%B0%D1%80.jpg",
    "thumb": "/content/DushanbeSoft/%D0%9C%D1%83%D0%B2%D0%B0%D1%84%D1%84%D0%B0%D2%9B%D0%B8%D1%8F%D1%82%D0%B8%20%D0%BD%D0%B0%D0%B2%D0%B8%20%D0%B4%D0%B0%D1%81%D1%82%D0%B0%D0%B8%20Dushanbe-Soft%21%20%D0%9C%D0%BE%20%D0%B1%D0%B0%D1%80%D0%BE%D0%B8%20%D1%80%D0%B0%D1%81%D0%B8%D0%B4%D0%B0%D0%BD%20%D0%B1%D0%B0%20%D2%B3%D0%B0%D0%B4%D0%B0%D1%84%D2%B3%D0%BE%D0%B8%20%D0%B0%D1%81%D0%BB%D0%B8%D0%B8%20%D1%85%D1%83%D0%B4%20%D0%B7%D0%B0%D2%B3%D0%BC%D0%B0%D1%82%D2%B3%D0%BE%D0%B8%20%D1%88%D0%B0%D0%B1%D0%BE%D0%BD%D0%B0%D1%80.jpg",
    "title": "Муваффақияти нави дастаи Dushanbe-Soft! Мо барои расидан ба ҳа...",
    "caption": "Муваффақияти нави дастаи Dushanbe-Soft! Мо барои расидан ба ҳадафҳои аслии худ заҳматҳои шабонар",
    "duration": null
  },
  {
    "id": "media_22",
    "type": "image",
    "src": "/content/DushanbeSoft/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0%20%D0%BA%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D0%B0%D0%B8%CC%86%D1%82%D0%B0%20%E2%80%94%20%D1%8D%D1%82%D0%BE%20%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5%2C%20%D0%BE%20%D1%87%D0%B5%D0%BC%20%D0%B7%D0%B0%D0%B4%D1%83%D0%BC%D1%8B%D0%B2%D0%B0%D1%8E%D1%82%D1%81%D1%8F%20%D0%B2%D0%BB%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C%D1%86%D1%8B%20%D0%BC%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%20%D0%B8%20.jpg",
    "thumb": "/content/DushanbeSoft/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0%20%D0%BA%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%81%D0%B0%D0%B8%CC%86%D1%82%D0%B0%20%E2%80%94%20%D1%8D%D1%82%D0%BE%20%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B5%2C%20%D0%BE%20%D1%87%D0%B5%D0%BC%20%D0%B7%D0%B0%D0%B4%D1%83%D0%BC%D1%8B%D0%B2%D0%B0%D1%8E%D1%82%D1%81%D1%8F%20%D0%B2%D0%BB%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C%D1%86%D1%8B%20%D0%BC%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE%20%D0%B8%20.jpg",
    "title": "Разработка корпоративного сайта — это практически первое, о ч...",
    "caption": "Разработка корпоративного сайта — это практически первое, о чем задумываются владельцы малого и",
    "duration": null
  },
  {
    "id": "media_23",
    "type": "image",
    "src": "/content/DushanbeSoft/%F0%9F%94%94%20%D0%9A%D0%B0%D0%B1%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5%20%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5%21%20%E2%9C%85%20%20%D0%92%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D1%8B%20%D1%87%D0%B5%D1%80%D0%B5%D0%B7%20POS-%D1%82%D0%B5%D1%80%D0%BC%D0%B8%D0%BD%D0%B0%D0%BB%20%E2%9C%85%20%20%D0%A3%D1%87%D0%B5%CC%88%D1%82%20%D0%B1%D0%B0%D0%B7%D1%8B%20%D0%B0%D0%B1%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2%20%E2%9C%85%20%20%D0%A3%D1%87%D0%B5%CC%88.jpg",
    "thumb": "/content/DushanbeSoft/%F0%9F%94%94%20%D0%9A%D0%B0%D0%B1%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5%20%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5%21%20%E2%9C%85%20%20%D0%92%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%BE%D0%BF%D0%BB%D0%B0%D1%82%D1%8B%20%D1%87%D0%B5%D1%80%D0%B5%D0%B7%20POS-%D1%82%D0%B5%D1%80%D0%BC%D0%B8%D0%BD%D0%B0%D0%BB%20%E2%9C%85%20%20%D0%A3%D1%87%D0%B5%CC%88%D1%82%20%D0%B1%D0%B0%D0%B7%D1%8B%20%D0%B0%D0%B1%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2%20%E2%9C%85%20%20%D0%A3%D1%87%D0%B5%CC%88.jpg",
    "title": "🔔 Кабельное телевидение! ✅  Возможности оплаты через POS-терми...",
    "caption": "🔔 Кабельное телевидение! ✅  Возможности оплаты через POS-терминал ✅  Учёт базы абонентов ✅  Учё",
    "duration": null
  }
];

export const featuredMediaItems: MediaItem[] = [
  mediaGalleryItems.find((i) => i.src.includes("TTL.TJ")) || mediaGalleryItems[6],
  mediaGalleryItems.find((i) => i.type === "image" && i.caption.includes("Муваффақияти")) || mediaGalleryItems[20],
  mediaGalleryItems.find((i) => i.caption.includes("Dushanbe-soft – это")) || mediaGalleryItems[2],
  mediaGalleryItems.find((i) => i.type === "image" && i.caption.includes("Кабельное")) || mediaGalleryItems[21],
  mediaGalleryItems.find((i) => i.caption.includes("SMS-шлюз")) || mediaGalleryItems[3],
  mediaGalleryItems.find((i) => i.caption.includes("RoyalBaBy")) || mediaGalleryItems[14],
];
