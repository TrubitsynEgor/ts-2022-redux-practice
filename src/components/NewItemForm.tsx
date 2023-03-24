import React, { useRef } from 'react'

interface INewItemForm {
	handleClick: (text: string) => void
	placeholder: string
}

const NewItemForm = ({ handleClick, placeholder }: INewItemForm) => {
	const inputRef = useRef<HTMLInputElement | null>(null)

	const onClick = () => {
		if (inputRef.current) {
			handleClick(inputRef.current.value)
			inputRef.current.value = ''
		}
	}
	return (
		<div>
			<input type="text" placeholder={placeholder} ref={inputRef} />
			<button onClick={onClick}>Add todo</button>
		</div>
	)
}

export default NewItemForm