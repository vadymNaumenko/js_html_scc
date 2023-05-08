type Ingredient = 'cheese' | 'bread' | 'salami';

type Action = 
| {type: 'sandwich/addIngredient', payload: Ingredient}
| {type: 'sandwich/clear'};

export default Action;
