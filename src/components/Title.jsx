const Title = ({ title1, title2, desc1, desc2 }) => {
    return (
        <div className="text-center">
            <h1 className="text-white font-bold text-4xl">{title1}</h1>
            <h1 className="text-white font-bold text-4xl">{title2}</h1>
            <div className="py-4">
                <p>{desc1}</p>
                <p>{desc2}</p>
            </div>
        </div>
    );
};

export default Title;