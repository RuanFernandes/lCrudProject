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

    return (
        <>
            <Navbar handleThemeChange={props.ThemeChangingHandler} selectedTheme={props.Theme} />
            <HomeContainer>
                <div className="bg-slate-300 dark:bg-slate-500 h-full rounded-3xl p-10">
                    <GenericRecords apiURL={apiURL} dataNames={dataNames} />
                </div>
            </HomeContainer>
        </>
    );
}
