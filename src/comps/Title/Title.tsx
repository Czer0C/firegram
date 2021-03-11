import React from 'react';
import './Title.css';

interface TitleProps {
  title?: string
  header?: string
  description?: string
}

const Title = ({title, header, description} : TitleProps) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      <h2>{header}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Title;