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
  CommandLineRunner initDatabase(CavalierRepository repository) {

    return args -> {
      log.info("Preloading " + repository.save(new Cavalier("Nom", "Prenom", "email@orange.fr", 123, 3)));
    };
  }
}
