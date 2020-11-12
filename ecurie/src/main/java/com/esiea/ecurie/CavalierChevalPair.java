package com.esiea.ecurie;

import java.util.Objects;

public class CavalierChevalPair {

  private Long cavalierId;
  private Long chevalId;

  CavalierChevalPair() {}

  CavalierChevalPair(Long cavalierId, Long chevalId) {
    this.cavalierId = cavalierId;
    this.chevalId = chevalId;
  }

  public Long getChevalId() {
    return chevalId;
  }
  public Long getCavalierId() {
    return cavalierId;
  }

  public void setCavalierId(Long cavalierId) {
    this.cavalierId = cavalierId;
  }
  public void setChevalId(Long chevalId) {
    this.chevalId = chevalId;
  }

  @Override
  public boolean equals(Object o) {

    if (this == o)
      return true;

    if (!(o instanceof CavalierChevalPair))
      return false;

    CavalierChevalPair cavalierChevalPair = (CavalierChevalPair) o;
    return this.cavalierId == cavalierChevalPair.getCavalierId() &&
      this.chevalId == cavalierChevalPair.getCavalierId();
  }

  @Override
  public int hashCode() { return Objects.hash(this.cavalierId, this.chevalId);}

  @Override
  public String toString(){
    return "CavalierChevalPair{" +
      "CavalierId=" + this.getCavalierId() +
      "ChevalId=" + this.getChevalId() +
      "}";
  }



}
