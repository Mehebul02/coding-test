/* eslint-disable @typescript-eslint/no-explicit-any */
interface ActionButtonProps {
    text: string;
    icon?: any;
    bgColor?: string;
    textColor?: string;
    hoverColor?: string;
}
const ActionButton = ({
    text,
    icon: Icon,
    bgColor,
    textColor,
    hoverColor,
}: ActionButtonProps) => {
    return (
        <button
            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded font-semibold text-xs transition
        ${bgColor} ${textColor} ${hoverColor}`}
        >
            {Icon && <Icon size={16} />}
            {text}
        </button>
    );
};

export default ActionButton;
