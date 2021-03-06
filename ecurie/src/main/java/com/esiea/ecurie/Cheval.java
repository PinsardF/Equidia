package com.esiea.ecurie;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Cheval {

  private @Id @GeneratedValue Long chevalId;
  private String nom;
  private String age;
  private String galop;

  Cheval() {}

  Cheval(String nom, String age, String galop){
    this.nom = nom;
    this.age = age;
    this.galop = galop;
  }

  public Long getChevalId() {return this.chevalId;}
  public String getNom() {return this.nom;}
  public String getAge() {return this.age;}
  public String getGalop() {return this.galop;}

  public void setChevalId(Long chevalId) {this.chevalId = chevalId;}
  public void setNom(String nom) {this.nom = nom;}
  public void setAge(String age) {this.age = age;}
  public void setGalop(String galop) {this.galop = galop;}

  @Override
  public boolean equals(Object o) {

    if (this == o)
      return true;
    if (!(o instanceof Cheval))
      return false;
    Cheval cheval = (Cheval) o;
    return Objects.equals(this.chevalId, cheval.chevalId)
      && Objects.equals(this.nom, cheval.nom)
      && Objects.equals(this.age, cheval.age)
      && Objects.equals(this.galop, cheval.galop);
  }

  @Override
  public int hashCode() { return Objects.hash(this.chevalId, this.nom, this.age, this.galop);}

  @Override
  public String toString(){
    return "Cheval{" + "id=" + this.chevalId +
      ", nom='" + this.nom + '\'' +
      ", age=" + this.age +
      ", galop=" + this.galop +
      "}";
  }


}
