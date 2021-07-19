import React, { Component } from 'react'
import classnames from 'classnames'

class NewsletterForm extends Component {
	constructor(props) {
		super(props)
		this.state = { listaEmails: [] }
	}

	render() {
		const { className, submit = 'Submit' } = this.props
		let { listaEmails } = this.state
		let email = ''

		function validarRegexEmail(a) {
			const re =
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			return re.test(String(a).toLowerCase())
		}

		function validarEmailJaCadastrado(a) {
			const emails = localStorage.getItem('emails')
			if (emails.length > 0) {
				const listaEmailsArmazenados = emails.split(',')
				return !listaEmailsArmazenados.some((x) => x === a)
			}
			return true
		}

		function validacoes(a) {
			if (validarRegexEmail(a)) {
				if (validarEmailJaCadastrado(a)) {
					return { valido: true, mensagem: 'Email cadastrado com sucesso!' }
				}
				return {
					valido: false,
					mensagem: 'Email já cadastrado! Favor, cadastrar outro email!',
				}
			}
			return { valido: false, mensagem: 'Este não é um email válido!' }
		}

		function armazenarEmail() {
			const resultado = validacoes(email)
			if (resultado.valido) {
				listaEmails = localStorage.getItem('emails').split(',')
				listaEmails.push(email)
				localStorage.setItem('emails', listaEmails)
			}
			alert(resultado.mensagem)
		}

		return (
			<div
				className={classnames(
					'newsletter-form is-revealing md:flex',
					className
				)}
			>
				<div className="flex-grow flex-shrink mr-2">
					<input
						className="w-full px-4 py-3 text-sm text-gray-500 bg-white border border-gray-300 rounded-sm shadow-none"
						type="email"
						name="email"
						placeholder="Seu email aqui&hellip;"
						onChange={(e) => (email = e.target.value)}
					/>
				</div>

				<div className="control">
					<button
						className="-mt-px text-white shadow-lg bg-secondary-400"
						type="button"
						onClick={armazenarEmail}
					>
						{submit}
					</button>
				</div>
			</div>
		)
	}
}

export default NewsletterForm
