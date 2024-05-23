import styled from "styled-components";
import { useState } from "react";

const FooterBlock = styled.div`
  margin-top: 80px;
  height: 90px;
  color: white;
  text-align: center;
`;

const AnimatedButton = styled.button`
  height: 30px;
  width: 30px;
  font-size: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transform: scale(${props => props.scale || 1});
  transition: transform 300ms ease;
`;

const Footer = () => {
  const [scale, setScale] = useState(1);

  const handleClick = () => {
    setScale(2); 
    setTimeout(() => setScale(1), 300); 
  };

  return (
    <FooterBlock>
      ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨
      ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨
      <br />
      주원이가 잘했다고 생각하면 눌러주세요 👉🏻
      <AnimatedButton onClick={handleClick} scale={scale}>💗</AnimatedButton>
    </FooterBlock>
  );
};

export default Footer;
