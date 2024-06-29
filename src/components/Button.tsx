import { FC } from "react";

interface IButtonProps{
    onClick:()=>void;
    title:string;
}

const Button:FC<IButtonProps> = ({onClick,title}) => {
  return (
    <button className='bg-red-500 p-4 rounded cursor-pointer' onClick={onClick}>{title}</button>
  )
}

export default Button
