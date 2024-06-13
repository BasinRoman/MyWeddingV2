export default function Сontact() {  
    return (
        <div className="contact-content">
            <div className="flex-wrapper">
                <div className="item">
                    <img src="./src/pictures/roma_contact.jpg" />
                    <div className="innerContent">
                        <h2>Рома</h2>
                        <h4>+7 921 762 50 37</h4>
                    </div>
                </div>
                <div className="item">
                    <img src="./src/pictures/rita_contact.jpg" />
                    <div className="innerContent">
                        <h2>Рита</h2>
                        <h4>+7 921 762 50 37</h4>
                    </div>
                </div>
                <div className="item">
                    <img src="./src/pictures/dasha_contact.jpg" />
                    <div className="innerContent">
                        <h2>Даша</h2>
                        <h4>+7 921 762 50 37</h4>
                    </div>
                </div>
            </div>
            <div id="map">
                <iframe className="YandexMap" src="https://yandex.ru/map-widget/v1/?um=constructor%3A000cbceab7d79732d2fb0d3ac6c9c4e6784aeeebbc0895bb734612ab39e3d6e1&amp;source=constructor"
                    width="600"
                    height="400"
                    frameBorder="0">
                </iframe>
            </div>
        </div>
    );
}