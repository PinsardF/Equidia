package com.esiea.ecurie;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
class Controller {

  private final UtilisateurRepository utilisateurRepository;
  private final ChevalRepository chevalRepository;
  private final RepriseRepository repriseRepository;


  Controller (UtilisateurRepository utilisateurRepository,
              ChevalRepository chevalRepository,
              RepriseRepository repriseRepository){

    this.utilisateurRepository = utilisateurRepository;
    this.chevalRepository = chevalRepository;
    this.repriseRepository = repriseRepository;
  }

  //region Utilisateur mapping

  //region GET mapping
  @GetMapping("/utilisateurs")
  List<Utilisateur> allUtilisateur() {
    return utilisateurRepository.findAll();
  }

  @GetMapping("/utilisateurs/{id}")
  Utilisateur oneUtilisateur(@PathVariable Long id) {

    return utilisateurRepository.findById(id)
      .orElseThrow(() -> new UtilisateurNotFoundException(id));
  }

  @GetMapping("/utilisateurs/{login}/{mdp}")
  List<Utilisateur> findUtilisateurByLoginMdp(@PathVariable String login, @PathVariable String mdp){
    List<Utilisateur> returnVal = utilisateurRepository.findAll();
    returnVal.removeIf(o -> (!o.getLogin().equals(login)) && (!o.getMdp().equals(mdp)));
    return returnVal;
  }

  @GetMapping("/utilisateurs/{login}")
  List<Utilisateur> findUtilisateurByLogin(@PathVariable String login){
    List<Utilisateur> returnVal = utilisateurRepository.findAll();
    returnVal.removeIf(o -> !o.getLogin().equals(login));
    return returnVal;
  }

  @GetMapping("/cavaliers/{id}/reprises")
  List<Reprise> findReprisesInscrites(@PathVariable Long id){

    Utilisateur utilisateur = utilisateurRepository.findById(id)
      .orElseThrow(() -> new UtilisateurNotFoundException(id));

    List<Reprise> reprises = repriseRepository.findAll();
    reprises.removeIf(o -> (!o.isInscrit(utilisateur)));

    return reprises;
  }

  @GetMapping("/moniteur/{id}/reprises")
  List<Reprise> findReprisesCreees(@PathVariable Long id){

    Utilisateur utilisateur = utilisateurRepository.findById(id)
      .orElseThrow(() -> new UtilisateurNotFoundException(id));

    List<Reprise> reprises = repriseRepository.findAll();
    reprises.removeIf(o -> (!o.getMoniteur().equals(utilisateur)));
    return reprises;
  }
  //endregion

  //region POST mapping
  @PostMapping("/utilisateurs")
  Utilisateur newUtilisateur(@RequestBody Utilisateur newUtilisateur) {
    return utilisateurRepository.save(newUtilisateur);
  }
  //endregion

  //region PUT mapping
  @PutMapping("/utilisateurs/{id}")
  Utilisateur replaceUtilisateur(@RequestBody Utilisateur newUtilisateur, @PathVariable Long id){

    return utilisateurRepository.findById(id)
      .map(utilisateur -> {
        utilisateur.setNom(newUtilisateur.getNom());
        utilisateur.setPrenom(newUtilisateur.getPrenom());
        utilisateur.setEmail(newUtilisateur.getEmail());
        utilisateur.setTelephone(newUtilisateur.getTelephone());
        utilisateur.setGalop(newUtilisateur.getGalop());
        return utilisateurRepository.save(utilisateur);
      })
      .orElseGet(() -> {
        newUtilisateur.setId(id);
        return utilisateurRepository.save(newUtilisateur);
      });
  }
  //endregion

  //region DELETE mapping
  @DeleteMapping("/utilisateurs/{id}")
  void deleteUtilisateur(@PathVariable Long id) {
    utilisateurRepository.deleteById(id);
  }
  //endregion

  //endregion

  //region Chevaux mapping

  //region GET mapping
  @GetMapping("/chevaux")
  List<Cheval> allChevaux() {return chevalRepository.findAll();}

  @GetMapping("/chevaux/{id}")
  Cheval oneCheval(@PathVariable Long id) {
    return chevalRepository.findById(id)
      .orElseThrow(() -> new ChevalNotFoundException(id));
  }

  @GetMapping("chevaux/disponible/{date}")
  List<Cheval> chevauxDisponible (@PathVariable String date){
    List<Cheval> chevaux = chevalRepository.findAll();
    List<Reprise> reprises = repriseRepository.findAll();
    for (Reprise reprise: reprises){
      chevaux.removeIf(reprise::isInscrit);
    }
    return chevaux;
  }
  //endregion

  //region POST mapping
  @PostMapping("/chevaux")
  Cheval newCheval(@RequestBody Cheval newCheval) {
    return chevalRepository.save(newCheval);
  }
  //endregion

  //region PUT mapping
  @PutMapping("/chevaux/{id}")
  Cheval replaceCheval(@RequestBody Cheval newCheval, @PathVariable Long id){

    return chevalRepository.findById(id)
      .map(cheval -> {
        cheval.setNom(newCheval.getNom());
        cheval.setAge(newCheval.getAge());
        cheval.setGalop(newCheval.getGalop());
        return chevalRepository.save(cheval);
      })
      .orElseGet(() -> {
        newCheval.setChevalId(id);
        return chevalRepository.save(newCheval);
      });
  }
  //endregion

  //region DELETE mapping
  @DeleteMapping("/chevaux/{id}")
  void deleteCheval(@PathVariable Long id) {
    chevalRepository.deleteById(id);
  }
  //endregion

  //endregion

  //region Reprise mapping

  //region GET mapping
  @GetMapping("/reprises")
  List<Reprise> allReprise() {
    return repriseRepository.findAll();
  }

  @GetMapping("/reprises/{id}")
  Reprise oneReprise(@PathVariable Long id) {

    return repriseRepository.findById(id)
      .orElseThrow(() -> new RepriseNotFoundException(id));
  }
  //endregion

  //region POST mapping
  @PostMapping("/reprises")
  Reprise newReprise(@RequestBody Reprise newReprise) {
    return repriseRepository.save(newReprise);
  }
  //endregion

  //region PUT mapping
  @PutMapping("/reprises/{id}")
  Reprise replaceReprise(@RequestBody Reprise newReprise, @PathVariable Long id){

    return repriseRepository.findById(id)
      .map(reprise -> {
        reprise.setMoniteur(newReprise.getMoniteur());
        reprise.setDate(newReprise.getDate());
        reprise.setFinished(newReprise.isFinished());
        reprise.inscrits = newReprise.inscrits;
        return repriseRepository.save(reprise);
      })
      .orElseGet(() -> {
        newReprise.setRepriseId(id);
        return repriseRepository.save(newReprise);
      });
  }

  @PutMapping("/reprises/{id}/finalize")
  Reprise changerStatus(@RequestBody boolean bool, @PathVariable Long id){
    return repriseRepository.findById(id)
      .map(reprise -> {
        reprise.setFinished(bool);
        return repriseRepository.save(reprise);
      })
      .orElseThrow(() -> new RepriseNotFoundException(id));
  }
  //endregion

  //region DELETE mapping
  @DeleteMapping("/reprises/{id}")
  void deleteReprise(@PathVariable Long id) {
    repriseRepository.deleteById(id);
  }
  //endregion

  //endregion

}
