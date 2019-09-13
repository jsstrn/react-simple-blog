function Post(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Written by {props.author}</p>
      <p>{props.date}</p>
    </div>
  );
}

function Blog() {
  return (
    <div>
      <h1>My Blog Post</h1>
      <section>
        <Post title="Title A" author="Alice" date="10 Sep" />
        <Post title="Title B" author="Bob" date="11 Sep" />
        <Post title="Title C" author="Charlie" date="12 Sep" />
      </section>
    </div>
  );
}

const app = document.querySelector("#app");
ReactDOM.render(<Blog />, app);
