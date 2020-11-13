package com.esiea.ecurie;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
class Utilisateur {

  private @Id @GeneratedValue Long userId;
  private String nom;
  private String prenom;
  private String email;
  private String role; //soit "cavalier" ; "moniteur" ; "admin" ; "superadmin"
  private String telephone;
  private String numLicense;

  private int galop;


  //MDP pas version finale, a modifier une fois authentification effectuée
  private String mdp;

  Utilisateur() {}

  Utilisateur(String nom, String prenom, String email, String role, String telephone, String numLicense, int galop, String mdp){
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.role = role;
    this.telephone = telephone;
    this.galop = galop;
    this.numLicense = numLicense;

    this.mdp = mdp;
  }

  public Long getId() { return this.userId;}
  public String getNom() {return this.nom;}
  public String getPrenom() {return  this.prenom;}
  public String getEmail() {return this.email;}
  public String getRole() {return this.role;}
  public String getTelephone() {return this.telephone;}
  public int getGalop() {return this.galop;}
  public String getNumLicense() {return this.numLicense;}

  public String getMdp() {return this.mdp;}

  public void setId(Long userId) {this.userId = userId;}
  public void setNom (String nom) {this.nom = nom;}
  public void setPrenom (String prenom) {this.prenom = prenom;}
  public void setEmail (String email) {this.email = email;}
  public void setRole (String role) {this.role = role;}
  public void setTelephone (String telephone) {this.telephone = telephone;}
  public void setGalop (int galop) {this.galop = galop;}
  public void setNumLicense(String numLicense) {this.numLicense = numLicense;}

  public void setMdp(String mdp) {this.mdp = mdp;}

  @Override
  public boolean equals(Object o) {

    if (this == o)
      return true;
    if (!(o instanceof Utilisateur))
      return false;
    Utilisateur utilisateur = (Utilisateur) o;
    return Objects.equals(this.userId, utilisateur.userId)
      && Objects.equals(this.nom, utilisateur.nom)
      && Objects.equals(this.prenom, utilisateur.prenom)
      && Objects.equals(this.email, utilisateur.email)
      && Objects.equals(this.role, utilisateur.role)
      && Objects.equals(this.telephone, utilisateur.telephone)
      && Objects.equals(this.galop, utilisateur.galop)
      && Objects.equals(this.numLicense, utilisateur.numLicense);
  }

  @Override
  public int hashCode() { return Objects.hash(this.userId, this.nom, this.prenom, this.email, this.role, this.telephone, this.numLicense, this.galop, this.mdp);}

  @Override
  public String toString(){
    return "Cavalier{" + "id=" + this.userId +
      ", nom='" + this.nom + '\'' +
      ", prénom=" + this.prenom +
      ", e-mail=" + this.email +
      ", role=" + this.role +
      ", téléphone=" + this.telephone +
      ", galop=" + this.galop +
      ", numLicense=" + this.numLicense + "}";
  }
}
