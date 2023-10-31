const App = () => {
  return (
    <div className="app">
    <section className="side-bar">
    <button>+ New chat</button>
      <ul className="history">
        <li>fdfdfdf</li>
      </ul>
      <nav>
        Made by Ian Thai Smith
      </nav>
    </section>
      <section className="main">
        <h1>i.t.s. GPT</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input/>
            <div id="submit">👉</div>
          </div>
          <p className="info">ChatGPT is an AI-powered language model developed by OpenAI, capable of generating human-like text based on context and past conversations.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
