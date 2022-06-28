import { useState, useCallback, useEffect } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMealsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      //Using Async Await instead of then and catch
      const response = await fetch('https://react-http-1eac3-default-rtdb.firebaseio.com/meals.json')
  
      //Check if response valid
      if (!response.ok) {
        console.log("error");
        throw new Error('Something went wrong');
      }
      
      const data = await response.json();
  
      //Transform object to array
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        });
      }

      setMeals(loadedMeals);
      
    } catch (error) {
      // Set the error
      setError(error.message);
    }
    // Now that everything is done (either loaded or erro), set isLoading to false.
    setIsLoading(false);
  }, []);

  // Using useEffect to run fecthMoviesHandler on component load
  useEffect(() => {
    fetchMealsHandler();
  }, [fetchMealsHandler]);

  let content = <p>Found no movies.</p>

  if (meals.length > 0) {
    content = meals.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />);
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }


  return <section className={classes.meals}>
    <Card>
    <ul>
      {content}
    </ul>
    </Card>
  </section>
};

export default AvailableMeals;
