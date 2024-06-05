import Image from 'next/image'

export default function Footer() {
	return (
		<footer className="bg-primary mt-32 py-10 px-10 gap-5">
			<div
				className="max-w-screen-2xl mx-auto flex-col gap-3 md:flex-row md:items-center items-start flex justify-between text-background"
				id="content-container"
			>
				<p className="text-left">
					© 2024 Dorville Software and Consulting. All Rights Reserved.
				</p>
				<Image
					width={120}
					height={148}
					src="/footer-logo.svg"
					alt="Footer Logo"
				/>
			</div>
		</footer>
	)
}
