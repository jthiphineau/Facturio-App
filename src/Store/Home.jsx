import uniqid from 'uniqid'
import { action, map } from 'nanostores'

/**
 * Création d'un store qui contient l'état de la page d'accueil
 */
export const HomeStore = map({
  invoices: [],
})

/**
 * Ajoute une chose à faire dans la liste
 */
export const addInvoiceList = action(
  HomeStore,
  'addInvoiceList',
  (store, title, user) => {
    // On créer une liste de chose à faire
    const invoiceList = {
      id: uniqid(),
      title: title,
      userId: user.id,
      username: user.email,
      invoice: [],
    }

    // On ajoute la facture dans le tableaux plus haut
    store.setKey('invoices', [invoiceList, ...store.get().invoices])
  },
)
