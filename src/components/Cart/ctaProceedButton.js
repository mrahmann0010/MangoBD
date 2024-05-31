import { useNavigate } from "react-router-dom";

function CtaProceedButton({buttonName, toTargetPath, showButton}) {
    const navigate = useNavigate();

    const toProceed = () => {
        navigate(toTargetPath);
        console.log("click");
    }
    return (
        <div className={`flex justify-center ${showButton ? '' : 'hidden'}`}>
            <button onClick={toProceed} className="cta">{buttonName}</button>
        </div>
    )
}

export default CtaProceedButton;
