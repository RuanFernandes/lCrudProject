type EditRecordButtonProps = {
    handler: (e: number) => void;
    rowID: number;
}

export default function EditRecordButton(props: EditRecordButtonProps) {
    return (<>
        <button onClick={() => props.handler(props.rowID)}><i className="fas fa-pencil hover:cursor-pointer" aria-hidden={true}></i></button>
    </>);
}
