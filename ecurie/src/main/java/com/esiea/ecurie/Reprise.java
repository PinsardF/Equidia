package com.esiea.ecurie;

import java.util.ArrayList;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Reprise {

  private @Id @GeneratedValue Long repriseId;
  private Long moniteurId;

  public ArrayList<CavalierChevalPair> inscrits;  //set a public car sinon je dois créer des getter/setter pour chaque opération

  private String date;    // format: 1970/12/31/1230

  private int inscritMax;

  private int galop;

  private boolean finished;

  Reprise() {
    finished = false;

    inscrits = new ArrayList<CavalierChevalPair>();
  }

  Reprise(Long moniteurId, String date, int inscritMax, int galop){
    this.moniteurId = moniteurId;
    this.date = date;
    this.inscritMax = inscritMax;
    this.galop = galop;
    finished = false;
    inscrits = new ArrayList<CavalierChevalPair>();
  }

  public Long getRepriseId() {
    return this.repriseId;
  }
  public long getMoniteurId() {
    return this.moniteurId;
  }
  public String getDate() {
    return this.date;
  }
  public int getInscritMax() {return this.inscritMax;}
  public int getGalop() {return this.galop;}
  public boolean isFinished() {
    return this.finished;
  }

  public void setRepriseId(Long repriseId) {
    this.repriseId = repriseId;
  }
  public void setMoniteurId(Long moniteurId) {
    this.moniteurId = moniteurId;
  }
  public void setDate(String date) {
    this.date = date;
  }
  public void setInscritMax(int inscritMax) {this.inscritMax = inscritMax;}
  public void setGalop(int galop) {this.galop = galop;}
  public void setFinished(boolean finished) {this.finished = finished;}

  public boolean isInscrit(Utilisateur utilisateur){
    for (CavalierChevalPair pair: this.inscrits) {
      if (pair.getCavalierId() == utilisateur.getId()){
        return true;
      }
    }
    return false;
  }
  public boolean isInscrit(Cheval cheval){
    for (CavalierChevalPair pair: this.inscrits) {
      if (pair.getCavalierId() == cheval.getChevalId()){
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
      && Objects.equals(this.moniteurId, reprise.moniteurId)
      && Objects.equals(this.date, reprise.date)
      && Objects.equals(this.inscritMax, reprise.inscritMax)
      && Objects.equals(this.galop, reprise.galop)
      && Objects.equals(this.finished, reprise.finished);
  }

  @Override
  public int hashCode() { return Objects.hash(this.repriseId, this.moniteurId, this.inscrits, this.date, this.inscritMax, this.finished);}

  @Override
  public String toString(){

    String temp = "Inscrits{";

    for (CavalierChevalPair pair: this.inscrits) {
      temp += pair.toString();
    }

    temp += "}";

    return "Reprise{" + "id=" + this.repriseId +
      ", moniteur='" + this.moniteurId +
      temp +
      ", date=" + this.date +
      ", inscritMax=" + this.inscritMax +
      "}";
  }


}
