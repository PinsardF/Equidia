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
      log.info("Preloading " + repository.save(new Utilisateur("Orville", "Olga", "orville@orange.fr",
        "cavalier", "0112467385","45", 3, "123")));
      log.info("Preloading " + repository.save(new Utilisateur("Cramer", "Kevin", "kev@free.fr",
        "cavalier", "0112467385", "3", 6, "123")));
    };
  }
}
