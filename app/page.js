import Item from "./(components)/Item";
const pantry = async() =>{
  try{
      const res = await fetch("http://localhost:3000/api/Pantry",{
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      return data;
  }
  catch(error){
    console.log("failed to fetch pantry Items", error);
  }
}


const Home = async() => {
  const pantryItems = await pantry();
  return (
    <div>
      {pantryItems && 
        <div className="bg-slate-800 p-4 lg:grid grid-cols-2 xl:grid-cols-4">
            {pantryItems.map((items, _index) => (
                <Item 
                    id={_index}
                    key={_index}
                    pantry={items}
                />
              ))}
      </div>
      }
    </div>
  );
}

export default Home;