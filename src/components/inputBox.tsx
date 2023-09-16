import React from 'react';
export default function InputBox(props: {placeholder: string, onSubmit: Function}) {
  function onKeyDown(event: React.KeyboardEvent) {
    if(event.key === 'Enter') {
      props.onSubmit((event.target as HTMLInputElement).value);
    }
  } 
  return(
    <input onKeyDown={onKeyDown} className="m-2 h-7 rounded-full p-3 w-full" placeholder={props.placeholder} type="text"/>
  )
}
