import { Helmet } from "react-helmet";

const Statistic = () => {
    return (
        <div className="flex justify-center items-center min-h-52">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Statistic | Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1 className="text-3xl font-bold text-purple-700">No data to show statistic!</h1>
        </div>
    );
};

export default Statistic;