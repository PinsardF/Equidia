package com.esiea.ecurie;

class ChevalNotFoundException extends RuntimeException {

  ChevalNotFoundException(Long id){
    super("Impossible de trouver le cheval " + id);
  }
}
