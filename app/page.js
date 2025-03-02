import Item from "./(components)/Item";
export default function Home() {
  return (
    <div className="bg-slate-700 p-4 lg:grid grid-cols-2 xl:grid-cols-4">
      <Item />
      <Item />
      <Item />
      <Item />
      <h1>This is the Home Page... It is updating... VS Code Layout is different. I feel like something is missing</h1>
      <div className = "flex-grow"></div>
      
    </div>
  );
}
