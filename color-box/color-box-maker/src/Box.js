
function Box({
	id,
    color = 'blue', 
	width = 30, 
	height = 50,
	remove}) {
    const handleRemove = (e) => {
        remove(e.target.parentElement.id)
    }

  return (
	<div 
		id={id}
		style={{
			backgroundColor: `${color}`,
			width: `${width}px`,
			height: `${height}px`
		}}>
		<button onClick={(e) => handleRemove(e)}>X</button>
	</div>
  )
}

export default Box;