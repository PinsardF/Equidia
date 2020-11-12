package com.esiea.ecurie;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class LoadDatabase {

  private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

  @Bean
  CommandLineRunner initDatabase(UtilisateurRepository repository) {

    return args -> {
      log.info("Preloading " + repository.save(new Utilisateur("Nom", "Prenom", "email@orange.fr",
        "admin", "0123456789", 3,1052, "email@orange.fr", "123")));
      log.info("Preloading " + repository.save(new Utilisateur("Delafontaine", "Jean", "fontaine@orange.fr",
        "superadmin", "0987654321", 7,12, "fontaine@orange.fr", "12345")));
    };
  }
}
