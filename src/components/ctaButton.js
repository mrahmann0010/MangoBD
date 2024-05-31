function CtaButton({buttonName, onClick}) {
    return (
        <div className="flex justify-center">
            <button onClick={onClick} className="cta">{buttonName}</button>
        </div>
    )
}

export default CtaButton;
