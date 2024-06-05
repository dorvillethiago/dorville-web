'use client'

import { useDialogsStore } from '../state/dialogs'

export default function ContactButton() {
	const setContactDialog = useDialogsStore((state) => state.setContactDialog)

	return (
		<button
			onClick={() => setContactDialog(true)}
			type="button"
			className="hover:text-primary transition-colors"
		>
			Contato
		</button>
	)
}
