package com.esiea.ecurie;

class RepriseNotFoundException extends RuntimeException {

  RepriseNotFoundException(Long id){
    super("Impossible de trouver la reprise " + id);
  }
}
