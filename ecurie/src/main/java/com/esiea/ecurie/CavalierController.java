package com.esiea.ecurie;

import java.util.List;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
class CavalierController {

    private final CavalierRepository repository;

    CavalierController(CavalierRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/cavaliers")
    List<Cavalier> all() {
        return repository.findAll();
    }

    @PostMapping("/cavaliers")
    Cavalier newCavalier(@RequestBody Cavalier newCavalier) {
        return repository.save(newCavalier);
    }

    @GetMapping("/cavaliers/{id}")
    Cavalier one(@PathVariable Long id) {

        return repository.findById(id)
                .orElseThrow(() -> new CavalierNotFoundException(id));
    }

    @PutMapping("/cavaliers/{id}")
    Cavalier replaceCavalier(@RequestBody Cavalier newCavalier, @PathVariable Long id){

        return repository.findById(id)
                .map(cavalier -> {
                    cavalier.setNom(newCavalier.getNom());
                    cavalier.setPrenom(newCavalier.getPrenom());
                    cavalier.setEmail(newCavalier.getEmail());
                    cavalier.setTelephone(newCavalier.getTelephone());
                    cavalier.setGalop(newCavalier.getGalop());
                    return repository.save(cavalier);
                })
                .orElseGet(() -> {
                    newCavalier.setId(id);
                    return repository.save(newCavalier);
                });
    }

    @DeleteMapping("/cavaliers/{id}")
    void deleteEmployee(@PathVariable Long id) {
        repository.deleteById(id);
    }

}
