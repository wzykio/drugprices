import React from 'react';
import style from './Otherdrugs.module.css';

const Otherdrugs = ({ weight, view, uni }) => {
  uni ? (weight = weight) : (weight = (weight * 45) / 100);
  return (
    <div className={view ? style.unvisible : style.otherdrugsWrapper}>
      <div className={style.otherdrugsItemAdrenalina}>
        <h2>Adrenalina</h2>
        <p>Wstrząs anafilaktyczny: 500 µg im</p>
        <p>
          Napad astmy: {weight / 100} mg - 1 amp. do 10 ml 0.9% NaCl. Podać{' '}
          {weight / 10} ml s.c.{' '}
        </p>
        <p></p>
      </div>

      <div className={style.otherdrugsItemAdenozyna}>
        <h2>Adenozyna</h2>
        <p>6 mg Adenozyzyny rozcieńcz do 6 ml 0.9 % Nacl</p>
        <p>
          I dawka: {weight / 10} mg iv - {weight / 10} ml{' '}
        </p>
        <p>
          II dawka i kolejne : {(weight / 10) * 2} mg iv - {(weight / 10) * 2}{' '}
          ml
        </p>
      </div>

      <div className={style.otherdrugsItemDexaven}>
        <h2>Deksametazon</h2>
        <p>Anafilaksja: 4 mg - 8mg iv</p>
        <p>Astma: 4 mg - 8mg iv</p>
        <p>Zapalenie krtani: {(0.15 * weight).toFixed(2)} mg iv</p>
      </div>

      <div className={style.otherdrugsItemDiazepam}>
        <h2>Diazepam</h2>
        <p>Dawka: {(0.25 * weight).toFixed(2)} mg iv./io. </p>
        <p>Podać bez rozcieńczenia {(0.05 * weight).toFixed(2)} ml</p>
        <div className={style.alert}>
          Uwaga ! Przeciwwskazany u noworodków i wcześniaków
        </div>
      </div>

      <div className={style.otherdrugsItemFlumazenil}>
        <h2>Flumazenil</h2>
        <p>Dawka: {10 * weight} iv./io µg Można powtarzać co 60s max 200 µg</p>
        <p>Droga podania : iv io</p>
      </div>

      <div className={style.otherdrugsItemHydrocortison}>
        <h2>Hydrocortison</h2>
        <p>Dawka: {weight * 5} mg</p>
        <p>100 mg leku rozpuścić i rozcieńczyć do 20 ml 0.9% Nacl</p>
        <p>Podać: {weight} ml iv./io.</p>
      </div>

      <div className={style.otherdrugsItemMagnez}>
        <h2>Magnez 20%</h2>
        <p>Dawka: {weight * 40} mg</p>
        <p>Podać do wlewu {(weight * 2) / 10} ml i.v/i.o.</p>
      </div>

      <div className={style.otherdrugsItemMorfina}>
        <h2>Morfina</h2>
        <p>Dawka: {weight / 10} mg</p>
        <p>10 mg rozcieńczyć do 10 ml 0.9 % NaCl</p>
        <p>Podać {weight / 10} ml i.v/i.o.</p>
      </div>

      <div className={style.otherdrugsItemParacetamol}>
        <h2>Paracetamol w czopkach</h2>
        <p>Dawka: {weight * 10} mg pr.</p>
      </div>
    </div>
  );
};
export default Otherdrugs;
