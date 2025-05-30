/*
const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]
*/

/*
//sans keys
// 
function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant) => (
                <li>{plant}</li>
            ))}
        </ul>
    )
}

export default ShoppingList

*/

//avec une key

/*
function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant, index) => (
                <li key={`${plant}-${index}`}>{ plant }</li>
            ))}
        </ul>
    )
}

export default ShoppingList
*/

import { plantList } from '../datas/plantList'
import  { useState } from 'react'
//import CareScale from './CareScale'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
    // Petite précision : categories nous vient de la partie précédente pour récupérer toutes les catégories uniques de plantes.
    
    const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

        function addToCart(name, price) {
            const currentPlantSaved = cart.find((plant) => plant.name === name)
            if (currentPlantSaved) {
                const cartFilteredCurrentPlant = cart.filter(
                    (plant) => plant.name !== name
                )
                updateCart([
                    ...cartFilteredCurrentPlant,
                    { name, price, amount: currentPlantSaved.amount + 1 }
                ])
            } else {
                updateCart([...cart, { name, price, amount: 1 }])
            }
        }
        
        return (
            <div className='lmj-shopping-list'>
                <Categories
                    categories={categories}
                    setActiveCategory={setActiveCategory}
                    activeCategory={activeCategory}
                />
    
                <ul className='lmj-plant-list'>
                    {plantList.map(({ id, cover, name, water, light, price, category }) =>
                        !activeCategory || activeCategory === category ? (
                            <div key={id}>
                                <PlantItem
                                    cover={cover}
                                    name={name}
                                    water={water}
                                    light={light}
                                    price={price}
                                />
                                <button onClick={() => addToCart(name, price)}>Ajouter</button>
                            </div>
                        ) : null
                    )}
                </ul>
            </div>
        )
    }



//methode avant le partage de state
/*function ShoppingList() {
    //const {scaleValue, careType} = props
    // On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
    // const scaleValue = props.scaleValue et
    // const careType = props.careType

	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))
                /*plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
                        {plant.name} {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                        {/*<CareScale scaleValue={plant.light} />
                        <CareScale careType='water' scaleValue={plant.water} />
                        <CareScale careType='light' scaleValue={plant.light} />}
                    </li>
				))} 
			</ul>
            
		</div>
	)
}

/*function ShoppingList() {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : [...acc, plant.category],
        []
    );

        // Vérification que plantList existe et est un tableau
        const safePlantList = Array.isArray(plantList) ? plantList : [];
        
        const categories = safePlantList.reduce(
            (acc, plant) => {
                if (plant?.category && !acc.includes(plant.category)) {
                    return [...acc, plant.category];
                }
                return acc;
            },
            []
        );
    

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id}>{plant.name}</li>
				))}
			</ul>
		</div>
	)
}*/

/*function ShoppingList() {
    // 1. Sécurisation de plantList
    const safePlantList = Array.isArray(plantList) ? plantList : [];
    
    // 2. Reduce sécurisé pour les catégories
    const categories = safePlantList.reduce((acc, plant) => {
        if (plant?.category && !acc.includes(plant.category)) {
            return [...acc, plant.category];
        }
        return acc;
    }, []);
    
    // 3. Affichage sécurisé
    return (
        <div>
            <h2>Catégories</h2>
            {categories.length > 0 ? (
                <ul>
                    {categories.map((cat) => (
                        <li key={cat}>{cat}</li>
                    ))}
                </ul>
            ) : (
                <p>Aucune catégorie disponible</p>
            )}
            
            <h2>Toutes les plantes</h2>
            {safePlantList.length > 0 ? (
                <ul>
                    {safePlantList.map((plant) => (
                        <li key={plant.id}>
                            {plant.name || 'Nom inconnu'} - 
                            {plant.category || 'Non catégorisé'}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucune plante disponible</p>
            )}
        </div>
    );
}*/

// Utilisation recommandée :
// <ShoppingList plantList={votreTableauDePlantes} />

export default ShoppingList