
import { useState } from "react";

interface Props {
  newCategory: any;
}

export const AddCategory = ({ newCategory }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const onNewChange = (event: any) => {
    setInputValue(event.target.value);

  };
  const onSubmit = (event: any) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    newCategory(inputValue.trim());
    setInputValue('');
  };
  return (
    <form onSubmit={onSubmit} >
      <input
        type="text"
        placeholder="Gifs"
        value={inputValue}
        onChange={onNewChange}
      />
    </form>
  );
};
