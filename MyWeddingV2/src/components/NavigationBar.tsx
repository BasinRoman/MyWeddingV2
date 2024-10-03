import { NavLink } from 'react-router-dom'
import contactIcon from '../assets/icons/contacts.png'
import inviteLetterIcon from '../assets/icons/invite_letter.png'
import photosIcon from '../assets/icons/photos.png'
import weddingInfoIcon from '../assets/icons/wedding_info.png'
import FAQIcon from '../assets/icons/FAQ.png'


const NavigationBarElements = ["Invite", "Ceremony_plan", "Contact", "FAQ", "Photos"];

const NavigationBarTranslations: { [key: string]: string } = {

    "Invite": "Пригласительное письмо",
    "Ceremony_plan": "План свадьбы",
    "Contact": "Контакты",
    "FAQ": "Ответы на вопросы",
    "Photos": "Фотографии",
}

const NavigationBarIconMap: { [key: string]: string } = {

    "Invite": inviteLetterIcon,
    "Ceremony_plan": weddingInfoIcon,
    "Contact": contactIcon,
    "FAQ": FAQIcon,
    "Photos": photosIcon,
}

export default function NavigationBar() {
    return (
        <div className="NavigationBar">
            {
                NavigationBarElements.map((element) =>
                    <NavLink
                        to={element}
                        id={element}
                        key={element}
                        className={"NavigationBarElementNavLink"}>
                        <img src={NavigationBarIconMap[element]}
                            alt={NavigationBarIconMap[element]}
                            className="navBarItemIcon" />
                        {NavigationBarTranslations[element]}
                    </NavLink>
                )
            }
        </div>
    )
}