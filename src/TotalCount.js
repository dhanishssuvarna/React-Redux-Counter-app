import { useSelector } from 'react-redux';

const DisplayCount = () => {
    const count = useSelector((state) => state.counter.count);

    return (
        <div>
            <h3>Total Count : {count}</h3>
        </div>
    );
};

export default DisplayCount;
