import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
const Main = () => (
  <main>
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your email address to receive news</p>

    <form>
      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="first Name"
      />
      <input
        type="text"
        name="lastname"
        id="lastname"
        placeholder="last Name"
      />
      <input type="email" name="email" id="email" placeholder="email" />

        <button type="submit" className="subscribe">
          Subscribe
        </button>
     
    </form>
  </main>
);

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


