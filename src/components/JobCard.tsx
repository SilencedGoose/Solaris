import type { Job } from '../data';

export default function JobCard({ logo, companyName, jobTitle, timeframe }: Job) {
	return (
		<div className="flex w-[350px] flex-col items-center justify-center gap-5 break-words rounded bg-[#656ca02f] py-5 backdrop-blur-md">
			<img src={logo} alt={companyName} className="h-[50px] max-w-[200px]" />
			<h2 className="text-2xl">{jobTitle}</h2>
			<h3 className="text-sm italic">{timeframe}</h3>
		</div>
	);
}
