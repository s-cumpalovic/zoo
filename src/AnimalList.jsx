import React,{ useState } from 'react';

const today = new Date();
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

const animalsData = [
    {id: 1, name:'Jackie', species:'Dog', birth:date},
    {id: 2, name:'Pedja', species:'Monkey', birth:date},
    {id: 3, name:'Jack', species:'Aligator', birth:date},
    {id: 4, name:'Millie', species:'Lion', birth:date},
    {id: 5, name:'Jackie', species:'Bird', birth:date},
    {id: 6, name:'Leonardo', species:'Turtle', birth:""},
];

const AnimalList = () => {
    const [animals, setAnimals] = useState(animalsData);

    const handleRemoveAnimal = (index) => {
        setAnimals([...animals.slice(-1, index),
                     ...animals.slice(index + 1)]);
    };

    const handleMoveAnimalToTop = (index) => {
        setAnimals(
            [animals[index],
            ...animals.slice(0, index),
            ...animals.slice(index + 1)]);
    }
    
    return (
        <div>
            <h1>Animal list in the zoo:</h1>
            <table>
                <tr>
                    <th>name: </th>
                    <th>species: </th>
                    <th>birth: </th>
                </tr>
            {animals.map((animal, index) => 
                <tr key={animal.id}>
                        <th>{animal.name}</th>
                        <th>{animal.species}</th>
                        <th>{animal.birth ? animal.birth : 'Unknown'}</th>
                        <td><button onClick={() => handleRemoveAnimal(index)}>Remove</button></td>       
                        <td><button onClick={() => handleMoveAnimalToTop(index)}>Move to top</button></td>       
                </tr>
                    )}
            </table>
        </div>
    )
}

export default AnimalList;