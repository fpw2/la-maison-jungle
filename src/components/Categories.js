import '../styles/Categories.css'

function Categories({ categories, activeCategory, setActiveCategory }) { 
	return (
		<div className='categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='categories-select'
			>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button> 
		</div>
	)
}

export default Categories