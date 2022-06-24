type EditRecordButtonProps = {
    handler: () => void;
}

export default function EditRecordButton(props: EditRecordButtonProps) {
    return (<>
        <button onClick={props.handler}><i className="fas fa-pencil hover:cursor-pointer" aria-hidden={true}></i></button>
    </>);
}
