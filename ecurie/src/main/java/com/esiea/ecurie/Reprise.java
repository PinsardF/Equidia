package com.esiea.ecurie;

import java.util.ArrayList;

import java.util.Objects;

import javax.persistence.*;

@Entity
class Reprise {

  @Id
  @GeneratedValue
  @Column (name = "repriseId")
  private Long repriseId;

  @Column (name = "moniteurId")
  private Long moniteurId;

  @Column (name = "date")
  private String date;    // format: 1970/12/31/1230

  @Column (name = "inscritMax")
  private String inscritMax;

  @Column (name = "galop")
  private String galop;

  @Column (name = "finished")
  private boolean finished;

  Reprise() {
    finished = false;
  }

  Reprise(Long moniteurId, String date, String inscritMax, String galop){
    this.moniteurId = moniteurId;
    this.date = date;
    this.inscritMax = inscritMax;
    this.galop = galop;
    finished = false;
  }

  public Long getRepriseId() {
    return this.repriseId;
  }
  public Long getMoniteurId() {
    return this.moniteurId;
  }
  public String getDate() {
    return this.date;
  }
  public String getInscritMax() {return this.inscritMax;}
  public String getGalop() {return this.galop;}
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
  public void setInscritMax(String inscritMax) {this.inscritMax = inscritMax;}
  public void setGalop(String galop) {this.galop = galop;}
  public void setFinished(boolean finished) {this.finished = finished;}

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
  public int hashCode() { return Objects.hash(this.repriseId, this.moniteurId, this.date, this.inscritMax, this.finished);}

  @Override
  public String toString(){
    return "Reprise{" + "id=" + this.repriseId +
      ", moniteur='" + this.moniteurId +
      ", date=" + this.date +
      ", inscritMax=" + this.inscritMax +
      "}";
  }


}
