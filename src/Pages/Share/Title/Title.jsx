

const Title = ({title, subTitle}) => {
    return (
        <div className="text-center my-4">
            <h3 className="font-serif text-3xl">{title}</h3>
            <h2 className="font-mono text-5xl">{subTitle}</h2>
        </div>
    );
};

export default Title;