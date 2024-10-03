import yandexMapIcon from '../../assets/icons/yandex_map.png'

const iframeUrl: string = "https://yandex.ru/map-widget/v1/?um=constructor%3A000cbceab7d79732d2fb0d3ac6c9c4e6784aeeebbc0895bb734612ab39e3d6e1&amp;source=constructor"

export default function YandexMap() {
    return (
        <div className='map'>
            <div className="flex-container">
                <a href="https://yandex.ru/maps/-/CDvE5X-x" className="map-link">
                    <img className="phoneIcon" src={yandexMapIcon} alt="map icon" />ЗАГС, Стародеревенская улица, 5, Санкт-Петербург
                </a>
                <a href="https://yandex.ru/maps/-/CDvEBAlO" className="map-link">
                    <img className="phoneIcon" src={yandexMapIcon} alt="map icon" />Лофт, Газовая улица, 10Б, Санкт-Петербург
                </a>
            </div>
            <iframe className="yandexMap" src={iframeUrl}
                width="600"
                height="400"
                frameBorder="0">
            </iframe>
        </div>
    )
}