import { memo } from "react"

type Props = {
    count: number;
    onClick: VoidFunction;
}

/**
 *  Count
 */
export const Count = memo((props: Props) => {
    const { count, onClick} = props;

    console.log('count!');

    return (
        <div>
            <p>{count}</p>
            <button onClick={onClick}></button>
        </div>
    )
});