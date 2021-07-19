import React from 'react'
import Layout from '../layouts/index'
import Hero from '../components/hero/Hero'
import HeroIllustration from '../components/hero/HeroIllustration'

export default function IndexPage() {
	return (
		<Layout>
			<Hero
				title="Cadastre seu email para receber as melhores promoções!"
				content=""
				illustration={HeroIllustration}
			/>
		</Layout>
	)
}
