import clan from "../images/clan.png";

interface ClanComponentProps {
    clanName?: string;
}

export default function Clan({ clanName }: ClanComponentProps) {
    return (
        <div className="flex justify-center items-center bg-[#2D2D2D] rounded-lg p-3 h-15">
            <div className="flex items-center space-x-3">
                <img src={clan.src} alt="Clan logo" className="w-10 h-10" />
                <div className="flex flex-col items-start">
                    <h1 className="text-white text-[24px] font-bold leading-none">КЛАН</h1>
                    <p className="text-gray-300 text-[14px] font-normal leading-none">
                        {clanName ? `участник '${clanName}'` : "Не в клане"}
                    </p>
                </div>
            </div>
        </div>
    );
}
