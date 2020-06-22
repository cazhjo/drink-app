import React from 'react';
import '../styling/Title.css'

const Title = ({ text, textColor }) => <h1 style={{ color: textColor }}>{text}</h1>;

export default Title;