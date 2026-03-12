import type { APIRoute } from 'astro';
import PocketBase from 'pocketbase';

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Méthode non autorisée' }),
      { status: 405 }
    );
  }

  try {
    const data = await request.json();
    const { nom, email, sujet, message } = data;

    if (!nom  !email 
 !sujet || !message) {
      return new Response(
        JSON.stringify({ error: 'Tous les champs sont requis' }),
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Adresse email invalide' }),
        { status: 400 }
      );
    }

    // Initialiser PocketBase
    const pb = new PocketBase('https://jumelage.valentin-deroo.fr');

    // Créer un enregistrement dans la collection "contact"
    const contactRecord = await pb.collection('contact').create({
      nom,
      email,
      sujet,
      message,
    });

    console.log('Message de contact sauvegardé:', contactRecord.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Votre message a été envoyé avec succès!' 
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Erreur lors du traitement du formulaire:', error);
    return new Response(
      JSON.stringify({ error: 'Erreur serveur' }),
      { status: 500 }
    );
  }
};