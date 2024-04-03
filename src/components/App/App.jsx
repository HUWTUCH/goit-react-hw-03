import {useEffect, useState} from 'react'
// import './App.css'
import ContactForm from "../ContactForm/ContactForm.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import UserData from "../../ContactData/ContactData.json"

function App() {
    const [contacts, setContacts] = useState(()=> {
        const storedContacts = JSON.parse(localStorage.getItem('contacts'))
        console.log('Contacts loaded from localStorage:', storedContacts);
        return storedContacts || UserData
    });
    const [filter, setFilter] = useState('');

    // useEffect(() => {
    //     const storedContacts = JSON.parse(localStorage.getItem('contacts'))
    //     if (storedContacts) {
    //         setContacts(storedContacts)
    //     }
    //     console.log('Contacts loaded from localStorage:', storedContacts);
    // }, []);
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
        console.log('Contacts saved to localStorage:', contacts);
    }, [contacts]);
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
