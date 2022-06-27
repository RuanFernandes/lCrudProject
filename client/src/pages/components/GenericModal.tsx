type GenericModalProps = {
    children: React.ReactNode;
    title?: string;
    onSave: () => void;
    onCancel?: () => void;
}

export default function GenericModal(props: GenericModalProps) {

    const hideModal = () => {
        const modal = document.getElementById("modalContainer");
        modal?.classList.add("hidden");
        modal?.classList.remove('flex');
    }

    return (
        <div id="modalContainer" className="fixed top-0 left-0 w-screen h-screen m-0 justify-center items-center bg-opacity-50 bg-black hidden">
            <div id="mdMain" className="bg-white dark:bg-black rounded-xl border-4 border-blue-600 dark:border-blue-900 w-3/4">
                <div id="mdHeader" className="bg-blue-600 dark:bg-blue-900 text-center text-2xl font-bold text-white dark:text-black p-3">
                    <h1>{props.title ? props.title : 'Modal'}</h1>
                </div>
                <div id="mdBody" className="p-3">
                    {props.children}
                </div>
                <div id="mdFooter" className="flex justify-end w-full border-t-2">
                    <button className="px-5 py-2 mx-5 border-2 border-blue-600 rounded-md bg-blue-400 my-2 dark:bg-blue-600 dark:border-blue-800 transition-all
                    hover:bg-blue-600 hover:border-blue-700 dark:hover:bg-blue-700 dark:hover:border-blue-900"
                        onClick={() => props.onSave()}>Save</button>
                    <button className="px-5 py-2 mr-5 border-2 border-blue-600 rounded-md bg-blue-400 my-2 dark:bg-blue-600 dark:border-blue-800 transition-all
                    hover:bg-blue-600 hover:border-blue-700 dark:hover:bg-blue-700 dark:hover:border-blue-900"
                        onClick={() => {
                            if (props.onCancel) {
                                props.onCancel();
                            }
                            hideModal();
                        }}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
