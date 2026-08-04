interface SocialButtonProps {
	link: string;
	imgLink: string;
	imgDesc: string;
}

export default function SocialButton({ link, imgLink, imgDesc }: SocialButtonProps) {
	return (
		<div className="flex w-fit items-center justify-center border-t-4 border-[#9a8c98] bg-[#f2e9e4] px-[5px] pt-[2px] pb-[5px]">
			<a href={link} target="_blank" rel="noreferrer" className="flex items-center justify-center">
				<img src={imgLink} alt={imgDesc} className="w-[30px]" />
			</a>
		</div>
	);
}
