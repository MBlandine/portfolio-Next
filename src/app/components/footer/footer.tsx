import React from 'react';

// Define the props interface: what the Footer component expects to receive
interface FooterProps {
  personalInfoData: {
    name: string;
  };
}

// Declare the Footer component with props typed by FooterProps
const Footer: React.FC<FooterProps> = ({ personalInfoData }) => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 {personalInfoData.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
