package com.esiea.ecurie;

import java.util.Objects;

public class UtilisateurCavalierPair {

  private Long utilisateurId;
  private Long chevalId;

  UtilisateurCavalierPair() {}

  UtilisateurCavalierPair(Long utilisateurId, Long chevalId) {
    this.utilisateurId = utilisateurId;
    this.chevalId = chevalId;
  }

  public Long getUtilisateurId() {return this.utilisateurId;}
  public Long getChevalIda() {return this.chevalId;}

  public void setUtilisateurId(Long utilisateurId) {this.utilisateurId = utilisateurId;}
  public void setChevalId(Long chevalId) {this.chevalId = chevalId;}

  @Override
  public boolean equals(Object o) {

    if (this == o)
      return true;
    if (!(o instanceof UtilisateurCavalierPair))
      return false;
    UtilisateurCavalierPair utilisateurCavalierPair = (UtilisateurCavalierPair) o;
    return Objects.equals(this.utilisateurId, utilisateurCavalierPair.utilisateurId)
      && Objects.equals(this.chevalId, utilisateurCavalierPair.chevalId);
  }

  @Override
  public int hashCode() { return Objects.hash(this.utilisateurId, this.chevalId);}

  @Override
  public String toString(){
    return "UtilisateurCavalierPair{utilisateurId='" + this.utilisateurId + '\'' +
      ", chevalId=" + this.chevalId +
      "}";
  }
}
