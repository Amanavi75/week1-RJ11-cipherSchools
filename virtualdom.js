//JSX, which stands for JavaScript and XML, is an extension of JavaScript that brings HTML-like syntax to a JavaScript environment. It was invented by the React team for use in React applications, but can be used to develop other applications — like Vue apps, for instance.

/*const subject = "World";
const header = (
  <header>
    <h1>Hello, {subject}!</h1>
  </header>
);*/


const subject = "World";
const header = React.createElement("header", null,
  React.createElement("h1", null, "Hello, ", subject, "!")
);

function AuthorCredit(props) {
    return (
      <figure>
        <img src={props.src} alt={props.alt} />
        <figcaption>{props.byline}</figcaption>
      </figure>
    );
  }