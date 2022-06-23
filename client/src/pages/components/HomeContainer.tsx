type HomeContainerProps = {
    children: React.ReactNode;
}

export default function HomeContainer(props: HomeContainerProps) {
    return (
        <section className="bg-gray-200 mx-0 w-100 dark:bg-gray-800 p-10" style={{ height: 'calc(100vh - 4rem)' }}>
            {props.children}
        </section>
    );
}
