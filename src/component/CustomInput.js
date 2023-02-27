import React from 'react'

export default function CustomInput(props) {
    const {type,name,placeholder,className} =props;
  return (
    <>
    <div>
    <input type={type} placeholder={placeholder}
    name={name}
     className={`'form-controle' ${className} `}/>
    </div>
    </>
  )
}
