import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { useSelector } from 'react-redux';
import { getVisibleContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);

  return (
    <ul className={style.ContactList}>
      {contacts.map((contact) => (
        <li className={style.contactItem} key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;