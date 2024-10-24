import * as React from "react";

// Определение интерфейса для слайда
interface Slide {
  src: string;
  title: string;
  description: string;
}

// Замените на ваш идентификатор папки
const folderId = '1ow_powRR-5EZbt3JfdxiYr64nQIigunh';

// Функция для получения ключа API из файла конфигурации
async function loadApiKey(): Promise<string> {
  const response = await fetch('./config.json');

  const config = await response.json();

  return config.apiKey;
}

// Функция для получения слайдов из Google Drive
async function fetchSlidesFromDrive(apiKey: string): Promise<Slide[]> {
  // Загружаем клиентскую библиотеку Google API
  await new Promise<void>((resolve, reject) => {
    gapi.load('client', {
      callback: resolve,
      onerror: reject,
    });
  });

  // Настраиваем Google API клиент
  await gapi.client.init({
    apiKey: apiKey,
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
  });

  // Запрашиваем файлы из Google Drive
  const response = await gapi.client.drive.files.list({
    'q': `'${folderId}' in parents and mimeType contains 'image/'`,
    'pageSize': 1000,
    'fields': "nextPageToken, files(id, name)"
  });

  // Формируем массив слайдов
  const files = response.result.files;
  if (files && files.length > 0) {
    // Сортируем файлы по числу в конце имени
    files.sort((a, b) => {
      const numA = parseInt(a.name?.match(/\d+(?=\.\w+$)/)?.[0] || '0', 10);
      const numB = parseInt(b.name?.match(/\d+(?=\.\w+$)/)?.[0] || '0', 10);
      return numA - numB;
    });

    return files.map(file => ({
      src: `https://lh3.googleusercontent.com/d/${file.id}`,
      title: file.name,
      description: '',
    })) as Slide[];
  } else {
    console.log('Нет доступных файлов в указанной папке.');
    return [];
  }
}

// Создаем хук для загрузки и отображения слайдов
export function useSlides() {
  const [slides, setSlides] = React.useState<Slide[]>([]);

  React.useEffect(() => {
    // Функция для асинхронного получения слайдов
    async function loadSlides() {
      try {
        const apiKey = await loadApiKey();
        const driveSlides = await fetchSlidesFromDrive(apiKey);
        setSlides(driveSlides);
      } catch (error) {
        console.error('Ошибка при загрузке слайдов:', error);
      }
    }

    loadSlides(); // Вызываем функцию
  }, []);

  return slides;
}
