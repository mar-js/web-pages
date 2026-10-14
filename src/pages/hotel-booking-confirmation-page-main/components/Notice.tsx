export const Notice = ({ notice, dismiss }: { notice: string; dismiss: () => void }) => (
	<div className="hotel-notice fixed bottom-5 right-5 z-30 flex max-w-[calc(100vw-40px)] items-center gap-4 rounded-xl bg-[#302b26] px-5 py-4 text-sm text-white shadow-xl" role="status">
		<span>{notice}</span>
		<button className="text-xl" type="button" onClick={dismiss} aria-label="Dismiss message">×</button>
	</div>
);
