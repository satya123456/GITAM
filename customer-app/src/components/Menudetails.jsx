
import React, { Component } from 'react';

export default class Menudetails extends Component {
  render() {
   const recepies = this.props.recepies;
  
 return (
      <div>
        {recepies.map((recipe, id) => (
          <div key={id} >
            <h2>{recipe.name}</h2>

            <h3>Ingredients</h3>
            <ul>
              {(recipe.ingredients).map((ing, i) => (
                <li key={id}>
                  {ing.name} — {ing.amount} {ing.measurement}
                </li>
              ))}
            </ul>

            <h3>Steps</h3>
            <ol>
              {(recipe.steps).map((step, sIdx) => (
                <li key={sIdx}>{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    );

  }
}
