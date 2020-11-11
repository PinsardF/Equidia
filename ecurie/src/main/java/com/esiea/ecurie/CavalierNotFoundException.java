package com.esiea.ecurie;

class CavalierNotFoundException extends RuntimeException {

    CavalierNotFoundException(Long id){
        super("Impossible de trouver le cavalier " + id);
    }
}
