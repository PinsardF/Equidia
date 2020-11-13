package com.esiea.ecurie;



import java.util.List;

import jdk.jshell.execution.Util;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
@CrossOrigin(origins = "*")
class Controller {

  private final UtilisateurRepository utilisateurRepository;
  private final ChevalRepository chevalRepository;
  private final RepriseRepository repriseRepository;
  private final RepriseCavalierChevalRepository repriseCavalierChevalRepository;


  Controller (UtilisateurRepository utilisateurRepository,
              ChevalRepository chevalRepository,
              RepriseRepository repriseRepository,
              RepriseCavalierChevalRepository repriseCavalierChevalRepository){

    this.utilisateurRepository = utilisateurRepository;
    this.chevalRepository = chevalRepository;
    this.repriseRepository = repriseRepository;
    this.repriseCavalierChevalRepository = repriseCavalierChevalRepository;
  }

  //region GET mapping

  //region utilisateurs

  //Donne la liste de tous les utilisateurs
  @GetMapping("/utilisateurs")
  List<Utilisateur> allUtilisateur() {
    return utilisateurRepository.findAll();
  }

  //Donne l'utilisateur qui correspond à l'id
  @GetMapping("/utilisateurs/{utilisateurId}")
  Utilisateur oneUtilisateur(@PathVariable Long utilisateurId) {

    return utilisateurRepository.findById(utilisateurId)
      .orElseThrow(() -> new UtilisateurNotFoundException(utilisateurId));
  }

  //donne l'utilisateur don't l'email correspond
  @GetMapping("/utilisateurs/{email}")
  List<Utilisateur> findUtilisateurByLogin(@PathVariable String email){
    List<Utilisateur> returnVal = allUtilisateur();
    returnVal.removeIf(o -> !o.getEmail().equals(email));
    return returnVal;
  }

  //donne l'utilisateur dont l'email et le mdp correspondent
  @GetMapping("/utilisateurs/{email}/{mdp}")
  List<Utilisateur> findUtilisateurByLoginMdp(@PathVariable String email, @PathVariable String mdp){
    List<Utilisateur> returnVal = utilisateurRepository.findAll();
    returnVal.removeIf(o -> ((!o.getEmail().equals(email)) || (!o.getMdp().equals(mdp))));
    return returnVal;
  }
  //endregion

  //region cavaliers

  //renvoie la liste de tous les cavaliers
  @GetMapping("/cavaliers")
  List<Utilisateur> allCavaliers(){
    List<Utilisateur> cavaliers = allUtilisateur();
    cavaliers.removeIf(o -> !o.getRole().equals("cavalier"));
    return cavaliers;
  }

  //renvoie tous les cavaliers qui ont "str" dans leur nom, prénom, email, téléphone ou numéro de license
  @GetMapping("/cavaliers/{str}")
  List<Utilisateur> cavalierStrSearch(@PathVariable String str){
    List<Utilisateur> cavaliers = allCavaliers();
    cavaliers.removeIf(o -> !o.getNom().contains(str)
      && !o.getPrenom().contains(str)
      && !o.getEmail().contains(str)
      && !o.getTelephone().contains(str)
      && !o.getNumLicense().contains(str)
    );
    return cavaliers;
  }

  //Donne la liste des reprises auquelle le cavalier défini par {id} est inscrit,
  // renvoie une liste vide s'il n'est pas inscrit a une reprise
  @GetMapping("/cavaliers/{cavalierId}/reprises")
  List<Reprise> findReprisesInscrites(@PathVariable Long cavalierId){
    Utilisateur utilisateur = oneUtilisateur(cavalierId);

    List<RepriseCavalierCheval> temp = repriseCavalierChevalRepository.findAll();
    List<Reprise> reprises = allReprise();

    List<Reprise> returnVal = allReprise();
    returnVal.clear();

    temp.removeIf(o -> !o.getCavalierId().equals(cavalierId));

    for (Reprise i : reprises)
      for (RepriseCavalierCheval j : temp)
        if (j.getRepriseId().equals(i.getRepriseId()))
          returnVal.add(i);

    return returnVal;
  }

