import React from "react";
import TableHead from "./TableHead";

// TODO: Display the list of recipes using the structure of table that is provided.
// TODO: Create at least one additional component that is used by this component.
// TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

function RecipeList({ recipes, deleteRecipe, updateRecipe, editRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <TableHead/>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={index} className="recipe">
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td>
                <img src={recipe.photo} alt={recipe.name} />
              </td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.preparation}</td>
              <td>
                <button name="delete" onClick={() => deleteRecipe(index)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
