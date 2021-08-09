import Item from './Item';
import React, { useState } from 'react';
import Add from './Add';

function App() {
    const listItem = [
        { title: 'Đi chơi với bạn gái', isComplete: false },
        { title: 'Đi mua đồ ăn', isComplete: false },
        { title: 'Đi xem phim', isComplete: false },
    ];
    const [list, setList] = useState(listItem);

    function addItem(item) {
        setList([...list, item]);
    }

    function onItemClicked(item) {
        return function () {
            const isComplete = item.isComplete;
            const index = list.indexOf(item);
            setList([
                ...list.slice(0, index),
                {
                    ...item,
                    isComplete: !isComplete,
                },
                ...list.slice(index + 1),
            ]);
        };
    }
    return (
        <div>
            <Add handleSub={addItem}></Add>
            {list.length > 0 &&
                list.map((item, index) => (
                    <Item
                        key={index}
                        item={item}
                        onClick={onItemClicked(item)}
                    />
                ))}
            {list.length === 0 && 'Nothing here'}
        </div>
    );
}

export default App;
