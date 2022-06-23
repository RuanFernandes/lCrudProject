import { useEffect, useState } from "react";

type GenericRecordsProps = {
    dataNames: string[];
    apiURL: string;
}

export default function GenericRecords(props: GenericRecordsProps) {

    const [data, setData] = useState([]);

    const dataNames = props.dataNames;
    const apiUrl = props.apiURL;

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setData(data));
    }, [apiUrl]);

    return (<>
        <table className="table-auto border-separate border-spacing-2 border border-slate-600 dark:border-slate-600 w-full">
            <thead>
                <tr>
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
                                    dataNames.map((itm, index) => {
                                        return (<>
                                            <td className="border border-slate-600 px-5 bg-slate-400 text-black text-center dark:text-white dark:border-slate-500 dark:bg-slate-700" key={index}>{item[itm]}</td>
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
