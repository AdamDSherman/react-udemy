//import { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {

  // Call dispatch functions.
  const dispatch = useDispatch();

  // Takes function that chooses which data we want from our store.
  // The below gets the counter state managed by redux.
  // useSelector automatically sets up a subscription (will automatically update when state.counter gets updated).
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    // Old way of dispatching actions
    //dispatch({ type: 'increment' });

    // New way with Redux toolkit
    dispatch(counterActions.increment());
  };

  // Sending values to the reducer function(s).
  const increaseHandler = () => {
    //dispatch({ type: 'increase', amount: 5 });

    // Redux Toolkit will automatically create object, like above. It calls it 'payload'.
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// Class based components version. Alterantive to hooks.
// connect form Redux helps connect up class components to store
// class Counter extends Component {

//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Incremant</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// // Maps redux state to props
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   };
// };

// // Equivialant to useDispatch
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };


// // Connect from redux
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;