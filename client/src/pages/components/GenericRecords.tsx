import { useEffect, useState } from "react";
import DeleteRecordButton from "./DeleteRecordButton";
import EditRecordButton from "./EditRecordButton";

type GenericRecordsOptions = {
    editable?: boolean;
    detetable?: boolean;
    addable?: boolean;
}

type GenericRecordsProps = {
    dataNames: string[];
    apiURL: string;
    options?: GenericRecordsOptions;
}


export default function GenericRecords(props: GenericRecordsProps) {

    const [data, setData] = useState([]);

    const options: GenericRecordsOptions = props.options || { editable: true, detetable: true, addable: true };
    const dataNames = props.dataNames;
    const apiUrl = props.apiURL;

    const fetchAPI = () => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setData(data));
    }

    useEffect(() => {
        fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiUrl]);

    useEffect(() => {
        console.log("data changed.");
    }, [data]);

    const handleEditButton = (id: number) => {

    };

    const handleDeleteButton = (id: number) => {
        fetch(apiUrl, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                rowid: id
            })
        }).then(data => data.blob().then(blob => blob.text()).then(text => {
            fetchAPI();
            alert(text);
        }));
    };

    // const handleAddButton = () => {

    // };

    return (<>

        {/* Table Rendering */}
        <table className="table-auto border-separate border-spacing-2 border border-slate-600 dark:border-slate-600 w-full">
            <thead>
                <tr>
                    {
                        (options.editable ? <th className="px-4 py-2">&nbsp;</th> : null)
                    }
                    {
                        (options.detetable ? <th className="px-4 py-2">&nbsp;</th> : null)
                    }
                    {
                        dataNames.map((item, index) => {
                            return <th className="border border-slate-600 px-5 dark:text-white dark:border-slate-500 dark:bg-slate-900" key={index} style={{ textTransform: 'capitalize' }}>{item.replace('_', ' ')}</th>;
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => {
                        return (
                            <tr key={index}>
                                {
                                    (options.editable ? <td className="border border-slate-600 bg-slate-400 text-black text-center dark:text-white dark:border-slate-500 dark:bg-slate-700 w-0"><EditRecordButton handler={handleEditButton} rowID={item['id']} /></td> : null)
                                }
                                {
                                    (options.detetable ? <td className="border border-slate-600 bg-slate-400 text-black text-center dark:text-white dark:border-slate-500 dark:bg-slate-700 w-0"><DeleteRecordButton handler={handleDeleteButton} delID={item['id']} /></td> : null)
                                }
                                {
                                    dataNames.map((itm, indx) => {
                                        return (<>
                                            <td className="border border-slate-600 px-5 bg-slate-400 text-black text-center dark:text-white dark:border-slate-500 dark:bg-slate-700" key={indx}>{item[itm]}</td>
                                        </>)
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>);
}
