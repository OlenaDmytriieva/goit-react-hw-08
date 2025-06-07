import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import { Container } from "./components/Container/Container";
import { Section } from "./components/Section/Section";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { Loader } from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/contactsSlice";


export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          {loading && <Loader>Loading in progress, please wait</Loader>}
          {error && <Error>Something went wrong</Error>}
          <ContactList />
        </div>
      </Container>
    </Section>
  );
}
