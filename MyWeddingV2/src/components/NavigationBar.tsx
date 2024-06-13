import { NavLink } from 'react-router-dom'


const NavigationBarElements = ["Invite", "Ceremony_plan", "Contact", "Photos"];

const NavigationBarTranslations: { [key: string]: string } = {

    "Invite": "Пригласительное письмо",
    "Ceremony_plan": "План свадьбы",
    "Contact": "Контакты",
    "Photos": "Фотографии",
}

const NavigationBarIconMap: { [key: string]: string } = {

    "Invite": "./src/icons/invite_letter.png",
    "Ceremony_plan": "./src/icons/wedding_info.png",
    "Contact": "./src/icons/contacts.png",
    "Photos": "./src/icons/photos.png",
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