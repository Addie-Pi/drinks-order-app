import classes from './AvailableDrinks.module.css'
import Card from '../UI/Card';
import DrinkItem from './DrinkItem/DrinkItem';

const DUMMY_DRINKS = [
  {
    id: 'd1',
    name: 'Original Bubble Tea',
    description: 'With brown sugar',
    price: 16.99,
  },
  {
    id: 'd2',
    name: 'Lychee Bubble Tea',
    description: 'A fresh favor!',
    price: 18.5,
  },
  {
    id: 'd3',
    name: 'Tiramisu Bubble Tea',
    description: 'Italy, cheesey, missing',
    price: 20.99,
  },
  {
    id: 'd4',
    name: 'Taro Bubble Tea',
    description: 'You will not want to miss it...and purple...',
    price: 28.99,
  },
];

const AvailableDrinks = () => {

    const drinksList = DUMMY_DRINKS.map((drink) => (
      <DrinkItem 
        id={drink.id} 
        key={drink.id} 
        drink={drink} />
    ))

    return (
      <section className={classes.drinks}>
        <Card>
          <ul>{drinksList}</ul>
        </Card>
      </section>
    )
}


export default AvailableDrinks;