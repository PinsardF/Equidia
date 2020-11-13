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
  CommandLineRunner initUtilisateurDatabase(UtilisateurRepository repository) {

    return args -> {
      log.info("Preloading " + repository.save(new Utilisateur(
        "Maiar", "Sauron", "sauron@mordor.me", "superadmin", "6666666666", "AAAA", "","mdp")));

      log.info("Preloading " + repository.save(new Utilisateur(
        "ADMIN1", "admin1", "admin1@admin.nk", "admin", "0123456789", "1111", "","mdp")));
      log.info("Preloading " + repository.save(new Utilisateur(
        "ADMIN2", "admin2", "admin2@admin.nk", "admin", "1234567890", "2222", "","mdp")));
      log.info("Preloading " + repository.save(new Utilisateur(
        "ADMIN3", "admin3", "admin3@admin.nk", "admin", "2345678901", "3333", "","mdp")));

      log.info("Preloading " + repository.save(new Utilisateur(
        "LongPas", "Aragorn", "roi@gondo.nm", "moniteur", "5467283260", "4444", "","mdp")));
      log.info("Preloading " + repository.save(new Utilisateur(
        "Lucky", "Luke", "luke@farwest.us", "moniteur", "5467816538", "55555", "","mdp")));
      log.info("Preloading " + repository.save(new Utilisateur(
        "LeBlanc", "Gandalf", "gandalf@istari.me", "moniteur", "0124675832", "6666", "","mdp")));

      log.info("Preloading " + repository.save(new Utilisateur(
        "Took", "Peregrin", "pipin@took.sh", "cavalier", "0427618765", "7777", "1","mdp")));
      log.info("Preloading " + repository.save(new Utilisateur(
        "Brandebouc", "Merriadoc", "merry@brandebouc.sh", "cavalier", "4575491623", "8888", "1","mdp")));
      log.info("Preloading " + repository.save(new Utilisateur(
        "Gamgi", "Samwise", "sam@gamgi.sh", "cavalier", "4761876532", "9999", "1","mdp")));
    };
  }

  @Bean
  CommandLineRunner initChevalDatabase(ChevalRepository repository) {

    return args -> {
      log.info("Preloading " + repository.save(new Cheval("JollyJumper", "10", "1")));
      log.info("Preloading " + repository.save(new Cheval("Shadowfax", "8", "1")));
      log.info("Preloading " + repository.save(new Cheval("Pegasus", "1000", "1")));
    };
  }

  @Bean
  CommandLineRunner initRepriseDatabase(RepriseRepository repository) {

    RepriseCavalierCheval nouvellePaire;

    Reprise reprise1 = new Reprise((long) 5, "2020/11/30/12h30", "4", "1");
    Reprise reprise2 = new Reprise((long) 5, "2020/11/30/12h30", "4", "1");
    Reprise reprise3 = new Reprise((long) 5, "2020/11/30/12h30", "4", "1");

    reprise1.setFinished(true);
    return args -> {
      log.info("Preloading " + repository.save(reprise1));
      log.info("Preloading " + repository.save(reprise2));
      log.info("Preloading " + repository.save(reprise3));
    };
  }

  @Bean
  CommandLineRunner initCavalierChevalRepriseDatabase(RepriseCavalierChevalRepository repository){

    return args -> {
      log.info("Preloading " + repository.save(new RepriseCavalierCheval((long) 1, (long) 8, null)));
      log.info("Preloading " + repository.save(new RepriseCavalierCheval((long) 1, (long) 9, null)));
      log.info("Preloading " + repository.save(new RepriseCavalierCheval((long) 1, (long) 10, null)));

      log.info("Preloading " + repository.save(new RepriseCavalierCheval((long) 2, (long) 8, null)));
      log.info("Preloading " + repository.save(new RepriseCavalierCheval((long) 2, (long) 9, null)));
      log.info("Preloading " + repository.save(new RepriseCavalierCheval((long) 2, (long) 10, null)));

      log.info("Preloading " + repository.save(new RepriseCavalierCheval((long) 3, (long) 8, null)));
      log.info("Preloading " + repository.save(new RepriseCavalierCheval((long) 3, (long) 9, null)));
      log.info("Preloading " + repository.save(new RepriseCavalierCheval((long) 3, (long) 10, null)));

    };

  }
}
