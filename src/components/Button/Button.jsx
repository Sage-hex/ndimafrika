import React from 'react'

const Button = ({children, onClick, icon:icon, className = ''}) => {
  return (
    <button
    onClick={onClick}
    className={`bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition ${className}`}
    
    >
        {icon && <icon className='w-10 text-6xl text-white h-5 text-4xl'/>}
        {children}
    </button>
  );
};

export default Button
