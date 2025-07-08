# QaGuru 🎓 AcademyBugs/Challenges Test Automation Project

![Playwright](https://img.shields.io/badge/Playwright-1.42.1-2EAD33?style=flat&logo=playwright)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat&logo=node.js)
![Allure](https://img.shields.io/badge/Allure_Report-2.24.0-ff69b4?style=flat&logo=allure)

Проект автоматизации тестирования для веб-приложения AcademyBugs и сервиса Challenges. Включает комплексные UI-тесты для проверки функциональности интернет-магазина и Api-тесты для проверки создания заданий в рамках учебного сервиса.

## 🚀 Особенности проекта

- **Полное покрытие ключевых сценариев**:
- e2e
  - Регистрация и авторизация
  - Работа с корзиной
  - Поиск товаров
  - Управление профилем
- Api
  - Создание заданий
- **Поддержка нескольких браузеров** (Chromium, Firefox, WebKit)
- **Продвинутая система архитектуры** с использованием Page Object, паттерна "Фасад", перепеси фикстур, генератора данных, контроллеров
- **Allure-отчеты** с подробными шагами выполнения, описаие ошибок и скриншотами
- **CiCD** запуск автотестов github CI на каждый коммит пул-реквест, публикация отчета
- **Уведомления** отчеты о прохождении тестов отправляются в ТГ

## 🛠 Технологический стек

| Компонент        | Технология                                 |
|------------------|--------------------------------------------|
| Автоматизация    | Playwright 1.42.1                          |
| Язык             | JavaScript (ES6+)                          |
| Среда выполнения | Node.js 18+                                |
| Тест-раннер      | Playwright Test Runner                     |
| Отчетность       | Allure Playwright 2.24.0                   |
| CI/CD            | GitHub Actions                             |
| Контейнеризация  | Docker (опционально)                       |

## ⚙️ Требования к окружению

- Node.js 18 или выше
- npm 9 или выше
- Браузеры:
  - Chromium
  - Firefox
  - WebKit (Safari)

## 🚀 Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/YuhnovRoman/QaGuru_academybugs-diplom.git
cd QaGuru_academybugs-diplom

# Установить зависимости
npm install

# Запуск всех тестов в headless режиме
npx t

# Запуск тестов с UI (headed mode)
npx playwright test --headed
```

## 📧 Контакты
- Автор: Юхнов Роман
- Email: мой email
- Telegram: мой тг
