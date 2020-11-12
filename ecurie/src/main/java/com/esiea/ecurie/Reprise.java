package com.esiea.ecurie;

import java.util.ArrayList;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Reprise {

  private @Id @GeneratedValue Long repriseId;
  private Utilisateur moniteur;

  public ArrayList<CavalierChevalPair> inscrits;  //set a public car sinon je dois créer des getter/setter pour chaque opération

  private String date;    // format: 1970/12/31/1230

  private boolean finished;

  Reprise() {
    finished = false;

    inscrits = new ArrayList<CavalierChevalPair>();
  }

  Reprise(Utilisateur moniteur, String date){
    this.moniteur = moniteur;
    this.date = date;

    finished = false;

    inscrits = new ArrayList<CavalierChevalPair>();

  }

  public Long getRepriseId() {
    return repriseId;
  }
  public Utilisateur getMoniteur() {
    return moniteur;
  }
  public String getDate() {
    return date;
  }
  public boolean isFinished() {
    return finished;
  }

  public void setRepriseId(Long repriseId) {
    this.repriseId = repriseId;
  }
  public void setMoniteur(Utilisateur moniteur) {
    this.moniteur = moniteur;
  }
  public void setDate(String date) {
    this.date = date;
  }
  public void setFinished(boolean finished) {this.finished = finished;}

  public boolean isInscrit(Utilisateur utilisateur){
    for (CavalierChevalPair pair: this.inscrits) {
      if (pair.getCavalier().equals(utilisateur)){
        return true;
      }
    }
    return false;
  }

  public boolean isInscrit(Cheval cheval){
    for (CavalierChevalPair pair: this.inscrits) {
      if (pair.getCavalier().equals(cheval)){
        return true;
      }
    }
    return false;
  }

  @Override
  public boolean equals(Object o) {

    if (this == o)
      return true;
    if (!(o instanceof Reprise))
      return false;
    Reprise reprise = (Reprise) o;
    return Objects.equals(this.repriseId, reprise.repriseId)
      && this.moniteur.equals(reprise.moniteur)
      && Objects.equals(this.date, reprise.date)
      && Objects.equals(this.finished, reprise.finished);
  }

  @Override
  public int hashCode() { return Objects.hash(this.repriseId, this.moniteur, this.inscrits, this.finished, this.date, this.finished);}

  @Override
  public String toString(){

    String temp = "Inscrits{";

    for (CavalierChevalPair pair: this.inscrits) {
      temp += pair.toString();
    }

    temp += "}";

    return "Reprise{" + "id=" + this.repriseId +
      ", moniteur='" + this.moniteur.toString() + '\'' +
      temp +
      ", date=" + this.date +
      "}";
  }

}
