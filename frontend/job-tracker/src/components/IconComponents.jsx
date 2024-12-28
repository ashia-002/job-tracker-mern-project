// IconComponent.jsx
import React from 'react';

// Dynamically import all icons from the 'tableicon' folder
const icons = require.context('../assets/tableicon', false, /\.svg$/);

// Create an object to store each icon with its filename as the key
const iconList = icons.keys().reduce((icons, fileName) => {
  const iconName = fileName.replace('./', '').replace('.svg', ''); // Remove './' and '.svg' extensions
  icons[iconName] = icons(fileName); // Store the icon as a module
  return icons;
}, {});

// The IconComponent that will display the icon based on the name
const IconComponent = ({ iconName }) => {
  const Icon = iconList[iconName];  // Get the icon by name
  return Icon ? <img src={Icon} alt={iconName} className="icon" /> : null; // Display the icon
};

export default IconComponent;