  //savoir si un cavalier est inscrit à un cours
  //retourne un boolean true ou false
  @GetMapping("/cavaliers/{cavalierId}/reprises/{repriseId}")
  boolean isCavalierInscrit(@PathVariable Long repriseId, @PathVariable Long cavalierId){
    Utilisateur cavalier = oneUtilisateur(cavalierId);
    Reprise reprise = oneReprise(repriseId);

    List<RepriseCavalierCheval> temp = repriseCavalierChevalRepository.findAll();

    temp.removeIf(o -> !o.getRepriseId().equals(repriseId));
    temp.removeIf(o -> !o.getCavalierId().equals(cavalierId));

    return temp.isEmpty();
  }
  //endregion

  //region moniteurs

  //renvoie la liste de tous les moniteurs
  @GetMapping("/moniteurs")
  List<Utilisateur> allMoniteurs(){
    List<Utilisateur> moniteurs = allUtilisateur();
    moniteurs.removeIf(o -> !o.getRole().equals("moniteur"));
    return moniteurs;
  }

  //renvoie tous les moniteurs qui ont "str" dans leur nom, prénom, email, téléphone ou numéro de license
  @GetMapping("/moniteurs/{str}")
  List<Utilisateur> moniteurStrSearch(@PathVariable String str){
    List<Utilisateur> moniteurs = allMoniteurs();
    moniteurs.removeIf(o -> !o.getNom().contains(str)
      && !o.getPrenom().contains(str)
      && !o.getEmail().contains(str)
      && !o.getTelephone().contains(str)
      && !o.getNumLicense().contains(str)
    );
    return moniteurs;
  }

  //Donne la liste des reprises que le moniteur enseigne
  //envoie une liste vide s'il ne donne aucun cours
  @GetMapping("/moniteurs/{moniteurId}/reprises")
  List<Reprise> findReprisesCreees(@PathVariable Long moniteurId){
    Utilisateur utilisateur = oneUtilisateur(moniteurId);
    List<Reprise> reprises = allReprise();
    reprises.removeIf(o -> (!o.getMoniteurId().equals(utilisateur.getUtilisateurId())));
    return reprises;
  }
  //endregion

  //region chevaux

  //donne la liste de tous les chevaux
  @GetMapping("/chevaux")
  List<Cheval> allChevaux() {return chevalRepository.findAll();}

  //donne le cheval dont l'id correspond
  @GetMapping("/chevaux/{chevalId}")
  Cheval oneCheval(@PathVariable Long chevalId) {
    return chevalRepository.findById(chevalId)
      .orElseThrow(() -> new ChevalNotFoundException(chevalId));
  }

  //donne la liste des chevaux qui sont disponibles à la date
  //renvoie une liste vide si aucun n'est disponible
  @GetMapping("chevaux/disponible/{date}")
  List<Cheval> chevauxDisponible (@PathVariable String date){
    List<Cheval> chevaux = allChevaux();
    List<Reprise> reprises = allReprise();

    List<RepriseCavalierCheval> temp = repriseCavalierChevalRepository.findAll();

    reprises.removeIf(o -> !o.getDate().equals(date));

    for (Reprise reprise : reprises){
      temp.removeIf(o -> !o.getRepriseId().equals(reprise.getRepriseId()));
    }

    for (RepriseCavalierCheval i : temp){
      chevaux.removeIf(o -> o.getChevalId().equals(i.getChevalId()));
    }
    return chevaux;
  }
  //endregion

  //region reprises

  //donne la liste de toutes les reprises
  @GetMapping("/reprises")
  List<Reprise> allReprise() {
    return repriseRepository.findAll();
  }

  //donne la reprises qui correspond à id
  @GetMapping("/reprises/{repriseId}")
  Reprise oneReprise(@PathVariable Long repriseId) {
    return repriseRepository.findById(repriseId)
      .orElseThrow(() -> new RepriseNotFoundException(repriseId));
  }

