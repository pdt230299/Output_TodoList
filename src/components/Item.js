import checkImg from '../img/check.png';
import checkImgComplete from '../img/check-complete.png';
import Add from './Add';
import { useState } from 'react';
import { AiFillEdit, AiOutlineDelete } from 'react-icons/ai';
function Item(props) {
    let complete =
        props.item.isComplete === true
            ? 'line-through opacity-30'
            : 'no-underline';
    complete += ' pl-8 break-words';
    let url = checkImg;
    if (props.item.isComplete) {
        url = checkImgComplete;
    }
    const [edit, setEdit] = useState(props.item);
    function editItem(item) {
        setEdit(item);
    }
    function editTitle() {
        setEdit('');
    }
    if (!edit) {
        return <Add editItem={editItem} data={edit}></Add>;
    }
    return (
        <div className='text-sm font-medium text-gray-900 block w-full rounded-lg mb-2 h-14 bg-gray-200 flex items-center'>
            <div onClick={props.onClick} className='flex flex-grow'>
                <img className='ml-4' src={url} alt='check' width='24px' />
                <p className={complete}>{edit.title}</p>
            </div>
            <div className='mr-4'>
                <button
                    onClick={editTitle}
                    className='bg-opacity-30 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
                    <AiFillEdit />
                </button>
                <button
                    onClick={props.removeItem}
                    className='bg-opacity-30 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
                    <AiOutlineDelete />
                </button>
            </div>
        </div>
    );
}
export default Item;
