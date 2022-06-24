import { useEffect, useState } from "react";

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

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setData(data));
    }, [apiUrl]);

    const handleEditButton = () => {

    };

    const handleDeleteButton = () => {

    };

    const handleAddableButton = () => {

    };

    return (<>

        {/* Table Rendering */}
        <table className="table-auto border-separate border-spacing-2 border border-slate-600 dark:border-slate-600 w-full">
            <thead>
                <tr>
                    {
                        (options.editable ? <th className="px-4 py-2">&nbsp;</th> : null)
                    }
                    {
                        dataNames.map((item, index) => {
                            return <th className="border border-slate-600 px-5 dark:text-white dark:border-slate-500 dark:bg-slate-900" key={index} style={{ textTransform: 'capitalize' }}>{item}</th>;
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item, index) => {
                        return (<>
                            <tr key={index}>
                                {
                                    (options.editable ? <td className="border border-slate-600 px-5 bg-slate-400 text-black text-center dark:text-white dark:border-slate-500 dark:bg-slate-700">aa</td> : null)
                                }
                                {
                                    dataNames.map((itm, indx) => {
                                        return (<>
                                            <td className="border border-slate-600 px-5 bg-slate-400 text-black text-center dark:text-white dark:border-slate-500 dark:bg-slate-700" key={indx}>{item[itm]}</td>
                                        </>)
                                    })
                                }
                            </tr>
                        </>)
                    })
                }
            </tbody>
        </table>
    </>);
}
