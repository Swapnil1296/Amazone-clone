import React from 'react'
import UnopDropdown from "unop-react-dropdown";
const Dropdowns = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <UnopDropdown trigger={<button>click</button>}>
        <ul
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "10px 5px 20px #f1efef, -10px -5px 20px #f1efef",
            boxSizing: "border-box",
            padding: "30px",
            width: "300px",
          }}
        >
          <li>The styling does not come with the library</li>
        </ul>
      </UnopDropdown>
    </div>
  );
}

export default Dropdowns
