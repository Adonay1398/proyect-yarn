
import { useState } from 'react';
import{AddCategory,GifGrid} from './components';

export const ProyectoGif = () => {
  const [categories, setCategories] = useState(["Luis peña"]);
  
  const onAddCategory =(newCategory) =>{
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
    <h1>proyecto gif</h1>
    
    
    <addCategory onNewCategory={(value) => onAddCategory(value)}/>
      {categories.map((category) => (
        <GifGrid key={category} category={category}/>
      ))}
    </>
    );
  };
    
   

