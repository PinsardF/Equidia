package com.esiea.ecurie;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class RepriseCavalierCheval {


  @Id
  @GeneratedValue
  private Long id;

  private Long repriseId;
  private Long cavalierId;
  private Long chevalId;


  RepriseCavalierCheval() {}

  RepriseCavalierCheval(Long repriseId, Long cavalierId, Long chevalId) {
    this.repriseId = repriseId;
    this.cavalierId = cavalierId;
    this.chevalId = chevalId;
  }

  public Long getId() {return id;}
  public Long getChevalId() {
    return chevalId;
  }
  public Long getCavalierId() {
    return cavalierId;
  }
  public Long getRepriseId() {return repriseId;}

  public void setId(Long id) {this.id = id;};
  public void setCavalierId(Long cavalierId) {
    this.cavalierId = cavalierId;
  }
  public void setChevalId(Long chevalId) {
    this.chevalId = chevalId;
  }
  public void setRepriseId(Long repriseId) {this.repriseId = repriseId;}

  @Override
  public boolean equals(Object o) {

    if (this == o)
      return true;

    if (!(o instanceof RepriseCavalierCheval))
      return false;

    RepriseCavalierCheval repriseCavalierCheval = (RepriseCavalierCheval) o;
    return this.cavalierId == repriseCavalierCheval.getCavalierId() &&
      this.chevalId == repriseCavalierCheval.getCavalierId() &&
      this.repriseId == repriseCavalierCheval.getRepriseId();
  }

  @Override
  public int hashCode() { return Objects.hash(this.cavalierId, this.chevalId);}

  @Override
  public String toString(){
    return "CavalierChevalPair{" +
      "CavalierId=" + this.getCavalierId() +
      "ChevalId=" + this.getChevalId() +
      "RepriseId=" + this.getRepriseId() +
      "}";
  }



}
