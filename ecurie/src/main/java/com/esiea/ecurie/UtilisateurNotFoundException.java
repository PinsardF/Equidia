package com.esiea.ecurie;

class UtilisateurNotFoundException extends RuntimeException {

    UtilisateurNotFoundException(Long id){
        super("Impossible de trouver l'utilisateur " + id);
    }
}
