// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ContactForm from "./components/ContactForm/ContactForm";
// import { Container } from "./components/Container/Container";
// import { Section } from "./components/Section/Section";
// import ContactList from "./components/ContactList/ContactList";
// import SearchBox from "./components/SearchBox/SearchBox";
// import { Loader } from "./components/Loader/Loader";
// import Error from "./components/Error/Error";
// import { fetchContacts } from "./redux/contactsOps";
// import { selectError, selectLoading } from "./redux/contactsSlice";


// export default function App() {
//   const dispatch = useDispatch();
//   const loading = useSelector(selectLoading);
//   const error = useSelector(selectError);
 

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Section>
//       <Container>
//         <div>
//           <h1>Phonebook</h1>
//           <ContactForm />
//           <SearchBox />
//           {loading && <Loader>Loading in progress, please wait</Loader>}
//           {error && <Error>Something went wrong</Error>}
//           <ContactList />
//         </div>
//       </Container>
//     </Section>
//   );
// }

import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import RestrictedRoute from "./RestrictedRoute"
import PrivateRoute from "./PrivatRoute"
import { Container } from "./components/Container/Container";
import { Section } from "./components/Section/Section";
// import RestrictedRoute from "./RestrictedRoute.jsx";
// import PrivateRoute from "./PrivatRoute.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
// const ProfilePage = lazy(() => import("../pages/ProfilePage/ProfilePage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <strong>Refreshing user...</strong>
  ) : (
    <Section>
      <Container>
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactsPage />} />}
          />
          {/* <Route
            path="/profile"
            element={<PrivateRoute component={<ProfilePage />} />}
          /> */}
        </Routes>
      </Suspense>
    </Layout>
    </Container>
    </Section>
  );
}