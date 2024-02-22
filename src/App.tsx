import Parser from "tree-sitter";
import Python from "tree-sitter-python";

import "./App.css";

function App() {
  const tree = () => {
    const parser = new Parser();
    parser.setLanguage(Python);
    const sourceCode = `
      def hello():
        print("Hello, World!")
    `;
    const tree = parser.parse(sourceCode);
    return tree.rootNode.text;
  };

  return (
    <>
      <div>
        <h1>Tree-sitter</h1>
        <p>{tree()}</p>
      </div>
    </>
  );
}

export default App;
