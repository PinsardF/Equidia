package com.esiea.ecurie;

import java.util.Objects;

public class CavalierChevalPair {

  private Utilisateur cavalier;
  private Cheval cheval;

  CavalierChevalPair() {}

  CavalierChevalPair(Utilisateur cavalier, Cheval cheval) {
    this.cavalier = cavalier;
    this.cheval = cheval;
  }

  public Cheval getCheval() {
    return cheval;
  }
  public Utilisateur getCavalier() {
    return cavalier;
  }

  public void setCavalier(Utilisateur cavalier) {
    this.cavalier = cavalier;
  }
  public void setCheval(Cheval cheval) {
    this.cheval = cheval;
  }

  @Override
  public boolean equals(Object o) {

    if (this == o)
      return true;

    if (!(o instanceof CavalierChevalPair))
      return false;

    CavalierChevalPair cavalierChevalPair = (CavalierChevalPair) o;
    return this.cavalier.equals(cavalierChevalPair.cavalier) &&
      this.cheval.equals(cavalierChevalPair.cheval);
  }

  @Override
  public int hashCode() { return Objects.hash(this.cavalier, this.cheval);}

  @Override
  public String toString(){
    return "CavalierChevalPair{" +
      this.cavalier.toString() +
      this.cheval.toString() +
      "}";
  }
}
