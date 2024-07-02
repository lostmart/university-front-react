import { forwardRef, useImperativeHandle, useRef } from "react"
import { Modal } from "bootstrap"

type TModalComp = {
	message: string
	onClick?: () => void
}

const ModalComp = forwardRef((props: TModalComp, ref) => {
	const { onClick } = props
	const modalRef = useRef<HTMLDivElement>(null)

	useImperativeHandle(ref, () => ({
		show: () => {
			if (modalRef.current) {
				const modal = new Modal(modalRef.current)
				modal.show()
			}
		},
		hide: () => {
			if (modalRef.current) {
				const modal = Modal.getInstance(modalRef.current)
				modal?.hide()
			}
		},
	}))

	return (
		<main
			onClick={onClick}
			className="container text-center m-auto form-signin"
		>
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex={-1}
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
				ref={modalRef}
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">
								Something happened ...
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							<div className="alert alert-danger" role="alert">
								{props.message}
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal"
								onClick={onClick}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
})

export default ModalComp