  //donne la liste des participants d'une reprise
  @GetMapping("/reprises/{repriseId}/participants")
  List<Utilisateur> repriseParticipant(@PathVariable Long repriseId){
    oneReprise(repriseId);

    List<Utilisateur> cavaliers = allUtilisateur();
    List<Utilisateur> returnVal = allUtilisateur();
    returnVal.clear();

    List<RepriseCavalierCheval> temp = repriseCavalierChevalRepository.findAll();
    temp.removeIf(o -> !o.getRepriseId().equals(repriseId));

    for (RepriseCavalierCheval i : temp){
      for (Utilisateur j : cavaliers){
        if (i.getCavalierId().equals(j.getUtilisateurId())){
          returnVal.add(j);
        }
      }
    }
    return returnVal;
  }
  //endregion

  //region administrateurs

  //renvoie la liste de tous les admins
  @GetMapping("/administrateurs")
  List<Utilisateur> allAdmin(){
    List<Utilisateur> admins = allUtilisateur();
    admins.removeIf(o -> !o.getRole().equals("admin"));
    return admins;
  }

  //renvoie tous les admins qui ont "str" dans leur nom, prénom, email, téléphone ou numéro de license
  @GetMapping("/administrateurs/{str}")
  List<Utilisateur> adminStrSearch(@PathVariable String str){
    List<Utilisateur> admins = allAdmin();
    admins.removeIf(o -> !o.getNom().contains(str)
      && !o.getPrenom().contains(str)
      && !o.getEmail().contains(str)
      && !o.getTelephone().contains(str)
      && !o.getNumLicense().contains(str)
      );
    return admins;
  }
  //endregion

  //endregion

  //region POST mapping

  //Permet de créer un utilisateur
  @PostMapping("/utilisateurs")
  Utilisateur newUtilisateur(@RequestBody Utilisateur newUtilisateur) {
    return utilisateurRepository.save(newUtilisateur);
  }

  //pemet d'ajouter un nouveau cheval
  @PostMapping("/chevaux")
  Cheval newCheval(@RequestBody Cheval newCheval) {
    return chevalRepository.save(newCheval);
  }

  //permet d'ajouter une nouvelle reprise
  @PostMapping("/reprises")
  Reprise newReprise(@RequestBody Reprise newReprise) {
    return repriseRepository.save(newReprise);
  }

  //endregion

  //region PUT mapping

  //permet de mettre a jour un utilisateur
  //créer l'utilisateur si aucun utilisateur ne correspond à id
  @PutMapping("/utilisateurs/{utilisateurId}")
  Utilisateur replaceUtilisateur(@RequestBody Utilisateur newUtilisateur, @PathVariable Long utilisateurId){

    return utilisateurRepository.findById(utilisateurId)
      .map(utilisateur -> {
        utilisateur.setNom(newUtilisateur.getNom());
        utilisateur.setPrenom(newUtilisateur.getPrenom());
        utilisateur.setEmail(newUtilisateur.getEmail());
        utilisateur.setTelephone(newUtilisateur.getTelephone());
        utilisateur.setGalop(newUtilisateur.getGalop());
        return utilisateurRepository.save(utilisateur);
      })
      .orElseGet(() -> {
        newUtilisateur.setUtilisateurId(utilisateurId);
        return utilisateurRepository.save(newUtilisateur);
      });
  }

  //permet de modifier un cheval existant
  //va ajouter un nouveau cheval si aucun cheval existant ne correspond à id
  @PutMapping("/chevaux/{chevalid}")
  Cheval replaceCheval(@RequestBody Cheval newCheval, @PathVariable Long chevalid){

    return chevalRepository.findById(chevalid)
      .map(cheval -> {
        cheval.setNom(newCheval.getNom());
        cheval.setAge(newCheval.getAge());
        cheval.setGalop(newCheval.getGalop());
        return chevalRepository.save(cheval);
      })
      .orElseGet(() -> {
        newCheval.setChevalId(chevalid);
        return chevalRepository.save(newCheval);
      });
  }

