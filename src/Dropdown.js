import React from "react";

const Dropdown = ({ dropdownData }) => {
  const expandSubMenu = (e) => {
    e.stopPropagation();
    const subMenu = e.target.querySelector("ul");
    console.log(subMenu);
    if (!subMenu) return;

    if (subMenu.style.display === "none" || !subMenu.style.display) {
      subMenu.style.display = "block";
    } else {
      subMenu.style.display = "none";
    }
  };
  const renderSubMenu = (submenu) => {
    return (
      <ul className="submenu">
        {submenu.map((subItem) => (
          <li key={subItem.label} onClick={expandSubMenu}>
            {subItem.label}
            {subItem.submenu && renderSubMenu(subItem.submenu)}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div>
      <ul>
        {dropdownData.map((item) => (
          <li key={item.label} onClick={(e) => expandSubMenu(e)}>
            {item.label}
            {item.submenu && renderSubMenu(item.submenu)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
