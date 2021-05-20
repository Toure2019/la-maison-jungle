function Categories({categories, plantList, plantItemList, updatePlantItemList}) {
    
    function handleChange(event) {
        if(event.target.value === '') {
            updatePlantItemList(plantList);
            console.log('Toutes les catégories', plantList);
        } else { 
            const newList = plantItemList.reduce(
                (acc, plant) => plant.category === event.target.value ? acc.concat(plant) : acc, []
            );
            console.log('newList', newList);
            updatePlantItemList(newList);
        }
    }

    return (
        <select onChange={handleChange}>
            <option key="cat00"></option>
            {categories.map((categorie, index) => (
                <option key={`${index}-${categorie}`} value={categorie}>{ categorie }</option>
            ))}
        </select>
    )
}

export default Categories;