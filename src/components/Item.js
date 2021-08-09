function Item(props) {
    return (
        <div>
            <p
                className={
                    props.item.isComplete === true
                        ? 'line-through'
                        : 'no-underline'
                }
                onClick={props.onClick}>
                {props.item.title}
            </p>
        </div>
    );
}
export default Item;
