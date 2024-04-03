import css from './ContactList.module.css'
import Contact from "./Contact/Contact.jsx";


const ContactList = ({ data, onDelete}) => {
    return (
        <ul className={css}>
            {data.map(contact => (
                <Contact key={contact.id} contact={contact} onDelete={onDelete}/>
            ))}
        </ul>
    );
};

export default ContactList;