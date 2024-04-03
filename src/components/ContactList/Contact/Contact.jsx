import css from './Contact.module.css'
const Contact = ({ contact, onDelete}) => {
    const { name, number } = contact;
    return (
        <li className={css.items}>
            <div>
                <p>Name: {name}</p>
                <p>Number: {number}</p>
            </div>
            <button onClick={() => onDelete(contact.id)}>Delete</button>
        </li>
    );
};

export default Contact;