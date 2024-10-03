import romaContactPicture from '../../assets/pictures/roma_contact.jpg'
import dashaContactPicture from '../../assets/pictures/dasha_contact.jpg'
import phoneIcon from '../../assets/icons/phone.png'
import telegramIcon from '../../assets/icons/telegram.png'
import romaContactPicture_v1 from '../../assets/pictures/roma_contact_v1.jpg'
import ritaContactPicture from '../../assets/pictures/rita_contact.jpg'


const contactCards = [
    {
        name: "Координатор  Басин Илья",
        phone: "+7 921 425 39 70",
        img: romaContactPicture,
        telegramUrl: "//resolve?domain=echogold",
        telegramNick: "@echogold",
    },
    {
        name: "Координатор  Немцев Илья",
        phone: "+7 911 251 68 18",
        img: dashaContactPicture,
        telegramUrl: "//resolve?domain=ilayOki",
        telegramNick: "@ilayOki",
    },
    {
        name: "Немцева Маргарита",
        phone: "+7 921 442 57 27",
        img: ritaContactPicture,
        telegramUrl: "//resolve?domain=ttummi",
        telegramNick: "@ttummi",
    },
    {
        name: "Басин Роман",
        phone: "+7 921 762 50 37",
        img: romaContactPicture_v1,
        telegramUrl: "//resolve?domain=I_bet_youlie",
        telegramNick: "@I_bet_youlie",
    }
]

const contactJxs = contactCards.map((card) => {
    return (
        <div className="item" key={contactCards.indexOf(card).toString() + "_icon"}>
            <img src={card.img} />
            <div className="innerContent" >
                <h2>{card.name}</h2>
                <span>

                    <a className = "phoneLink" href={`tel:${card.phone}`} >
                        <img className="phoneIcon" src={phoneIcon} alt="Phone icon" /> {card.phone}
                    </a>
                    <a className = "phoneLink" href={`tg:${card.telegramUrl}`} >
                        <img className="phoneIcon" src={telegramIcon} alt="Telegram icon" /> {card.telegramNick}
                    </a>
                </span>
            </div>
        </div>
    )
})

export default function ContactCards() {
    return (<div className="flex-wrapper">{contactJxs}</div>)
}