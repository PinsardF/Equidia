package com.esiea.ecurie;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
class Cavalier {

    private @Id @GeneratedValue Long id;
    private String nom;
    private String prenom;
    private String email;
    private int telephone;
    private int galop;

    Cavalier() {}

    Cavalier (String nom, String prenom, String email, int telephone, int galop){
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.telephone = telephone;
        this.galop = galop;
    }

    public Long getId() { return this.id;}
    public String getNom() {return this.nom;}
    public String getPrenom() {return  this.prenom;}
    public String getEmail() {return this.email;}
    public int getTelephone() {return this.telephone;}
    public int getGalop() {return this.galop;}

    public void setId(Long id) {this.id = id;}

    public void setNom (String nom) {this.nom = nom;}
    public void setPrenom (String prenom) {this.prenom = prenom;}
    public void setEmail (String email) {this.email = email;}
    public void setTelephone (int telephone) {this.telephone = telephone;}
    public void setGalop (int galop) {this.galop = galop;}

    @Override
    public boolean equals(Object o) {

        if (this == o)
            return true;
        if (!(o instanceof Cavalier))
            return false;
        Cavalier cavalier = (Cavalier) o;
        return Objects.equals(this.id, cavalier.id)
                && Objects.equals(this.nom, cavalier.nom)
                && Objects.equals(this.prenom, cavalier.prenom)
                && Objects.equals(this.email, cavalier.email)
                && Objects.equals(this.telephone, cavalier.telephone)
                && Objects.equals(this.galop, cavalier.galop);
    }

    @Override
    public int hashCode() { return Objects.hash(this.id, this.nom, this.prenom, this.email, this.telephone, this.galop);}

    @Override
    public String toString(){
        return "Cavalier{" + "id=" + this.id +
                ", nom='" + this.nom + '\'' +
                ", prénom=" + this.prenom +
                ", e-mail=" + this.email +
                ", téléphone=" + this.telephone +
                ", galop=" + this.galop + "}";
    }
}
