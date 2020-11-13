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
      log.info("Preloading " + repository.save(new Utilisateur("Administrateur", "Admin", "admin@admin.fr",
        "admin", "0123456789", "AAA","", "123")));

      log.info("Preloading " + repository.save(new Utilisateur("LongPas", "Aragorn", "Aragorn@Numenor.fr",
        "moniteur", "1111111111", "BBB", "", "12345")));

      log.info("Preloading " + repository.save(new Utilisateur("Took", "Peregrin", "pippin@shire.fr",
        "cavalier", "2222222222", "CCC","1", "1234567")));
      log.info("Preloading " + repository.save(new Utilisateur("Brandebouc", "Merriadoc", "merry@shire.fr",
        "cavalier", "3333333333", "DDD","1", "12345678910")));
      log.info("Preloading " + repository.save(new Utilisateur("Gamgi", "Samwise", "sam@shire.fr",
        "cavalier", "3333333333", "EEE","1", "123456791011112")));




    };
  }

  @Bean
  CommandLineRunner initChevalDatabase(ChevalRepository repository) {

    return args -> {
      log.info("Preloading " + repository.save(new Cheval("Pegase", "12", "1")));
      log.info("Preloading " + repository.save(new Cheval("Licorne", "1000", "1")));
      log.info("Preloading " + repository.save(new Cheval("GrisPoil", "3", "1")));
    };
  }

  @Bean
  CommandLineRunner initRepriseDatabase(RepriseRepository repository) {
    return args -> {
      log.info("Preloading " + repository.save(new Reprise((long) 2, "2020/12/31/12h30", "10", "1")));
    };
  }
}
