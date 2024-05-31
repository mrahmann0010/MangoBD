function PageTitle({secTitle, secSub, subTextAlign}) {
    return (
        <div className="page-title pb-6">
            <h2 className="text-center">{secTitle}</h2>
            <p className={`${subTextAlign} text-base leading-7`}>
                {secSub}
            </p>
        </div>
    );
};

export default PageTitle;
