import React from "react";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import App from "./App";


function deleteRecipe() {
       
        const deleteRecipe = indexToDelete => {
          setRecipes( currentRecipes => {
            const updatedRecipes = currentRecipes.filter( (recipes, index) => index !== indexToDelete);
            return updatedRecipes;
          });
        };
        
        return (
          <div className="deleteRecipe">
            
            <DeleteRecipe
              deleteRecipe={deleteRecipe}
              recipes={recipes}
            />
             <button name="delete" onClick={() => deleteRecipe(index)}/>
          </div>
        );
      }

export default deleteRecipe;