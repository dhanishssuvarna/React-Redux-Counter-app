import './App.css';
import Counter from './Counter';
import TotalCount from './TotalCount';

function App() {
    return (
        <div className='App'>
            <h1>Redux Made Easy</h1>
            <TotalCount />
            <Counter name='Dhanish' />
            <Counter name='Tejas' />
            <Counter name='vaishnavi' />
        </div>
    );
}

export default App;