  //region reprises

  //permet de modifier une reprise
  //va créer une nouvelle reprise si aucune ne correspond à id
  @PutMapping("/reprises/{repriseId}")
  Reprise replaceReprise(@RequestBody Reprise newReprise, @PathVariable Long repriseId){

    return repriseRepository.findById(repriseId)
      .map(reprise -> {
        reprise.setMoniteurId(newReprise.getMoniteurId());
        reprise.setDate(newReprise.getDate());
        reprise.setInscritMax(newReprise.getInscritMax());
        reprise.setGalop(newReprise.getGalop());
        reprise.setFinished(newReprise.isFinished());
        return repriseRepository.save(reprise);
      })
      .orElseGet(() -> {
        newReprise.setRepriseId(repriseId);
        return repriseRepository.save(newReprise);
      });
  }

  //permet de finaliser une reprise
  //demande un bool en body
  @PutMapping("/reprises/{repriseId}/finalize")
  Reprise changerStatus(@RequestBody boolean bool, @PathVariable Long repriseId){
    return repriseRepository.findById(repriseId)
      .map(reprise -> {
        reprise.setFinished(bool);
        return repriseRepository.save(reprise);
      })
      .orElseThrow(() -> new RepriseNotFoundException(repriseId));
  }

  //Ajoute les chevaux aux cavaliers de la reprise spécifié par {repriseId}
  //Si un des cavaliers de paires n'est pas déjà dans la reprise, on ne l'ajoute pas
  @PutMapping("reprises/ajouterChevaux")
  void ajouterChevaux(@RequestBody List<RepriseCavalierCheval> paires){
    List<RepriseCavalierCheval> temp = repriseCavalierChevalRepository.findAll();
    boolean alreadyPresent;
    for (RepriseCavalierCheval nouveau : paires){
      alreadyPresent = false;
      for (RepriseCavalierCheval ancien : temp){
        if (nouveau.getCavalierId().equals(ancien.getCavalierId())){
          alreadyPresent = true;
        }
      }
      if (!alreadyPresent){
        repriseCavalierChevalRepository.save(nouveau);
      }
    }
  }

  //Ajoute un cavalier à une reprise, ne l'ajoute pas s'il est déjà présent
  //vérifie si un cavalier correspond à l'id
  @PutMapping("reprises/{repriseId}/ajouterCavalier/{cavalierId}")
  Reprise ajouterCavalier(@PathVariable Long repriseId, @PathVariable Long cavalierId){
    boolean alreadyPresent = false;
    Utilisateur cavalier = oneUtilisateur(cavalierId);
    Reprise reprise = oneReprise(repriseId);
    List<RepriseCavalierCheval> temp = repriseCavalierChevalRepository.findAll();
    temp.removeIf(o -> !(o.getRepriseId() == repriseId));
    for (RepriseCavalierCheval i : temp){
      if (i.getCavalierId().equals(cavalierId))
        alreadyPresent = true;
    }
    if (!alreadyPresent){
      repriseCavalierChevalRepository.save(new RepriseCavalierCheval(repriseId, cavalierId,null));
    }
    return reprise;
  }
  //endregion

  //endregion

  //region DELETE mapping

  //Supprime l'utilisateur désigné par id
  @DeleteMapping("/utilisateurs/{utilisateurId}")
  void deleteUtilisateur(@PathVariable Long utilisateurId){utilisateurRepository.deleteById(utilisateurId); }

  //permet de retirer un cheval
  @DeleteMapping("/chevaux/{chevalId}")
  void deleteCheval(@PathVariable Long chevalId){chevalRepository.deleteById(chevalId);}

  //permet de supprimer une reprise
  @DeleteMapping("/reprises/{repriseId}")
  void deleteReprise(@PathVariable Long repriseId){repriseRepository.deleteById(repriseId); }

  //endregion
}
