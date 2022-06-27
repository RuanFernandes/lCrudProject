import GenericRecords from "../components/GenericRecords";
import HomeContainer from "../components/HomeContainer";
import Navbar from "../components/Navbar"

type HomeProps = {
    ThemeChangingHandler: () => void;
    Theme: string;
}


export default function Home(props: HomeProps) {

    const apiURL = "http://localhost:3001/navbar/";
    const dataNames = ["id", "text", "href", "deletable", "disabled"];
    const options = {
        editable: true,
        detetable: true,
        addable: true
    }

    return (
        <>
            <Navbar handleThemeChange={props.ThemeChangingHandler} selectedTheme={props.Theme} />
            <HomeContainer>
                <div className="bg-slate-300 dark:bg-slate-500 h-full rounded-3xl p-10">
                    <GenericRecords apiURL={apiURL} dataNames={dataNames} options={options} >
                        <div className="px-3">
                            <form action="POST" className="w-full flex justify-between flex-wrap">
                                <div className="w-full">
                                    <label htmlFor="text" className="block text-sm font-bold mb-2">Text</label>
                                    <input type="text" name="text" id="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="href" className="block text-sm font-bold mb-2">Href</label>
                                    <input type="text" name="href" id="href" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="deletable" className="block text-sm font-bold mb-2">Deletable</label>
                                    <input type="checkbox" name="deletable" id="deletable" className="shadow w-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="disabled" className="block text-sm font-bold mb-2">Disabled</label>
                                    <input type="checkbox" name="disabled" id="disabled" className="shadow w-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                </div>
                            </form>
                        </div>
                    </GenericRecords>
                </div>
            </HomeContainer>
        </>
    );
}
