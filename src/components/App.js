import Item from './Item';
import React, { useState } from 'react';
import Add from './Add';
const listItems = [
    { id: 1, title: 'Đi chơi với bạn gái', isComplete: true },
    { id: 2, title: 'Đi mua đồ ăn', isComplete: false },
    { id: 3, title: 'Đi xem phim', isComplete: true },
];

function App() {
    const [list, setList] = useState(listItems);
    const listTodo = list.map((item, index) => (
        <Item
            key={index}
            item={item}
            onClick={onItemClickChangeStatus(item)}
            removeItem={removeItem(item)}
        />
    ));
    function addItem(item) {
        setList([...list, item]);
    }

    function onItemClickChangeStatus(item) {
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

    function removeItem(item) {
        return function () {
            const index = list.indexOf(item);
            list.splice(index, 1);
            setList([...list]);
        };
    }

    return (
        <div className=' flex justify-center h-screen bg-gray-500'>
            <div className='fixed w-80 h-52 bg-gray-300 right-4 top-1/4 rounded-3xl'>
                <h3 className='ml-4 font-medium'>Guide:</h3>
                <p className='ml-4 font-medium'>
                    You can write what will do today in side list! <br />
                    Type -> press Enter. So easy right ?<br />
                    Beside it, you can edit and remove work you don't want
                    anymore.
                    <br /> Click in the tick or text in list to toggle pending
                    or completed
                </p>
            </div>
            <div className='mt-20 flex flex-col w-2/5'>
                <h1 className='text-8xl mb-4 text-center'>TODOLIST</h1>
                <Add handleSub={addItem}></Add>
                {listTodo}
                {list.length === 0 && 'Nothing here'}
                <div className=''>
                    <div className='pt-1 text-center font-medium text-base text-gray-900 inline-block w-28 h-8 bg-gray-200 rounded-lg'>
                        Total: {list.length}
                    </div>
                    <div className='ml-4 pt-1 text-center font-medium text-base text-gray-900 inline-block w-28 h-8 bg-gray-200 rounded-lg'>
                        Pending:
                        {list.filter((ele) => ele.isComplete === false).length}
                    </div>
                    <div className='pt-1 text-center font-medium text-base text-gray-900 ml-4 inline-block w-28 h-8 bg-gray-200 rounded-lg'>
                        Completed:
                        {list.filter((ele) => ele.isComplete === true).length}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
