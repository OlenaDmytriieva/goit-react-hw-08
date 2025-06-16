import PageTitle from "../../components/PageTitle/PageTitle";

export default function HomePage() {
  return (
    <div>
      <PageTitle>
        Welcome to Contact list application! {" "}
        <span role="img" aria-label="Greeting icon">
          ☎️
        </span>
      </PageTitle>
      <p>
        Create and find all your contacts with ease.
      </p>
    </div>
  );
}