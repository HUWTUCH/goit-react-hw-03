import { useState} from 'react'
// import './App.css'
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import UserData from "../../ContactData/ContactData.json"

function App() {
    const [contacts, setContacts] = useState(UserData);
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const addContacts = (newContacts) => {
        setContacts((prevContacts)=>{
            return [...prevContacts, newContacts];
        })
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    const deleteContact = (contactId) => {
        setContacts(prevContact => {
            return prevContact.filter((contacts)=> contacts.id !== contactId)
        })
    }

    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm onAdd={addContacts}/>
            <SearchBox value={filter} onFilter={handleFilterChange} />
            <ContactList data={filteredContacts} onDelete={deleteContact}/>
        </>
    );
}

export default App;
