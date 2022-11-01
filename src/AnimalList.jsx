import React from 'react';

const today = new Date();

const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();




const AnimalList = () => {
    const animals = [
        {name:'Jackie', species:'Dog', birth:date},
        {name:'Pedja', species:'Monkey', birth:date},
        {name:'Jack', species:'Aligator', birth:date},
        {name:'Millie', species:'Lion', birth:date},
        {name:'Jackie', species:'Bird', birth:date},
        {name:'Leonardo', species:'Turtle', birth:""},
    ];

    return (
        <div>
            <h1>Animal list in the zoo:</h1>
            <table>
                <tr>
                    <th>name: </th>
                    <th>species: </th>
                    <th>birth: </th>
                </tr>
            {animals.map((animal) => 
                <tr>
                        <th key="animal.id">{animal.name}</th>
                        <th key="animal.id">{animal.species}</th>
                        {animal.birth ? 
                            <>
                                <th key="animal.id">{animal.birth}</th>
                            </> :
                            <>
                                <th>Unknown</th>
                            </>
                        }       
                </tr>
                    )}
            </table>
        </div>
    )
}

export default AnimalList;