import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import * as React from "react";
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from "yet-another-react-lightbox/plugins";

import Images from "./Images";
import leftArrow from "../../assets/pictures/left-arrow_64798.png";
import rightArrow from "../../assets/pictures/right-arrow_64798.png";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useSlides } from "./ImageData"; // Import the useSlides hook

const ITEMS_PER_PAGE = 12; // Количество изображений на странице

export default function Photos() {
  const [index, setIndex] = React.useState<number>(-1);
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  // Получаем слайды через хук
  const slides = useSlides(); // Используем хук для получения слайдов

  // Определяем индекс первого и последнего элемента на текущей странице
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Отображаем только изображения на текущей странице
  const currentSlides = slides.slice(startIndex, endIndex);

  // Рассчитываем общее количество страниц
  const totalPages = Math.ceil(slides.length / ITEMS_PER_PAGE);

  // Функция для изменения страницы
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="photosContainer">
      {/* Элементы управления пагинацией */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            backgroundColor: 'rgba(240, 240, 240, 0.5)', // слегка прозрачный фон
            marginRight: '5px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            padding: '5px',
          }}
        >
          <img src={leftArrow} alt="Предыдущая" style={{ width: '20px', height: '20px' }} />
        </button>
        <span
          style={{
            backgroundColor: 'rgba(240, 240, 240, 0.5)', // слегка прозрачный фон
            padding: '5px',
            borderRadius: '5px',
          }}
        >
          Страница {currentPage} из {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            backgroundColor: 'rgba(240, 240, 240, 0.5)', // слегка прозрачный фон
            marginLeft: '5px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            padding: '5px',
          }}
        >
          <img src={rightArrow} alt="Следующая" style={{ width: '20px', height: '20px' }} />
        </button>
      </div>

      <div
        style={{
          backgroundColor: 'rgba(240, 240, 240, 0.5)', // слегка прозрачный фон
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        P.S. по этой{' '}
        <a
          href="https://drive.google.com/drive/folders/1ow_powRR-5EZbt3JfdxiYr64nQIigunh?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'rgba(0, 123, 255, 0.9)', // слегка прозрачный цвет ссылки
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          ссылке
        </a>{' '}
        можно скачать любую фотку в исходном высоком качестве.
      </div>



      <Images
        data={currentSlides}
        onClick={(currentIndex) => setIndex(startIndex + currentIndex)}
      />

      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: "end",
        }}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides} // Указываем только текущие слайды
      />
    </div>
  );
}
