# Donuts Shopify Theme

Тема для Shopify магазина пончиков.

## Содержание

- [Установка](#installation)
- [Разработка](#development)
- [Структура](#structure)
- [Отладка](#debugging)
- [Деплой](#deployment)
- [Лучшие практики](#best-practices)
- [Ресурсы](#resources)

## Installation

1. **Подготовка окружения**

   ```bash
   # Проверяем наличие Node.js и npm
   node --version  # Должен быть 16+
   npm --version   # Должен быть 8+

   # Устанавливаем Shopify CLI
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Настройка проекта**

   ```bash
   # Клонируем репозиторий
   git clone https://github.com/your-username/donuts-shopify.git
   cd donuts-shopify

   # Копируем .env.example в .env
   cp .env.example .env
   ```

3. **Настройка .env файла**

   ```env
   SHOPIFY_STORE_URL=your-store.myshopify.com
   SHOPIFY_THEME_ID=your_theme_id  # Опционально, если хотите работать с существующей темой
   SHOPIFY_PASSWORD=your_storefront_api_password
   ```

## Development

1. **Первый запуск**

   ```bash
   # Авторизуемся в магазине
   shopify auth login --store=your-store.myshopify.com

   # Запускаем сервер разработки
   shopify theme dev
   ```

2. **Ежедневная разработка**

   ```bash
   # Запуск сервера разработки с горячей перезагрузкой
   shopify theme dev --theme-editor-sync

   # Или с дополнительными опциями
   shopify theme dev --theme-editor-sync --open --host=0.0.0.0
   ```

3. **Работа с файлами**

   ```bash
   # Получить изменения с сервера
   shopify theme pull

   # Отправить изменения на сервер
   shopify theme push

   # Отправить конкретный файл
   shopify theme push -f sections/header.liquid

   # Просмотр изменений перед отправкой
   shopify theme diff
   ```

4. **Управление темами**

   ```bash
   # Просмотр списка тем
   shopify theme list

   # Информация о текущей теме
   shopify theme info
   ```

## Structure

theme/
├── assets/ # CSS, JS, изображения
├── config/ # Настройки темы
├── layout/ # Основные шаблоны
├── locales/ # Переводы
├── sections/ # Модульные секции
├── snippets/ # Компоненты
└── templates/ # Шаблоны страниц

## Debugging

1. **Liquid отладка**

   ```liquid
   {% comment %}Отладочная информация{% endcomment %}

   {% if settings.debug_mode %}
     <div class="debug">
       <!-- Вывод переменной в JSON -->
       <pre>{{ product | json }}</pre>

       <!-- Вывод всех доступных переменных -->
       <pre>{{ all_products | json }}</pre>

       <!-- Информация о теме -->
       <div>Theme ID: {{ theme.id }}</div>
       <div>Theme Name: {{ theme.name }}</div>

       <!-- Системная информация -->
       {{ content_for_header }}
     </div>
   {% endif %}
   ```

## Deployment

1. **Подготовка к публикации**

   - Минимизируйте CSS/JS файлы

     ```bash
     # Установка инструментов
     npm install -g uglify-js clean-css-cli

     # Минификация JavaScript
     uglifyjs assets/theme.js -o assets/theme.min.js

     # Минификация CSS
     cleancss -o assets/theme.min.css assets/theme.css
     ```

   - Оптимизируйте изображения

     ```bash
     # Установка sharp для оптимизации изображений
     npm install -g sharp-cli

     # Оптимизация изображений
     sharp -i ./assets/images/* -o ./assets/images/optimized/
     ```

   - Проверьте SEO-настройки
     - Наличие meta-тегов
     - Корректность заголовков
     - Оптимизация изображений
     - Скорость загрузки

2. **Публикация**

   ```bash
   # Проверка перед публикацией
   shopify theme check

   # Публикация всей темы
   shopify theme push

   # Публикация с игнорированием файлов
   shopify theme push --ignore=config/settings_data.json,assets/theme.js

   # Публикация с указанием окружения
   shopify theme push --env=production
   ```

## Best Practices

1. **Организация кода**

   - Используйте осмысленные имена файлов и переменных
   - Комментируйте сложные участки кода
   - Следуйте принципу DRY (Don't Repeat Yourself)
   - Разделяйте логику на компоненты

2. **Производительность**

   ```liquid
   {% comment %}Оптимизация изображений{% endcomment %}
   <img
     src="{{ product.featured_image | img_url: '300x300' }}"
     srcset="{{ product.featured_image | img_url: '300x300' }} 300w,
             {{ product.featured_image | img_url: '600x600' }} 600w,
             {{ product.featured_image | img_url: '1200x1200' }} 1200w"
     sizes="(max-width: 600px) 300px,
            (max-width: 1200px) 600px,
            1200px"
     loading="lazy"
     alt="{{ product.featured_image.alt | escape }}"
   >
   ```

3. **SEO и доступность**

   ```liquid
   {% comment %}Семантическая разметка{% endcomment %}
   <article itemscope itemtype="http://schema.org/Product">
     <h1 itemprop="name">{{ product.title }}</h1>
     <meta itemprop="description" content="{{ product.description | strip_html | escape }}">
     <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
       <meta itemprop="price" content="{{ product.price | money_without_currency }}">
       <meta itemprop="priceCurrency" content="{{ shop.currency }}">
     </div>
   </article>
   ```

4. **Безопасность**

   ```liquid
   {% comment %}Безопасный вывод данных{% endcomment %}
   {{ page_title | escape }}
   {{ product.description | strip_html | escape }}

   {% comment %}Защита от XSS{% endcomment %}
   <script>
     const productData = {{ product | json | escape }};
   </script>
   ```

## Resources

- [Официальная документация Shopify](https://shopify.dev/themes)
- [Liquid Documentation](https://shopify.github.io/liquid/)
- [Shopify Theme Kit](https://shopify.github.io/themekit/)
- [Shopify Cheat Sheet](https://www.shopify.com/partners/shopify-cheat-sheet)
- [Shopify Theme Development](https://www.shopify.com/partners/blog/topics/theme-development)
- [Shopify Dev YouTube](https://www.youtube.com/c/ShopifyDevs)

## Community

- [Shopify Partners Community](https://www.shopify.com/partners/community)
- [Shopify Forums](https://community.shopify.com/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/shopify)
- [Reddit r/shopify](https://www.reddit.com/r/shopify/)
- [Discord Shopify Developers](https://discord.gg/shopifydevs)

## License

Этот проект лицензирован под [MIT License](LICENSE).


## 🔄 Обновления

Последнее обновление: Февраль 2025
