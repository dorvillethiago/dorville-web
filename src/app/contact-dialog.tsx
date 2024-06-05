'use client'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogDescription,
	DialogTitle,
	DialogFooter
} from '@/app/components/shadcn/dialog'
import { useDialogsStore } from './state/dialogs'
import { Button } from '@/app/components/shadcn/button'

export default function ContactDialog() {
	const contactDialog = useDialogsStore((state) => state.contactDialog)
	const setContactDialog = useDialogsStore((state) => state.setContactDialog)

	const handleAction = () => {
		setContactDialog(false)
		window.open('https://www.linkedin.com/company/dorville', '_blank')
	}

	return (
		<Dialog open={contactDialog} onOpenChange={setContactDialog}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Contato</DialogTitle>
				</DialogHeader>
				<DialogDescription>
					Queremos transformar suas ideias em realidade! Converse conosco pelo
					LinkedIn para agendar uma reunião e mergulhar nos detalhes do seu
					próximo projeto.
				</DialogDescription>
				<DialogFooter>
					<Button onClick={handleAction}>Acessar</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
