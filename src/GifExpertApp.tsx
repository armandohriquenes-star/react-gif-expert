import { useState } from "react";
import { AddCategory, GridGifs } from "./componentes";



export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Pounch']);

  const onAddCategory = (newCategory: any) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  const deleteCategory = () => {
    setCategories(categories.slice(1));
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory newCategory={onAddCategory} />
      <button onClick={deleteCategory}>Delete</button>
      <ol>
        {
          categories.map(category => (
            <GridGifs key={category} category={category} />
          ))
        }
      </ol>
    </>

  );
}

