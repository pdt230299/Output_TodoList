import { useState } from 'react';

function Add(props) {
    const [item, setItem] = useState('');

    function handleChange(e) {
        setItem(e.target.value);
    }
    function handleSubmit(e) {
        if (item !== '') {
            props.handleSub({ title: item, isComplete: false });
            setItem('');
        }
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Thêm công việc'
                onChange={handleChange}
                value={item}
            />
        </form>
    );
}

export default Add;
