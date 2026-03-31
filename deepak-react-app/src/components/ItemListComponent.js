import React from "react";

// 1. Helper Component (Receives 'items' as a prop)
function ItemList({ items }) {
  return (
    <ol>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ol>
  );
}

// 2. The Main Component (Renamed to App to avoid conflict)
function App() {
  const items = [
    { id: 1, title: "First Item" },
    { id: 2, title: "Second Item" },
    { id: 3, title: "Third Item" },
  ];

  return (
    <>
      <h1>My List</h1>
      {/* Now calling the helper component correctly */}
      <ItemList items={items} />
    </>
  );
}

export default App;
