import "./App.css";
import ViewComponent from "./Components/ViewComponent";

function App() {
  // styles object
  const styles = {
    appStyles: {
      textAlign: "center",
    },
    appContainer: {
      backgroundColor: "#282c34",
      color: "#ffff",
      minHeight: "100vh",
      justifyContent: "center",
    },
  };
  return (
    <div style={styles.appStyles}>
      <div style={styles.appContainer}>
        <ViewComponent />
      </div>
    </div>
  );
}

export default App;
