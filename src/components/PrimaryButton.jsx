



const PrimaryButton = ({onClick, buttontext, additionalStyles }) => (
    <button onClick={onClick} className={`w-full font-secondary font-normal text-sm tracking-wider py-2 px-4 rounded  ${additionalStyles}`}>
        {buttontext}
    </button>
);

export default PrimaryButton;

