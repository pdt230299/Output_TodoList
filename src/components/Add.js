import { useState } from 'react';

function Add(props) {
    const [item, setItem] = useState('');
    const type = typeof props.data;
    function handleChange(e) {
        setItem(e.target.value);
    }
    function handleSubmit(e) {
        if (item !== '') {
            props.handleSub({
                id: new Date().valueOf(),
                title: item,
                isComplete: false,
            });
            setItem('');
        }
        e.preventDefault();
    }
    function handleSubmitEdit(e) {
        if (item !== '') {
            props.editItem({
                title: item,
                isComplete: false,
            });
            setItem('');
        }
        e.preventDefault();
    }
    return (
        <div className='block w-full rounded-lg mb-2 h-12 bg-gray-200'>
            {type === 'string' ? (
                <div>
                    <form onSubmit={handleSubmitEdit}>
                        <input
                            type='text'
                            className='block h-12 bg-gray-200 w-full rounded-lg pl-16'
                            placeholder='Edit your work'
                            onChange={handleChange}
                            value={item}
                        />
                    </form>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        className='block h-12 bg-gray-200 w-full rounded-lg pl-16'
                        placeholder='What you will do today ?'
                        onChange={handleChange}
                        value={item}
                    />
                </form>
            )}
        </div>
    );
}

export default Add;
