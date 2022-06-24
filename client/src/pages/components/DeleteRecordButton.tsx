type DeleteRecordButtonProps = {
    handler: (e: number) => void;
    delID: number;
}

export default function DeleteRecordButton(props: DeleteRecordButtonProps) {
    return (<>
        <button onClick={() => props.handler(props.delID)}><i className="fas fa-eraser hover:cursor-pointer" aria-hidden={true}></i></button>
    </>);
}
