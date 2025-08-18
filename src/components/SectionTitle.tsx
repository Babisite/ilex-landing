import React from 'react';

interface SectionTitleProps {
  children: React.ReactElement;
  align?: 'left' | 'center' | 'right';
  gradient?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, align = 'center', gradient = true }) => {
  const gradientClass = gradient
    ? 'bg-[#FFA500]  bg-clip-text text-transparent'
    : '';
  const alignClass =
    align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';
  return React.cloneElement(children, {
    className:
      (children.props.className || '') +
      ` text-3xl lg:text-5xl lg:leading-tight font-extrabold ${gradientClass} ${alignClass} animate-fade-in`
  });
};

export default SectionTitle;