import { useStore } from '@nanostores/react'
import { HomeStore } from '../Store/Home'
import {
  BottomNav,
  BottomNavIcon,
  ButtonIcon,
  ButtonLabel,
  Card,
  CardContainer,
  CardLabel,
  CardUserContainer,
  CardUserIcon,
  CardUserLabel,
  CardUserLabelContainer,
  CardUserLabelUsername,
  GreenButton,
  MainContainer,
  MainTitle,
} from '../Style/Home'
import { ButtonContainer } from '../Style/Registration'

/**
 * Ce composant affiche l'écran d'accueil
 */
export default function Home() {
  // Récupération des invoices depuis le store de la page d'accueil
  const { invoices } = useStore(HomeStore)

  return (
    <MainContainer>
      {/* Titre de la page d'accueil */}
      <MainTitle>Facturio</MainTitle>

      {/* Container pour les cartes */}
      <CardContainer>
        {/* Affiche tout les invoices */}
        {invoices.map(invoice => (
          // Affiche une carte d'une chose à faire
          <Card key={invoice.id}>
            {/* Container pour la vignette de l'utilisateur  */}
            <CardUserContainer>
              <CardUserIcon className="fa-solid fa-user"></CardUserIcon>
              <CardUserLabelContainer>
                <CardUserLabel>Par</CardUserLabel>
                <CardUserLabelUsername>{invoice.username}</CardUserLabelUsername>
              </CardUserLabelContainer>
            </CardUserContainer>

            {/* Label de la chose à faire */}
            <CardLabel>{invoice.title}</CardLabel>
          </Card>
        ))}
      </CardContainer>

      {/* Affiche le container pour un bouton */}
      <ButtonContainer>
        <GreenButton to="/nouvelle-liste">
          <ButtonIcon className="fa-solid fa-circle-plus"></ButtonIcon>
          <ButtonLabel>Nouvelle facture</ButtonLabel>
        </GreenButton>
        <GreenButton to="/nouveau-client">
          <ButtonIcon className="fa-solid fa-circle-plus"></ButtonIcon>
          <ButtonLabel>Nouveau client</ButtonLabel>
        </GreenButton>
      </ButtonContainer>
      <ButtonContainer>
        <GreenButton to="/nouvelle-liste">
          <ButtonIcon className="fa-solid fa-magnifying-glass"></ButtonIcon>
          <ButtonLabel>Chercher facture</ButtonLabel>
        </GreenButton>
        <GreenButton to="/nouveau-client">
          <ButtonIcon className="fa-solid fa-magnifying-glass"></ButtonIcon>
          <ButtonLabel>chercher client</ButtonLabel>
        </GreenButton>
      </ButtonContainer>

      {/* Affiche la barre de navigation du bas */}
      <BottomNav>
        <BottomNavIcon className="fa-solid fa-bars"></BottomNavIcon>
        <BottomNavIcon className="fa-solid fa-user"></BottomNavIcon>
      </BottomNav>
    </MainContainer>
  )
}
