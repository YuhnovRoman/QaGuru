# QaGuru 🎓 AcademyBugs/Challenges Test Automation Project

![Playwright](https://img.shields.io/badge/Playwright-1.53.2-2EAD33?style=flat&logo=playwright)
![Allure](https://img.shields.io/badge/Allure_Report-2.24.0-ff69b4?style=flat&logo=allure)

Проект автоматизации тестирования для веб-приложения AcademyBugs и сервиса Challenges. Включает комплексные UI-тесты для проверки функциональности по поиску багов и Api-тесты для проверки создания заданий в рамках учебного сервиса.

## 🚀 Особенности проекта

- **Проверки ключевых сценариев**:
- UI
  - Авторизация
  - Работа с корзиной
  - Сортировка товаров
- API
  - Создание заданий
- **Поддержка нескольких браузеров:** (Chromium, Firefox, WebKit)
- **Продвинутая система архитектуры:** с использованием Page Object, паттерна "Фасад", фикстур, генератора данных, контроллеров
- **Allure-отчеты:** с подробными шагами выполнения, описание ошибок и скриншотами
- **Allure TestOps:** https://allure.autotests.cloud/project/4828/dashboards
- **CiCD:** запуск автотестов github CI и [Jenkins](https://jenkins.autotests.cloud/job/QaGuru_Yukhnov_diplom/), публикация отчета
- **Уведомления:** отчеты о прохождении тестов отправляются в ТГ

## 🛠 Технологический стек

| Компонент        | Технология                                 |
|------------------|--------------------------------------------|
| Автоматизация    | Playwright 1.53.2                          |
| Язык             | JavaScript (ES6+)                          |
| Среда выполнения | Node.js 22+                                |
| Тест-раннер      | Playwright Test Runner                     |
| Отчетность       | Allure Playwright 3.3.0                    |
| CI/CD            | GitHub Actions/Jenkins                     |

## ⚙️ Требования к окружению

- Node.js 22 или выше
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
npm i

# Установить PW
npm init playwright@latest

# Запуск всех тестов
npm t

# Генерация отчетов
npx allure generate allure-results -o allure-report
```

## 📧 Контакты
- Автор: Юхнов Роман
