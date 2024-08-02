import { useState } from "react";
import data from "./Data";  // Make sure your data is an array


const Index = () => {
  const [selected, setSelected] = useState(null);

  // Toggle the selected state based on item id
  const handleToggle = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div className="title" onClick={() => handleToggle(dataItem.id)}>
                <h3>{dataItem.title}</h3>
                <span>{selected === dataItem.id ? "-" : "+"}</span>
              </div>
              {selected === dataItem.id && <div className="content">{dataItem.body}</div>}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Index;
