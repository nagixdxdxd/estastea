# EstasTea

Двуязычный сайт премиального тайваньского чая (RU / EN) на **Next.js 15**.

## Локально

```bash
npm install
npm run dev
```

Откройте http://localhost:3000

## Сборка

```bash
npm run build
npm start
```

## Структура

- `app/` — страницы RU (`/`) и EN (`/en/...`)
- `components/` — UI-компоненты
- `lib/i18n.ts` — тексты интерфейса
- `lib/products.ts` — каталог (19 позиций)
- `public/images/` — фото бренда, сцены, товары

## Деплой

Проект привязан к Vercel: **https://estastea.vercel.app**

```bash
vercel --prod
```

## Контакты на сайте

- Email: info@estastea.com
- WhatsApp: +886 900 783 530
