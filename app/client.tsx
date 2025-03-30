import "./styles.css";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <main>
      <h1>🎈 Welcome to PartyKit!</h1>
      <p>
        This is the React starter. (
        <a href="https://github.com/partykit/templates/tree/main/templates/react">
          README on GitHub.
        </a>
        )
      </p>
      <p>
        <i>This counter is multiplayer. Try it with multiple browser tabs.</i>
      </p>
    </main>
  );
}

createRoot(document.getElementById("app")!).render(<App />);
